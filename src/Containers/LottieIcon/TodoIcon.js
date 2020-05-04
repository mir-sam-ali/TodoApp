// ControlledLottie.jsx
import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../../Utilities/Lotties/todoIcon.json";

class TodoIcon extends Component {
  render() {
    const defaultOptions = {
      animationData: animationData,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div className="controlled">
        <Lottie
          options={defaultOptions}
          height={70}
          width={60}
          isStopped={false}
          isPaused={false}
        />
      </div>
    );
  }
}

export default TodoIcon;
