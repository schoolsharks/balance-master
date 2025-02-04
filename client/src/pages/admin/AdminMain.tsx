import { Route, Routes } from "react-router-dom"
import Home from "./Home/Home"

const AdminMain = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Home/>}/>
        <Route path="/home" element={<></>}/>
        <Route path="/session/:id" element={<></>}/>
      </Routes>
    </>
  )
}

export default AdminMain
