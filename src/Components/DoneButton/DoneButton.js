import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faCheckCircle,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import "./DoneButton.css";

const DoneButton = (props) => {
  let classShow = "";
  if (props.show) {
    classShow = "Display";
  }

  let backColor = "";
  let icon = null;
  if (props.type === "delete") {
    backColor = "#e74c3c";
    icon = <FontAwesomeIcon icon={faTrashAlt} color="white" />;
  } else if (props.type === "Done") {
    backColor = "#40d65e";
    icon = <FontAwesomeIcon icon={faCheckCircle} color="white" size="lg" />;
  } else {
    backColor = "#fc713a";
    icon = <FontAwesomeIcon icon={faUndo} color="white" size="lg" />;
  }

  return (
    <div
      className={"Done " + classShow}
      onClick={props.clicked}
      style={{
        backgroundColor: backColor,
      }}
    >
      <p>{icon}</p>
    </div>
  );
};

export default DoneButton;
