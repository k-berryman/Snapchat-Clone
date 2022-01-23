import React, { useEffect } from 'react'
import './Preview.css'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCameraImage, resetCameraImage } from "./features/cameraSlice"
import CloseIcon from '@mui/icons-material/Close';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import CreateIcon from '@mui/icons-material/Create';
import NoteIcon from '@mui/icons-material/Note';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CropIcon from '@mui/icons-material/Crop';
import TimerIcon from '@mui/icons-material/Timer';
import SendIcon from '@mui/icons-material/Send';
import { v4 as uuid } from "uuid";
import { db, storage } from "./firebase";
import { getStorage, ref, uploadString, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import firebase from "firebase/compat/app";
import { collection, addDoc } from "firebase/firestone";

function Preview() {
  // selectCameraImage is from cameraSlice.js. Redux handles this data layer
  const cameraImage = useSelector(selectCameraImage);
  const history = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if(!cameraImage) {
      history('/')
    }
  }, [cameraImage, history])

  const closePreview = () => {
    dispatch(resetCameraImage());
  }

  const sendPost = () => {
    console.log("uhh")
    // this generates a random string that's unique
    const id = uuid();

    const metadata = {
      contentType: 'image/jpeg',
    };

    const storageRef = ref(storage, `posts/${id}`);
    const uploadTask = uploadBytesResumable(storageRef, cameraImage, metadata);
    let myDownloadURL = null;

    // now we need to upload the image to firebase storage
    uploadString(storageRef, cameraImage, 'data_url').then((snapshot) => {
      console.log('Uploaded a data_url string!');
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        myDownloadURL = downloadURL;
        console.log('File available at', downloadURL);
      });
    });

    // now let's do something after that upload
    uploadTask.on(
      'state_changed',

      // 2nd param is for a progress function
      null,

      // 3rd param is for an error functio
      (error) => {
        console.log(error)
      },

      // 4th param runs when the upload finishes
      async () => {
        console.log("runnning");

        try {
          const docRef = await addDoc(collection(db, "posts"), {
            image: myDownloadURL,
            username: "Kaitlin",
            read: false,
            // profilePic
            // timestamp: firebase.firestore.FieldValue.serverTimestamp()

          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }

        history('/chats');
      }
    );
  }

  return (
    <div className='preview'>
      <CloseIcon onClick={closePreview} className="preview__close"/>

      <div className="preview__toolbarRight">
        <TextFieldsIcon />
        <CreateIcon />
        <NoteIcon />
        <MusicNoteIcon />
        <AttachFileIcon />
        <CropIcon />
        <TimerIcon />
      </div>

      <img src={cameraImage} alt="" />

      <div onClick={sendPost} className="preview__footer">
        <h2>Send Now</h2>
        <SendIcon className="preview__sendIcon" />

      </div>


    </div>
  )
}

export default Preview
