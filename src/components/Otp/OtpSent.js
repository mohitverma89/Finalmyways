import React, { Component } from "react";
import "./OtpSent.css";
import BackArrow from "../../Icon material-arrow_back.svg";
import Modal from 'react-modal';
import Submission from "../Submission/Success";
import Form from "../Forms/Form"; 

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class OtpSent extends Component {
  constructor(props) {
    super(props);
    this.state = { openn: false };
    this.state = { opent: false };
    this.state = {
        Otp: null,
      formErrors: {
        Otp: "",
      }
    };
  }
  changeState = () => {
    this.setState({openn: true});
  }
  changeSign = () => {
    this.setState({opent: true});
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Otp: ${this.state.Otp}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
        case "Otp":
          formErrors.Otp =
            value.length < 3 ? "minimum 3 characaters required" : "";
          break;
        default:
          break;
      }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;


    return (
        
        <div className="wrapp">
        
        <div className="form-wrapp" >

        <span class="clos" title="Close Modal"><img src={BackArrow} alt="Back arrow" onClick={this.changeSign}></img>
        <Modal isOpen={this.state.opent}
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
        <Form />
</Modal> 
              </span>





          <h1 class="ootp">Otp Sent!</h1>
          <form onSubmit={this.handleSubmit} noValidate method="post">
            <div className="Otp">
              <label htmlFor="Otp"></label>
              <input
                className={formErrors.Otp.length > 0 ? "error" : null}
                id="inputt"
                placeholder="&nbsp;Enter Your Otp"
                type="text"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Otp.length > 0 && (
                <span className="errorMessage">{formErrors.Otp}</span>
              )}
            </div>
            <h2 class="desc">One time Passcode sent to your email ID- abc@gmail.com</h2>
            <div className="Sign">
              <button type="submit" onClick={this.changeState}>Enter</button>
              <Modal isOpen={this.state.openn} 
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
              <Submission />
              </Modal>
            </div>
          </form>
        </div>
      </div>
      
    );
  }
}

export default OtpSent;