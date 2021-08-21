import classes from "./OutputCard.module.css";
import Card from "../UI/Card";

const OutputCard = (props) => {
  return (
    <Card className={classes.card}>
      <h3>Output Text</h3>
      <div>{props.value ? props.value : "Output Text"}</div>
    </Card>
  );
};

export default OutputCard;
