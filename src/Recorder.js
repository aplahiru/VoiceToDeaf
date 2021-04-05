import React, { useState } from 'react';
import {Recorder} from 'react-voice-recorder';
import 'react-voice-recorder/dist/index.css';
const { default: Axios } = require("axios");

const RecorderComp =(props)=> {
   
const stateInit = {
  url: null,
  blob: null,
  chunks: null,
  duration: {
    h: 0,
    m: 0,
    s: 0
  }
}
const [state,setState] = useState(stateInit);
const [prediction, setPrediction] = useState('');

const handleAudioStop=(data=>{
  const fdata = new FormData();
  // console.log(data.url)
  fetch(data.url).then(response => response.blob())
      .then(blob => { 

        fdata.append('file', blob,"test.mp3");
        Axios.post('http://127.0.0.1:5000/upload', 
         fdata
        ).then(response => {
          setPrediction(response.data);
          props.anim(response.data.prediction)
        });
      })
      .then(res => console.log("bbbbbbbb"))
        .then(res => console.log("cccccccc"))
      .catch(err => console.log(err));
  setState( data );
})

const handleAudioUpload=(file)=> {
  console.log(file);
}
const handleRest=()=> {
  setPrediction('')
  const reset = {
    url: null,
    blob: null,
    chunks: null,
    duration: {
      h: 0,
      m: 0,
      s: 0
    },
  };
  setState(reset );
}
  return(
    <React.Fragment>
    <center>
    <Recorder
    record={false}
    title={prediction.prediction}
    audioURL={state.url}
    // showUIAudio
    handleAudioStop={data => handleAudioStop(data)}
    handleAudioUpload={data => handleAudioUpload(data)}
    handleRest={() => handleRest()} 
/></center>
</React.Fragment>
  )    
}
export default RecorderComp;