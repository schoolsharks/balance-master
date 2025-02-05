import { NextFunction, Request, Response } from "express";
import { ActiveSessionModel } from "../models/ActiveSession";
import AppError from "../utils/appError";
import { SessionModel } from "../models/Sessions";
import {
  BASE_TIME,
  ChoiceTypes,
  questions,
  quickOmniaQuestions,
  TOTAL_QUESTIONS,
} from "../data/questions";
import { UserModel } from "../models/Users";

export const fetchCurrentSessionInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const activeSession = await ActiveSessionModel.findOne();

  if (!activeSession?.isActive) {
    return next(new AppError("No Session Active", 404));
  }

  const sessionId = activeSession.activeSession;

  const sessionInfo = await SessionModel.findById(sessionId);

  if (!sessionInfo) {
    return next(new AppError("Error finding session", 404));
  }

  const feedbackQuestions = await UserModel.aggregate([
    { $match: { session: sessionId } },
    { $unwind: "$quickOmniaResponses" },
    {
      $group: {
        _id: {
          quesId: "$quickOmniaResponses.quesId",
          option: "$quickOmniaResponses.option",
        },
        count: { $sum: 1 },
      },
    },
    {
      $group: {
        _id: "$_id.quesId",
        totalResponses: { $sum: "$count" },
        options: {
          $push: {
            option: "$_id.option",
            count: "$count",
          },
        },
      },
    },
  ]);

  const feedbackAnalysis = quickOmniaQuestions.map((question) => {
    const responseStats = feedbackQuestions.find(
      (stat) => stat._id === question.quesId
    );

    if (!responseStats) {
      return {
        question: question.question,
        options: question.options.map((opt) => ({
          text: opt.optionText,
          percentage: 0,
        })),
      };
    }

    return {
      question: question.question,
      options: question.options.map((opt) => {
        const optionStat = responseStats.options.find(
          (o: any) => o.option === opt.option
        );
        const percentage = optionStat
          ? ((optionStat.count / responseStats.totalResponses) * 100).toFixed(2)
          : "0";

        return {
          option: opt.optionText,
          percentage: parseFloat(percentage),
        };
      }),
    };
  });

  const scenarioQuestions = questions.filter(
    (ques) => !/[A-Za-z]/.test(ques.id)
  );

  // const scenarioQuestions = questions


  const choiceMapping = new Map(
    questions.flatMap((q) =>
      q.options.map((opt) => [`${q.id}_${opt.option}`, opt.choise])
    )
  );


  const questionTextMapping = new Map(
    scenarioQuestions.map((q) => [q.id, q.question])
  );
  
  const userResponses = await UserModel.find(
    { session: sessionId },
    { responses: 1, _id: 0 }
  ).lean();

  const responseCounts = new Map();

  userResponses.forEach(({ responses }) => {
    responses.forEach(({ quesId, option }) => {
      const quesIdStr = String(quesId);

      // if (/[A-Za-z]/.test(quesIdStr)) return;

      const choiceKey = `${quesIdStr}_${option}`;

      const choiceType = choiceMapping.get(choiceKey);
      const scenarioId=quesId.split("")[0]

      if (!responseCounts.has(scenarioId)) {
        responseCounts.set(scenarioId, {
          optimal: 0,
          acceptable: 0,
          suboptimal: 0,
        });
      }

      const counts = responseCounts.get(scenarioId);
      if (choiceType === ChoiceTypes.OPTIMAL) counts.optimal++;
      if (choiceType === ChoiceTypes.ACCEPTABLE) counts.acceptable++;
      if (choiceType === ChoiceTypes.SUB_OPTIMAL) counts.suboptimal++;
    });
  });


 
  const scenariosAnalysis = [...responseCounts.entries()]
    .map(([id, counts]) => ({
      id,
      question: questionTextMapping.get(id) || "Unknown Question",
      ...counts,
    }))
    .sort((a, b) => a.id - b.id);

  let totalOptimal = 0;
  let totalAcceptable = 0;
  let totalSuboptimal = 0;

  scenariosAnalysis.forEach((item) => {
    totalOptimal += item.optimal;
    totalAcceptable += item.acceptable;
    totalSuboptimal += item.suboptimal;
  });

  const totalChoices = totalOptimal + totalAcceptable + totalSuboptimal;

  const choicesDistribution = {
    optimal: (totalOptimal * 100) / totalChoices,
    acceptable: (totalAcceptable * 100) / totalChoices,
    suboptimal: (totalSuboptimal * 100) / totalChoices,
  };

  const gameCompletion =
    (Object.values(sessionInfo.choicesDistribution).reduce((a, b) => a + b) *
      100) /
    (sessionInfo.players * TOTAL_QUESTIONS);

  const livePlayers = sessionInfo.players;

  const trustScore = sessionInfo.overallStats.trustScore / sessionInfo.players;

  const timeUsed =
    BASE_TIME - sessionInfo.overallStats.timeInHand / sessionInfo.players;
  const colleguesTime =
    sessionInfo.overallStats.colleaguesTime / sessionInfo.players;

  res.status(200).json({
    livePlayers,
    gameCompletion,
    trustScore,
    timeUsed,
    colleguesTime,
    feedbackAnalysis,
    scenariosAnalysis,
    choicesDistribution,
  });
};



export const resetSession = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const activeSession = await ActiveSessionModel.findOne();

  if (!activeSession) {
    return next(new AppError("Active Session module not found", 404));
  }
  const newSession = await SessionModel.create({
    players: 0,
    overallStats: {
      trustScore: 0,
      timeInHand: 0,
      colleaguesTime: 0,
    },
    choicesDistribution: {
      optimal: 0,
      subOptimal: 0,
      acceptable: 0,
    },
  });

  activeSession.isActive = true;
  activeSession.activeSession=newSession._id

  await activeSession.save()

  return res.status(200).json({message:"Session Reset Successful"})
};
