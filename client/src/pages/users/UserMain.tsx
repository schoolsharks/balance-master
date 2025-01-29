import { Navigate, Route, Routes } from "react-router-dom";
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
import QuickOmnia from "./Question/QuickOmnia";

const UserMain = () => {
  const dispatch=useDispatch<AppDispatch>()
  const {status,loading}=useSelector((state:RootState)=>state.user)

  useEffect(()=>{
    dispatch(fetchUser())
  },[])

  if(loading){
    return <CircularProgress/>
  }

  return (
    <Stack sx={{ minHeight: window.innerHeight, height: "100%" }}>
      <Routes>
        <Route path="/login" element={status==="LOGGED_IN"? <Navigate to="/questions"/>:<Login />} />
        <Route path="/onboarding/:page" element={<OnBoardingMain />} />
        <Route path="/questions" element={status==="IDLE"? <Navigate to="/login"/>:<Questions />} />
        <Route path="/completed" element={status==="IDLE"? <Navigate to="/login"/>:<Completed />} />
        <Route path="/quick-omnia" element={<QuickOmnia/>} />
        <Route path="/*" element={<Navigate to="/onboarding/1" />} />
      </Routes>
    </Stack>
  );
};

export default UserMain;
