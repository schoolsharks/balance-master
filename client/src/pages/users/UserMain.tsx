import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "./Login/Login";
import { Stack } from "@mui/system";
import OnBoardingMain from "./Onboarding/OnBoardingMain";
import Questions from "./Question/Questions";
import Completed from "./Completed/Completed";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchUser } from "../../store/user/userActions";
import { CircularProgress } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import QuickOmnia from "./Question/QuickOmnia";
import AnimatedPage from "../../utils/AnimatedPage";

const UserMain = () => {
  const dispatch=useDispatch<AppDispatch>()
  const {status,loading}=useSelector((state:RootState)=>state.user)
  const location = useLocation();

  useEffect(()=>{
    dispatch(fetchUser())
  },[])

  if(loading){
    return <CircularProgress/>
  }

  return (
    <Stack sx={{ minHeight: window.innerHeight, height: "100%" }}>
      <AnimatePresence>

      <Routes  location={location}>
        <Route path="/login" element={status==="LOGGED_IN"? <Navigate to="/questions"/>:<AnimatedPage Component={Login}/> } />
        <Route path="/onboarding/:page" element={<AnimatedPage Component= {OnBoardingMain} />} />
        <Route path="/questions" element={status==="IDLE"? <Navigate to="/login"/>:<AnimatedPage Component= {Questions}/>} />
        <Route path="/completed" element={status==="IDLE"? <Navigate to="/login"/>:<Completed />} />
        <Route path="/quick-qna" element={<QuickOmnia/>} />
        <Route path="/*" element={<Navigate to="/onboarding/1" />} />
      </Routes>
      </AnimatePresence>
    </Stack>
  );
};

export default UserMain;
