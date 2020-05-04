// ControlledLottie.jsx
import React, { Component } from "react";
import Lottie from "react-lottie";
import "./LottieIcon.css";
import animationData from "../../Utilities/Lotties/addIcon.json";

class LottieIcon extends Component {
  clickCount = 0;
  state = { isStopped: true, isPaused: true };
  onMouseEnterHandler = () => {
    this.setState({ isStopped: false, isPaused: false });
  };
  onMouseLeaveHandler = () => {
    this.setState({ isStopped: true, isPaused: true });
  };

  render() {
    const defaultOptions = {
      animationData: animationData,
      autoplay: false,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div
        className="controlled icon"
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}
        onClick={() => {
          this.props.clickHandler();
          this.onMouseLeaveHandler();
        }}
      >
        <Lottie
          options={defaultOptions}
          height={60}
          width={60}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
      </div>
    );
  }
}

export default LottieIcon;
