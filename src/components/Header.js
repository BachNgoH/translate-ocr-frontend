import Card from "../UI/Card";
import classes from "./Header.module.css";

const Header = (props) => {
  const changeInputLangHandler = (event) => {
    props.onInputChange(event.target.value);
  };

  const changeOutputLangHandler = (event) => {
    props.onOutputChange(event.target.value);
  };

  return (
    <div className={classes.header}>
      <Card className={classes.card}>
        <select name="outputLang" onChange={changeInputLangHandler}>
          <option value="en">English</option>
          <option value="vi">Vietnamese</option>
        </select>
      </Card>
      <Card className={classes.card}>
        <select name="outputLang" onChange={changeOutputLangHandler}>
          <option value="vi">Vietnamese</option>
          <option value="en">English</option>
        </select>
      </Card>
    </div>
  );
};

export default Header;
