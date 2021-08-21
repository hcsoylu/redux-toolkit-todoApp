import React from "react";
import { useSelector } from "react-redux";
import Logout from "./components/Logout";
import Login from "./features/login/Login";
import Todos from "./features/todos/Todos";

function App() {
  const isAuth = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="container">
      {isAuth && <Todos />}
      {!isAuth && <Login />}
      {isAuth && <Logout />}
    </div>
  );
}

export default App;
