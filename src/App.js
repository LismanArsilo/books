import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/registrasi/Register";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { login } = useSelector((state) => state.usersState);
  console.info(login);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={login ? <Home /> : <Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registrasi" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
