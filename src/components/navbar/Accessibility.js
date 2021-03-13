import React, { useState } from "react";
import styled from "styled-components";
import Form from "../Forms/Form";
import LoginForm from "../login/LoginForm";
import Modal from 'react-modal';

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 0px;
`;

const RegisterButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  justify-content:left;
  width: 134px;
height: 38px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 19px;
  margin-right:99px;
  background: #7ECB20 0% 0% no-repeat padding-box;
  text-align: center;
  font: normal normal 600 16px/22px;
  font-family: 
letter-spacing: 0.48px;
color: #FFFFFF;
font-size: 16px;
  transition: all 120ms ease-in-out;
  cursor: pointer;
  &:hover {
    transform:scale(1.1,1.1);
    -webkit-transform:scale(1.1,1.1);
    -moz-transform:scale(1.1,1.1);
  }
  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const LoginButton = styled.button`
border:0;
outline:0;
  width: 100px;
  height: 10px;
  margin-top:7px;
  font-weight:600;
  font-family : normal normal 16px/22px 'Open Sans';
  margin-right:22px;
  color: #7ECB20;
  background-color: transparent;
  font-size: 20px;

`;



const Accessibility=(props)=> {
  const [show, setShow] = useState(false);
  const [showw, setShoww] = useState(false);
  const closeModalHandler = () => setShow(false);
  const closeModalHandl = () => setShow(false);
  return (
    
    <div>
    
    <AccessibilityContainer>
    <LoginButton onClick={() => setShow(true)}>SIGN UP</LoginButton>
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
    }}>
    <Form show={show} close={closeModalHandler}/>
    </Modal>
    <RegisterButton onClick={() => setShoww(true)}>LOGIN</RegisterButton>
    <Modal isOpen={showw}
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
    }}>
    <LoginForm showw={showw} close={closeModalHandl}/>
    </Modal>
  </AccessibilityContainer>
  
    
    </div>
  );
}


export default Accessibility;