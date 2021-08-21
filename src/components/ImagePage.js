import classes from "./ImagePage.module.css";
import Button from "../UI/Button";
import {
  faFileImage,
  faCamera,
  faMicrophoneAlt,
  faForward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useState } from "react";
// import { ReactSpinner } from "react-spinning-wheel";
import "react-spinning-wheel/dist/style.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Tesseract from "tesseract.js";

const ImagePage = (props) => {
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);

  const [isUploading, setIsUploading] = useState(true);
  const [isPicture, setIsPicture] = useState(true);
  const [isVoicing, setIsVoicing] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const handleSendImage = (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (image === null) {
      return;
    }

    const data = new FormData();
    data.append("file", image);
    data.append("lang", props.inputLang);

    // Tesseract.recognize(image, "eng", { logger: (m) => console.log(m) })
    //   .then(({ data: { text } }) => {
    //     console.log(text);
    //     props.onReadText(text);
    //     setIsUploading(true);
    //     setIsPicture(true);
    //     setIsVoicing(true);
    //     setIsLoading(false);
    //   })
    //   .catch((error) => {
    //     alert(error);
    //     setIsUploading(true);
    //     setIsPicture(true);
    //     setIsVoicing(true);
    //     setIsLoading(false);
    //   });

    fetch("http://192.168.1.12:5000/api/upload-img", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000/",
        "Access-Control-Allow-Credentials": "true",
      },
      body: data,
    })
      .then((res) => {
        res
          .json()
          .then((body) => {
            const text = body.resultText;
            props.onReadText(text);
            setIsUploading(true);
            setIsPicture(true);
            setIsVoicing(true);
            setIsLoading(false);
          })
          .catch((error) => {
            alert(error);
            setIsUploading(true);
            setIsPicture(true);
            setIsVoicing(true);
            setIsLoading(false);
          });
      })
      .catch((error) => {
        alert(error);
        setIsUploading(true);
        setIsPicture(true);
        setIsVoicing(true);
        setIsLoading(false);
      });
  };

  const handleSendAudio = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const data = new FormData();
    data.append("file", audio);

    if (audio === null) {
      return;
    }

    // Tesseract.recognize(image, "eng", { logger: (m) => console.log(m) })
    //   .then(({ data: { text } }) => {
    //     console.log(text);
    //     props.onReadText(text);
    //     setIsUploading(true);
    //     setIsPicture(true);
    //     setIsVoicing(true);
    //     setIsLoading(false);
    //   })
    //   .catch((error) => {
    //     alert(error);
    //     setIsUploading(true);
    //     setIsPicture(true);
    //     setIsVoicing(true);
    //     setIsLoading(false);
    //   });

    fetch("http://192.168.1.12:5000/api/upload-audio", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000/",
        "Access-Control-Allow-Credentials": "true",
      },
      body: data,
    })
      .then((res) => {
        res
          .json()
          .then((body) => {
            const text = body.resultText;
            props.onReadText(text);
            setIsUploading(true);
            setIsPicture(true);
            setIsVoicing(true);
            setIsLoading(false);
          })
          .catch((error) => {
            alert(error);
            setIsUploading(true);
            setIsPicture(true);
            setIsVoicing(true);
            setIsLoading(false);
          });
      })
      .catch((error) => {
        alert(error);
        setIsUploading(true);
        setIsPicture(true);
        setIsVoicing(true);
        setIsLoading(false);
      });
  };

  const onImageChange = (event) => {
    const img = event.target.files[0];
    setImage(img);
    setIsUploading(false);
  };

  const onPicturing = (event) => {
    setImage(event.target.files[0]);
    setIsPicture(false);
  };
  const onVoicing = (event) => {
    setAudio(event.target.files[0]);
    setIsVoicing(false);
  };

  return (
    <div className={classes.bar}>
      <form
        onSubmit={handleSendImage}
        style={{
          display: "flex",
          alignItems: "center",
          width: "5rem",
        }}
      >
        {isUploading && (
          <Fragment>
            <Button className={classes.btn} type="button">
              <label htmlFor="files">
                <FontAwesomeIcon icon={faFileImage} size="2x" width="0" />
              </label>
            </Button>
            <input
              id="files"
              style={{ visibility: "hidden", width: "0" }}
              type="file"
              accept="image/*"
              onChange={onImageChange}
            />
          </Fragment>
        )}
        {!isUploading && !isLoading && (
          <Button className={classes.btn}>
            <FontAwesomeIcon icon={faForward} size="2x" />
          </Button>
        )}
        {!isUploading && isLoading && (
          <Loader type="Oval" color="#7796cb" height={50} width={50} />
        )}
      </form>

      <form
        onSubmit={handleSendImage}
        style={{ display: "flex", alignItems: "center", width: "5rem" }}
      >
        {isPicture && (
          <Fragment>
            <Button className={classes.btn} type="button">
              <label htmlFor="pictures">
                <FontAwesomeIcon icon={faCamera} size="2x" />
              </label>
            </Button>
            <input
              id="pictures"
              style={{ visibility: "hidden", width: "0" }}
              type="file"
              accept="image/*"
              onChange={onPicturing}
              capture
            />
          </Fragment>
        )}
        {!isPicture && !isLoading && (
          <Button className={classes.btn}>
            <FontAwesomeIcon icon={faForward} size="2x" />
          </Button>
        )}
        {!isPicture && isLoading && (
          <Loader type="Oval" color="#7796cb" height={50} width={50} />
        )}
      </form>

      <form
        onSubmit={handleSendAudio}
        style={{ display: "flex", alignItems: "center", width: "5rem" }}
      >
        {isVoicing && (
          <Fragment>
            <Button className={classes.btn} type="button">
              <label htmlFor="voices">
                <FontAwesomeIcon icon={faMicrophoneAlt} size="2x" />
              </label>
            </Button>
            <input
              id="voices"
              style={{ visibility: "hidden", width: "0" }}
              type="file"
              accept="audio/*"
              onChange={onVoicing}
              capture
            />
          </Fragment>
        )}
        {!isVoicing && !isLoading && (
          <Button className={classes.btn} disable={isUploading}>
            <FontAwesomeIcon icon={faForward} size="2x" />
          </Button>
        )}
        {!isVoicing && isLoading && (
          <Loader type="Oval" color="#7796cb" height={50} width={50} />
        )}
      </form>
    </div>
  );
};

export default ImagePage;
