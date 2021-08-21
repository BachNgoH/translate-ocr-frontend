import Button from "../UI/Button";
import classes from "./TranslateBtn.module.css";

const TranslateBtn = (props) => {
  return (
    <Button className={classes.btn} type="submit" onClick={props.onSubmit}>
      <h3>{props.isLoading ? "Translating..." : "Translate"}</h3>
    </Button>
  );
};

export default TranslateBtn;
