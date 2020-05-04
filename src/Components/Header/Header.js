import React from "react";
import TodoIcon from "../../Containers/LottieIcon/TodoIcon";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 style={{ marginRight: "0.5rem" }}>TODO</h1>
      <TodoIcon />
    </div>
  );
};

export default Header;
