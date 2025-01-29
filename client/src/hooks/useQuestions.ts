import { useState } from "react";
import { userApi } from "../api/userApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { setUser } from "../store/user/userSlice";

interface Option {
  option: string;
  optionText: string;
}

interface Question {
  quesId: string;
  question: string;
  options: Option[];
}

const useQuestions = () => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [quickOmniaQuestions,setQuickOmniaQuestions]=useState<Question[]|null>(null)
  const [quickOmniaCompleted,setQuickOmniaCompleted]=useState<boolean>(false)
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();


  const fetchNextQuestion = async (quesId: string, option: string) => {
    try {
      const response = await userApi.post("/users/question", {
        quesId,
        option,
      });
      if (response.data.success) {
        const { nextQuestion, gameStatus, trustScore, timeInHand } =
          response.data.data;
        dispatch(setUser({ trustScore, timeInHand }));
        setCurrentQuestion(nextQuestion);
        if (gameStatus === "COMPLETED") {
          navigate("/completed");
        }
        if(gameStatus==="QUICK_OMNIA"){
          navigate("/quick-omnia")
        }
      } else {
        console.error("Failed to fetch the next question:", response.data);
      }
    } catch (error) {
      console.error("Error fetching the next question:", error);
    }
  };

  const handleFetchQuickOmnia=async()=>{
    try {
      const response = await userApi.get("/users/quick-omnia");
      if (response.data?.success) {
        console.log(response.data.data)
        const {questions,answered}=response.data.data
        setQuickOmniaQuestions(questions)
        setCurrentQuestion(questions[answered])
        if(answered===questions.length){
          navigate("/completed")
        }
      } else {
        console.error("Failed to fetch quick Omnia questions:", response.data);
      }
    } catch (error) {
      console.error("Error fetching quick omnia questions:", error);
    }
  }
  const handleRespondQuickOmnia=async(quesId: string, option: string)=>{
    try {
      const response = await userApi.post("/users/quick-omnia", {
        quesId,
        option,
      });
      if (response.data?.success) {
        console.log(response.data)
        const {answered}=response.data.data
        if(!quickOmniaQuestions){
          await handleFetchQuickOmnia()
        }
        if(answered===quickOmniaQuestions?.length){
          setQuickOmniaCompleted(true)
        }
        else{
          quickOmniaQuestions && answered && setCurrentQuestion(quickOmniaQuestions[answered])
        }
      } else {
        console.error("Failed to fetch the next question:", response.data);
      }
    } catch (error) {
      console.error("Error fetching the next question:", error);
    }
  }


  return { currentQuestion,quickOmniaQuestions,quickOmniaCompleted, fetchNextQuestion,handleFetchQuickOmnia,handleRespondQuickOmnia};
};

export default useQuestions;
