import Card from "../UI/Card";
import classes from "./Header.module.css";

const Header = (props) => {
  const changeInputLangHandler = (event) => {
    props.onInputChange(event.target.value);
  };

  const changeOutputLangHandler = (event) => {
    props.onOutputChange(event.target.value);
  };

  const changeSummarizeModeHandler = (event) => {
    props.onSummarizeModelChange(event.target.value);
  };

  return (
    <div className={classes.header}>
      <Card className={classes.card}>
        {props.isTranslate && (
          <select name="outputLang" onChange={changeInputLangHandler}>
            <option value="en">English</option>
            <option value="vi">Vietnamese</option>
          </select>
        )}
        {props.isSummarize && (
          <select name="outputLang">
            <option value="en">English</option>
          </select>
        )}
      </Card>
      <Card className={classes.card}>
        {props.isTranslate && (
          <select name="outputLang" onChange={changeOutputLangHandler}>
            <option value="vi">Vietnamese</option>
            <option value="en">English</option>
          </select>
        )}
        {props.isSummarize && (
          <select name="outputLang" onChange={changeSummarizeModeHandler}>
            <option value="abstractive">Abstractive</option>
            <option value="extractive">Extractive</option>
          </select>
        )}
      </Card>
    </div>
  );
};

export default Header;
