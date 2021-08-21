import { Fragment, useState } from "react";
import InputCard from "./InputCard";
import OutputCard from "./OutputCard";
import TranslateBtn from "./TranslateBtn";

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

  return (
    <Fragment>
      <form style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <InputCard onChange={props.onChangeText} input={props.inputText} />
        <TranslateBtn onSubmit={onSubmit} isLoading={isLoading} />
      </form>
      <OutputCard value={outputText} />
    </Fragment>
  );
};

export default TranslateForm;
