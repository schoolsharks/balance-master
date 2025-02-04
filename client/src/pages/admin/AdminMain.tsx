import { Route, Routes } from "react-router-dom"
import Home from "./Home/Home"
import SessionDashboardMain from "./SessionDashboard/SessionDashboardMain"

const AdminMain = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<></>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/session/:id" element={<SessionDashboardMain/>}/>
      </Routes>
    </>
  )
}

export default AdminMain
