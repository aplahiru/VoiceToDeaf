// import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import Appback from './Appback';
import 'bootstrap/dist/css/bootstrap.min.css';
// const ModelAngry = React.lazy(() => import('./ModelAngry'));
import ApiCall from "./ApiCall";
// import { Center } from '@react-three/drei';

function App() {

  const [initPredict, setinitPredict] = useState('');
  const [fileSelect, setfileSelect] = useState();
  const [label, setlabel] = useState('');

  const uploadWAV = () => {
    let data = new FormData();
    data.append("file", fileSelect);
    navigator.onLine
      ? ApiCall.uploadWAV(data)
          .then((res) => {
            // console.log(res);
            console.log('aaaaaaaaaaaaaaaaaaaaa')
            if (res.status === 200) {
              console.log(res.data['prediction'])
              setinitPredict(res.data['prediction']);
              setfileSelect();
            } else {
              console.log("server error")
              }
            }): console.log('error in upload')
  };

  // const getPrediction = () => {
  //   navigator.onLine
  //     ? ApiCall.getPrediction()
  //         .then((res) => {
  //           console.log(res);
  //         }): console.log('error in prediction')
  // };
  

  return (
    <div className="App">
    {/*<br></br><br></br> <center><h1>PARIWARTHAKA</h1></center><br></br>
    <div>
      <input type="file" onChange={(e) => {
        setfileSelect(e.target.files[0]);
        setlabel('');
      }} />
      <button onClick={fileSelect?()=>uploadWAV():()=>(setlabel("please select a new file"))}>
        Upload!
      </button>
    </div><br></br>
      <p>{label}</p><br></br><br></br>
    <div>
    <center><h3>PREDICTION IS : {initPredict}</h3></center>
    </div>*/}
    <Appback/>
    </div>
  );
}

export default App;
