import React,{ useState} from 'react';
import styled from "styled-components";
import './Main.css';
import Form from "../Forms/Form";

import Modal from 'react-modal';


const RegisterButton = styled.a`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  justify-content:left;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  font: normal normal bold 24px/33px Open Sans;
letter-spacing: 0.48px;
text-decoration:none;
color: #FFFFFF;
margin-top: 55px;
margin-left: 0px;
width: 236px;
height: 53px;
background: #7ECB20 0% 0% no-repeat padding-box;
border-radius: 27px;
opacity: 1;
`;



const Main = (props)=> {
  const [show, setShow] = useState(false);

  const closeModalHandler = () => setShow(false);
  return (
    <div>
    <h1 className="applyline">Apply and hear back every time</h1>
    <p className="Exploreline">Exploring internships or jobs? Say good-bye to the typical job portals and use the
    power of Artificial Intelligence to become successful, faster. </p>
    <RegisterButton className="getstart" onClick={() => setShow(true)}>Get Started</RegisterButton>
    <Modal isOpen={show}
    style={{
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(255, 255, 255, 0.1)'
        
      },
      content: {
        position: 'absolute',
        top: '40px',
        left: '40px',
        right: '40px',
        bottom: '40px',
        border: '0px solid #ccc',
        background: 'rgba(255, 255, 255, 0)',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px'
      }
    }}
    
    >
    <Form show={show} close={closeModalHandler}/>
    </Modal>
    {/*props.logindata&&<LoginForm/>
  {/*
    <RegisterButton href="#" className="getstart" onClick={props.signuphandler}>Get Started</RegisterButton>
    {(props.signupdata)&& <Form/>}
    
    <Form handleClose={modalIsOpen}/>
    </Modal>

    props.logindata&&<LoginForm/>
   {/*} <h1 className="applyline">Apply and hear back every time</h1>
    <p className="Exploreline">Exploring internships or jobs? Say good-bye to the typical job portals and use the
    power of Artificial Intelligence to become successful, faster. </p>
  
    <RegisterButton href="#" className="getstart" onClick={props.signuphandler}>Get Started</RegisterButton>
    {(props.signupdata)&& <Form/>}
    {/*props.logindata&&<LoginForm/>*/}
    
    </div>
  );
}

export default Main

