import { NextFunction, Request, response, Response } from "express";
import {
  ChoiceTypes,
  questions,
  quickOmniaQuestions,
  TOTAL_QUESTIONS,
} from "../data/questions";
import { UserModel } from "../models/Users";
import AppError from "../utils/appError";
import { SessionModel } from "../models/Sessions";

export const handleFetchNextQuestion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { quesId, option } = req.body;
  const userId = req.user;

  const user = await UserModel.findById(userId);

  if (!user) {
    return next(new AppError("User not found", 400));
  }

  let question;

  if (user.responses.length === 0 && (!quesId || !option)) {
    // If it is the first question
    question = questions[0];
  } else {
    let lastQuestionId = quesId;
    let lastResponse = option;

    if (!quesId || !option) {
      // If user has not send the question id or option, fetch the last response from his responses
      lastQuestionId = user.responses[user.responses?.length - 1]?.quesId;
      lastResponse = user.responses[user.responses?.length - 1]?.option;
    } else {
      // If he is sending question id and response of a question...

      const existingResponseIndex = user.responses.findIndex(
        (response) => response.quesId === quesId
      );

      if (existingResponseIndex !== -1) {
        // If already responded just update the selected choise and accordingly scores
        const existingResponse = user.responses[existingResponseIndex];

        if (existingResponse.option !== option) {
          const previousOption = questions
            .find((q) => q.id === quesId)
            ?.options.find((o) => o.option === existingResponse.option);

          const newOption = questions
            .find((q) => q.id === quesId)
            ?.options.find((o) => o.option === option);

          if (previousOption && newOption) {
            user.timeInHand += previousOption.timeCost - newOption.timeCost;
            user.trustScore += newOption.trustShift - previousOption.trustShift;

            existingResponse.option = option;
            // Updating overall stats
            await SessionModel.findByIdAndUpdate(
              user.session,
              {
                $inc: {
                  "overallStats.trustScore":
                    newOption.trustShift - previousOption.trustShift,
                  "overallStats.timeInHand":
                    previousOption.timeCost - newOption.timeCost,
                  // Not updating overall colleagues time in stats for now (also not updating individual and optimial choices also)
                },
              },
              { new: true }
            );
          }
        }
      } else {
        // If not responded earlier
        const newOption = questions
          .find((q) => q.id === quesId)
          ?.options.find((o) => o.option === option);

        if (newOption) {
          user.responses.push({ quesId, option });
          user.timeInHand -= newOption.timeCost;
          user.trustScore += newOption.trustShift;

          if (newOption.choise === ChoiceTypes.ACCEPTABLE) {
            user.colleaguesTime += newOption.timeCost;
            user.choicesDistribution.acceptable += 1;
          } else if (newOption.choise === ChoiceTypes.OPTIMAL) {
            user.choicesDistribution.optimal += 1;
          } else if (newOption.choise === ChoiceTypes.SUB_OPTIMAL) {
            user.choicesDistribution.subOptimal += 1;
          }
          // Updating overall stats
          await SessionModel.findByIdAndUpdate(
            user.session,
            {
              $inc: {
                "overallStats.trustScore": newOption.trustShift,
                "overallStats.timeInHand": -1 * newOption.timeCost,
                "overallStats.colleaguesTime":
                  newOption.choise === ChoiceTypes.ACCEPTABLE
                    ? newOption.timeCost
                    : 0,
                "choicesDistribution.optimal":
                  newOption.choise === ChoiceTypes.OPTIMAL ? 1 : 0,
                "choicesDistribution.acceptable":
                  newOption.choise === ChoiceTypes.ACCEPTABLE ? 1 : 0,
                "choicesDistribution.subOptimal":
                  newOption.choise === ChoiceTypes.SUB_OPTIMAL ? 1 : 0,
              },
            },
            { new: true }
          );
        }
      }
    }

    if(user.trustScore<0){
      res.status(200).json({
        success:true,
        message:"Time ended",
        gameStatus: user.quickOmniaResponses.length === quickOmniaQuestions.length ? "COMPLETED":"QUICK_OMNIA",
        trustScore: user.trustScore,
        timeInHand: user.timeInHand <0 ? 0 : user.timeInHand,
      })
    }

    // Determining the next question to send
    const [ques, subQuestion] = lastQuestionId.split("");
    if (subQuestion) {
      question = questions.find((q) => q.id === `${parseInt(ques) + 1}`);
    } else {
      question = questions.find((q) => q.id === `${ques}${lastResponse}`);
    }
  }



  if (!question) {
    await user.save();
    return res.status(200).json({
      success: true,
      data: {
        message: "No more questions available",
        gameStatus: user.quickOmniaResponses.length === quickOmniaQuestions.length ? "COMPLETED":"QUICK_OMNIA",
        trustScore: user.trustScore,
        timeInHand: user.timeInHand,
      },
    });
  }

  const nextQuestion = {
    quesId: question.id,
    question: question.question,
    options: question.options.map((option) => ({
      option: option.option,
      optionText: option.optionText,
    })),
  };

  await user.save();

  res.status(200).json({
    success: true,
    data: {
      nextQuestion,
      gameStatus: "RUNNING",
      trustScore: user.trustScore,
      timeInHand: user.timeInHand,
    },
  });
};

export const handleGameCompleted = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.user;

  const user = await UserModel.findById(userId);

  if (!user) {
    return next(new AppError("User not found", 400));
  }

  if (user.responses.length < TOTAL_QUESTIONS) {
    return next(new AppError("Game not completed yet", 400));
  }

  const session = await SessionModel.findById(user.session);
  if (!session) {
    return next(new AppError("Session not found", 400));
  }

  let archeType;
  if (user.choicesDistribution.optimal / TOTAL_QUESTIONS >= 0.6) {
    archeType = "Strategic Advisor";
  } else if (user.choicesDistribution.optimal / TOTAL_QUESTIONS >= 0.3) {
    archeType = "Solid Performer";
  } else if (user.choicesDistribution.optimal / TOTAL_QUESTIONS < 0.6) {
    archeType = "Risky";
  }


  const quickOmniaAnalytics = await UserModel.aggregate([
    { $match: { session: user.session } },
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

  const whyOmnia = quickOmniaQuestions.map((question) => {
    const responseStats = quickOmniaAnalytics.find(
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
          (o:any) => o.option === opt.option
        );
        const percentage = optionStat
          ? ((optionStat.count / responseStats.totalResponses) * 100).toFixed(2)
          : "0";

        return {
          text: opt.optionText,
          percentage: parseFloat(percentage),
        };
      }),
    };
  });

  const analytics = {
    timeInHand: user?.timeInHand,
    overallTimeInhand: session.overallStats.timeInHand / session.players,

    trustScore: user?.trustScore,
    overallTrustScore: session.overallStats.trustScore / session.players,

    colleaguesTime: user?.colleaguesTime,
    overallColleaguesTime:
      session.overallStats.colleaguesTime / session.players,

    optimalChoices: user?.choicesDistribution.optimal / TOTAL_QUESTIONS,
    overallOptimalChoices:
      session.overallStats.optimalChoices / (session.players * TOTAL_QUESTIONS),

    choicesDistribution: [
      {
        key: "Optimal",
        self: user?.choicesDistribution.optimal / TOTAL_QUESTIONS,
        group:
          session?.choicesDistribution.optimal /
          (TOTAL_QUESTIONS * session.players),
      },
      {
        key: "Acceptable",
        self: user?.choicesDistribution.acceptable / TOTAL_QUESTIONS,
        group:
          session?.choicesDistribution.acceptable /
          (TOTAL_QUESTIONS * session.players),
      },
      {
        key: "Sub Optimal",
        self: user?.choicesDistribution.subOptimal / TOTAL_QUESTIONS,
        group:
          session?.choicesDistribution.subOptimal /
          (TOTAL_QUESTIONS * session.players),
      },

    ],
    players: session.players,
    gameCompletion:
      (Object.values(session.choicesDistribution).reduce((a, b) => a + b) *
        100) /
      (session.players * TOTAL_QUESTIONS),
    archeType,

    whyOmnia
  };
  res.status(200).json({ success: true, data: { analytics } });
};

export const handleFetchQuickOmnia = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.user;

  const user = await UserModel.findById(userId).select("quickOmniaResponses");
  if (!user) {
    return next(new AppError("User not found", 400));
  }

  const answered = user.quickOmniaResponses.length;

  return res
    .status(200)
    .json({
      success: true,
      data: { questions: quickOmniaQuestions, answered },
    });
};

export const handleRespondQuickOmnia = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { quesId, option } = req.body;
  const userId = req.user;

  const user = await UserModel.findById(userId);
  if (!user) {
    return next(new AppError("User not found", 400));
  }
  
  if(user.responses.length!=TOTAL_QUESTIONS){
    return next(new AppError("Game not completed yet",400))
  }

  const alreadyAnswered = user.quickOmniaResponses.some(
    (response) => response.quesId === quesId
  );

  if (!alreadyAnswered) {
    user.quickOmniaResponses.push({ quesId, option });

    await user.save();
  }

  return res.status(200).json({
    success: true,
    data:{
      answered: user.quickOmniaResponses.length,
      gameStatus:user.quickOmniaResponses.length===quickOmniaQuestions.length?"COMPLETED":"QUICK_OMNIA"
    }
  });
};
