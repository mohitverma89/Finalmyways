import React, { Component} from "react";
import "./Success.css";
import Tick from "../../Icon awesome-check-circle.svg";


class Success extends Component {
 
  render() {

    return (
        
        <div className="wrpp">
        <div className="form-wrpp" >
        <span class="clse" title="Close Modal"><img src={Tick} alt="Right Tick"></img></span>
          <h1 class="Thanksp" >Thanks. Successful!</h1>
        </div>
      
      </div>
      
    );
  }
}

export default Success;