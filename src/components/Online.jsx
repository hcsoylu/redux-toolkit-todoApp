import { Heading } from "evergreen-ui";
import { div } from "prelude-ls";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../features/users/userSlice";

const Online = () => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.users.user);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="online" style={{ marginLeft: "50px" }}>
      <Heading size={600} marginTop={28}>
        Online Users
      </Heading>
      {userList.map((u) => (
        <div style={{ marginTop: "20px" }}>{u.username}</div>
      ))}
    </div>
  );
};

export default Online;
