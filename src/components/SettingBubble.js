import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import classes from "./SettingBubble.module.css";
import { Fragment, useState } from "react";

const SettingBubble = (props) => {
  const firstClasses = `${classes.option} ${classes.first} ${
    props.isTranslate ? classes.isChoosed : ""
  }`;
  const secondClasses = `${classes.option} ${classes.second} ${
    props.isSummarize ? classes.isChoosed : ""
  }`;

  const setIsTranslate = () => {
    props.setIsTranslate();
  };
  const setIsSummarize = () => {
    props.setIsSummarize();
  };

  return (
    <Fragment>
      <div className={classes.bubble} onClick={props.onChangeShowOption}>
        <FontAwesomeIcon
          icon={faEllipsisV}
          size="2x"
          style={{ color: "white" }}
        />
      </div>
      {props.showOptions && (
        <Fragment>
          <div className={firstClasses} onClick={setIsTranslate}>
            Translate
          </div>
          <div className={secondClasses} onClick={setIsSummarize}>
            Summarize
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default SettingBubble;
