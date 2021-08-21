import { Button } from "evergreen-ui";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/login/loginSlice";

const Logout = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        style={{ position: "absolute", top: "40px", right: "40px" }}
        intent="danger"
        marginRight={16}
        appearance="primary"
        size="large"
        onClick={() => dispatch(logout())}
      >
        Logout
      </Button>
    </div>
  );
};

export default Logout;
