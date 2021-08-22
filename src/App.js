import { Route, Switch } from "react-router";
import "./App.css";
import Header from "./components/Header";
import TranslateForm from "./components/TranslateForm";
import ImagePage from "./components/ImagePage";
import { useState } from "react";
import SettingBubble from "./components/SettingBubble";

function App() {
  const [inputText, setInputText] = useState("");
  const [inputLang, setInputLang] = useState("en");
  const [outputLang, setOutputLang] = useState("vi");
  const [summarizeMode, setSummarizeMode] = useState("abstractive");

  const [showOptions, setShowOptions] = useState(false);
  const [isTranslate, setIsTranslate] = useState(true);
  const [isSummarize, setIsSummarize] = useState(false);
  const onChangeShowOption = () => {
    setShowOptions((state) => !state);
  };

  const onSetTranslateHandler = () => {
    setIsTranslate(true);
    setIsSummarize(false);
    setShowOptions(false);
  };
  const onSetSummarizeHandler = () => {
    setIsTranslate(false);
    setIsSummarize(true);
    setShowOptions(false);
  };

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

  const changeSummarizeModeHandler = (mode) => {
    setSummarizeMode(mode);
  };

  return (
    <Switch>
      <Route path="/" exact>
        <div className="centerDiv">
          <Header
            onInputChange={changeInputLangHandler}
            onOutputChange={changeOutputLangHandler}
            isTranslate={isTranslate}
            isSummarize={isSummarize}
            onSummarizeModelChange={changeSummarizeModeHandler}
          />
          <div className="mainBar">
            <TranslateForm
              onChangeText={onChangeText}
              inputText={inputText}
              inputLang={inputLang}
              outputLang={outputLang}
              isTranslate={isTranslate}
              isSummarize={isSummarize}
              summarizeMode={summarizeMode}
            />
          </div>
          <SettingBubble
            onChangeShowOption={onChangeShowOption}
            showOptions={showOptions}
            isTranslate={isTranslate}
            isSummarize={isSummarize}
            setIsTranslate={onSetTranslateHandler}
            setIsSummarize={onSetSummarizeHandler}
          />
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
