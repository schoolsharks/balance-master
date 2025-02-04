import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import SessionDashboardMain from "./SessionDashboard/SessionDashboardMain";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { fetchCurrentSessionInfo } from "../../store/admin/sessionInfoActions";

const AdminMain = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchInterval = setInterval(() => {
      dispatch(fetchCurrentSessionInfo());
    }, 5000);
    return () => clearInterval(fetchInterval);
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/login" element={<></>} />
        <Route path="/home" element={<Home />} />
        <Route path="/session" element={<SessionDashboardMain />} />
        <Route path="/session/:id" element={<SessionDashboardMain />} />
        <Route path="/*" element={<Navigate to="/admin/home" />} />
      </Routes>
    </>
  );
};

export default AdminMain;
