import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import NavBar from "../src/Component/Navbar/navBar";
import Call from "../src/Component/Calls/call";
import Video from "../src/Component/Videos/video";
import callNVidButton from "./CallNVidButton";
class App extends React.Component{

    constructor(props) {
        super(props);
        // this.state= {showComponent: false,};
        // this.state={showComponent : false};
        // this.Clicked = this.Clicked.bind(this);
    }
    videoHandler(){
        console.log(" video clicked")
        return(
            <div>
                <Video/>
            </div>
        );
    }
    callHandler(){
        console.log(" call  clicked")
        return(
            <div>
                <Call/>
            </div>
        );
    }
    render() {
        return (
            <div className="App">
                <button onClick={this.videoHandler}> Video</button>
                <button onClick={this.callHandler}> Call </button>

               <Video/>
               <Call/>
            </div>
        );
    }
};


export default App;
