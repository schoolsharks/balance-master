import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserMain from "./pages/users/UserMain";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<UserMain />} />
    </Routes>
  );
}

export default App;
