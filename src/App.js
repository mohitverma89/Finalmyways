import React,{Component} from "react";
import { Navbar } from "./components/navbar";
import './App.css';



export class App extends Component {

  render() {
    
    return (
      <div className="App">

    <Navbar />
    
{/*
    <OnMain signuphandler={this.signupModal}
    loginhandler={this.loginModal}
    closehandler={this.closeModal}
    signupdata={this.state.signup} 
    logindata={this.state.login} />
    <Form />
    <OtpSent />
    <Success />
   <LoginForm />
    <Tap />*/}
    </div>
    )
  }
}




export default App;
