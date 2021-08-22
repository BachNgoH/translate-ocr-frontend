import { Fragment, useState } from "react";
import Button from "../UI/Button";
import InputCard from "./InputCard";
import OutputCard from "./OutputCard";
import TranslateBtn from "./TranslateBtn";
import classes from "./TranslateForm.module.css";

const TranslateForm = (props) => {
  const [outputText, setOutputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendText = async (url, method = "GET", body = null) => {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    });
    if (!response.ok) {
      throw new Error("Could not send Text");
    }
    const data = await response.json();
    return data;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const text = props.inputText;
    setIsLoading(true);
    // console.log(props.inputLang);
    // console.log(props.outputLang);
    if (text.trim().length > 0) {
      const response = await sendText(
        "https://translate.astian.org/translate",
        "POST",
        {
          q: text,
          source: props.inputLang,
          target: props.outputLang,
        }
      );
      setOutputText(response.translatedText);
      setIsLoading(false);
    } else {
      // console.log("error");
      setIsLoading(false);
      setOutputText("");
      return;
    }
  };
  const onSummarize = async (event) => {
    event.preventDefault();
    const text = props.inputText;

    setIsLoading(true);
    const data = new FormData();
    data.append("text", text);
    data.append("mode", props.summarizeMode);
    // console.log(props.inputLang);
    // console.log(props.outputLang);
    if (text.trim().length > 0) {
      try {
        const res = await fetch("http://192.168.1.12:5000/api/summarize", {
          method: "POST",
          body: data,
        });
        const response = await res.json();
        console.log(response);
        console.log(response);
        setOutputText(response.summary);
        setIsLoading(false);
      } catch (e) {
        alert(e);
        setIsLoading(false);
      }
    } else {
      // console.log("error");
      setIsLoading(false);
      setOutputText("");
      return;
    }
  };

  return (
    <Fragment>
      <form style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <InputCard onChange={props.onChangeText} input={props.inputText} />
        {props.isTranslate && (
          <TranslateBtn onSubmit={onSubmit} isLoading={isLoading} />
        )}
        {props.isSummarize && (
          <Button className={classes.btn} type="submit" onClick={onSummarize}>
            <h3>{isLoading ? "Summarizing..." : "Summarize"}</h3>
          </Button>
        )}
      </form>
      <OutputCard value={outputText} />
    </Fragment>
  );
};

export default TranslateForm;
