import { useState } from "react";
import { userApi } from "../api/userApi";

interface ChoicesDistribution {
  key: String;
  self: number;
  group: number;
}

interface WhyOmnia{
    question:String,
    options:{text:String,percentage:number}[];
}
interface Analytics {
  timeInHand: number;
  trustScore: number;
  colleaguesTime: number;
  overallTimeInhand: number;
  overallTrustScore: number;
  overallColleaguesTime: number;
  optimalChoices: number;
  overallOptimalChoices: number;
  choicesDistribution: ChoicesDistribution[];
  players:number;
  gameCompletion:number;
  archeType:string;
  whyOmnia:WhyOmnia[]
}

const useCompleted = () => {
  const [analytics, setAnalytics] = useState<Analytics>();

  const fetchCompletedStatus = async () => {
    try {
      const response = await userApi.get("/users/completed");
      if (response.data.success) {
        const { analytics: gameAnalytics } = response.data.data;
        setAnalytics(gameAnalytics);
      } else {
        console.error("Failed to fetch game stats:", response.data);
      }
    } catch (error) {
      console.error("Error fetching game stats:", error);
    }
  };

  return { analytics, fetchCompletedStatus };
};

export default useCompleted;
