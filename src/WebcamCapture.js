// This line isn't necessary anymore if just React?
import React, { useState, useCallback, useRef } from "react"
import Webcam from "react-webcam";
import { useDispatch } from "react-redux";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { setCameraImage } from "./features/cameraSlice"
import { useNavigate } from "react-router-dom"
import './WebcamCapture.css';

// Responsible for the sizing of the video
const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};

function WebcamCapture() {
  // "pointer" to webcam
  const webcamRef = useRef(null);
  const dispatch = useDispatch();
  //const [image, setImage] = useState(null);

  // programmatic redirect
  const history = useNavigate();

  // this will do it once, then save the output for when it's called again
  // so then it doesn't have to rerun the entire function again
  // it'll be faster running it again than the first time
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    dispatch(setCameraImage(imageSrc));
    // programmatic redirect
    history('/preview')
    //console.log(imageSrc);
    //setImage(imageSrc);
  }, [webcamRef])

  return (
    <div className='webcamCapture'>
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />

      <RadioButtonUncheckedIcon
      className="webcamCapture__button"
      onClick={capture}
      fontSize="large"
      />
    </div>
  )
}

export default WebcamCapture
