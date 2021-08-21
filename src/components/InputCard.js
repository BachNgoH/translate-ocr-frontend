import Card from "../UI/Card";
import classes from "./InputCard.module.css";

const InputCard = (props) => {
  return (
    <Card className={classes.card}>
      <h3>Input Text</h3>
      <div>
        <textarea
          value={props.input}
          className={classes.textarea}
          placeholder="Input text"
          onChange={props.onChange}
        ></textarea>
      </div>
    </Card>
  );
};

export default InputCard;
