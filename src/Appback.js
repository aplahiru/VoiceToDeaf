import React, { useState, Suspense } from 'react'
import {Navbar,Nav, DropdownButton,Dropdown} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndoAlt, faMicrophone, faPlayCircle,faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import './Appback.css'
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei/OrbitControls";
// import Model from './Kick'
import Model from './LastModelfinal2';
// import { Dmodel } from './3dmodel'
// import Example from './example'
// import Model from './Kick'
// #20b2aa
// #D3E5EF
// import { ReactMic } from 'react-mic';
import RecorderComp from './Recorder';
import { BarLoader } from 'react-spinners';


const Appback =()=>{

    const [animation, setAnimation] = useState('');

    return(
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="/" className="topic" style={{fontSize:"35px"}}>VOICE TO DEAF</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Navbar.Collapse className="d-flex justify-content-center">
            <DropdownButton
                menuAlign="right"
                title="Avatar Faces"
                id="dropdown-menu-align-right"
                variant="secondary"
                >
                <Dropdown.Item eventKey="1">Face 01</Dropdown.Item>
                <Dropdown.Item eventKey="2">Face 02</Dropdown.Item>
                <Dropdown.Item eventKey="3">Face 03</Dropdown.Item>
                <Dropdown.Item eventKey="4">Face 04</Dropdown.Item>
            </DropdownButton>
            </Navbar.Collapse>
            <Nav>
                <Nav.Link eventKey={2} href="/help">
                <FontAwesomeIcon icon={faQuestionCircle} size="2x" className="custom-css-help"/>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>

            <Canvas style={{width:"100vw", height:"90vh"}}>
                <OrbitControls />
                <ambientLight intensity={0.6} />
                <directionalLight intensity={0.8} />
                <Suspense fallback={null}>
                    <Model name={animation}/>
                </Suspense>
            </Canvas>
   {/* <BarLoader size={20} color='red' loading/>*/}
            <div> <RecorderComp anim={(e)=>{setAnimation(e)}}/> </div>

           {/*} <div className="fixed-bottom d-flex justify-content-center py-3" style={{backgroundColor:"#D3E5EF"}}>
                <FontAwesomeIcon  icon={faUndoAlt} className=" mr-5 mt-3 custom-css reset" size="3x" role="button"/>
                <FontAwesomeIcon icon={faMicrophone}  className=" mx-5 custom-css record" size="4x" role="button"/>
                <FontAwesomeIcon icon={faPlayCircle}  className=" ml-5 mt-3 custom-css play" size="3x" role="button"/>
    </div>*/}
        </React.Fragment>
    )
}
export default Appback