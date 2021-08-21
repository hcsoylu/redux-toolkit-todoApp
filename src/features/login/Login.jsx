import { Button } from "evergreen-ui";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../login/loginSlice";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div className="loginn">
      <Button
        marginRight={16}
        appearance="primary"
        size="large"
        onClick={() => dispatch(login())}
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
