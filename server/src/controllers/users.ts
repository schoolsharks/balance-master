import { NextFunction, Request, Response } from "express";
import { ActiveSessionModel } from "../models/ActiveSession";
import AppError from "../utils/appError";
import { UserModel } from "../models/Users";
import { generateAccessToken } from "../utils/jwtUtils";
import { SessionModel } from "../models/Sessions";
import { BASE_TIME, BASE_TRUST_SCORE } from "../data/questions";

const handleCreateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, contact, employeeId } = req.body;

  const activeSession = await ActiveSessionModel.findOne();

  if (!activeSession) {
    return next(new AppError("Active Session Module not found", 500));
  }

  if (!activeSession.isActive) {
    return next(new AppError("No session is active", 400));
  }

  console.log("Active Session",activeSession.activeSession)

  await SessionModel.findByIdAndUpdate(
    activeSession.activeSession,
    { $inc: { players: 1 , "overallStats.trustScore":BASE_TRUST_SCORE,"overallStats.timeInHand":BASE_TIME} },
    { new: true }
  );

  const newUser = await UserModel.create({
    name,
    email,
    contact,
    employeeId,
    session: activeSession.activeSession,
  });
  const accessToken = generateAccessToken({ id: newUser._id.toString() });

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
    maxAge: 24 * 60 * 60 * 1000,
  });

  return res.status(200).json({ success: true });
};

const handleFetchUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.user;
  const user = await UserModel.findById(userId).select(
    "name trustScore timeInHand"
  );

  if (!user) {
    return next(new AppError("User not found", 404));
  }

  return res.status(200).json({ success: true, data: user });
};



const handleReset=async(req:Request,res:Response,next:NextFunction)=>{

  const userId=req.user

  const user=await UserModel.findById(userId)

  if(!user){
    return next(new AppError("User Not found",400))
  }

  const activeSession = await ActiveSessionModel.findOne();

  if (!activeSession) {
    return next(new AppError("Active Session Module not found", 500));
  }

  if (!activeSession.isActive) {
    return next(new AppError("No session is active", 400));
  }



  await SessionModel.findByIdAndUpdate(
    activeSession.activeSession,
    { $inc: { players: 1 , "overallStats.trustScore":BASE_TRUST_SCORE,"overallStats.timeInHand":BASE_TIME} },
    { new: true }
  );



  const newUser = await UserModel.create({
    name:user.name,
    email:user.email,
    contact:user.contact,
    employeeId:user.employeeId,
    session: activeSession.activeSession,
  });
  const accessToken = generateAccessToken({ id: newUser._id.toString() });

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
    maxAge: 24 * 60 * 60 * 1000,
  });

  return res.status(200).json({ success: true });
}
export { handleCreateUser, handleFetchUser ,handleReset};
