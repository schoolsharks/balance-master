import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  _id: Schema.Types.ObjectId;
  name: String;
  email: String;
  contact: String;
  employeeId: String;
  session: Schema.Types.ObjectId;
  answered: number;
  trustScore: number;
  timeInHand: number;
  colleaguesTime: number;
  choicesDistribution: {
    optimal: number;
    subOptimal: number;
    acceptable: number;
  };
  responses: { quesId: String; option: String }[];
  quickOmniaResponses:{quesId:String,option:String}[];
}


const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      default: "_",
    },
    contact: {
      type: String,
      default: "_",
    },
    employeeId: {
      type: String,
      default: "_",
    },
    session: {
      type: Schema.Types.ObjectId,
      ref: "Sessions",
    },
    answered: {
      type: Number,
      default: 0,
    },
    trustScore: {
      type: Number,
      default: 50,
    },
    timeInHand: {
      type: Number,
      default: 200,
    },
    colleaguesTime: {
      type: Number,
      default: 0,
    },
    choicesDistribution: {
      optimal: { type: Number, default: 0 },
      subOptimal: { type: Number, default: 0 },
      acceptable: { type: Number, default: 0 },
    },
    responses: {
      type: [
        {
          quesId: String,
          option: String,
        },
      ],
    },
    quickOmniaResponses: {
      type: [
        {
          quesId: String,
          option: String,
        },
      ],
    },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model<IUser>("User", UserSchema);
