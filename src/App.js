import { Route, Switch } from "react-router";
import "./App.css";
import Header from "./components/Header";
import TranslateForm from "./components/TranslateForm";
import ImagePage from "./components/ImagePage";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [inputLang, setInputLang] = useState("en");
  const [outputLang, setOutputLang] = useState("vi");

  const onChangeText = (text) => {
    text = text.target.value;
    setInputText(text);
  };
  const onReadText = (text) => {
    setInputText(text);
  };

  const changeInputLangHandler = (text) => {
    setInputLang(text);
  };

  const changeOutputLangHandler = (text) => {
    setOutputLang(text);
  };

  return (
    <Switch>
      <Route path="/" exact>
        <div className="centerDiv">
          <Header
            onInputChange={changeInputLangHandler}
            onOutputChange={changeOutputLangHandler}
          />
          <div className="mainBar">
            <TranslateForm
              onChangeText={onChangeText}
              inputText={inputText}
              inputLang={inputLang}
              outputLang={outputLang}
            />
          </div>
          <ImagePage
            onReadText={onReadText}
            inputLang={inputLang}
            outputLang={outputLang}
          />
        </div>
      </Route>
    </Switch>
  );
}

export default App;
