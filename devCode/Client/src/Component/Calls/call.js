import React, {Component} from "react";
import './call.css';

//call should have following:
// Audio: Input, Output, Microphone: mute , Volume: 70
// Conference: Call.BookingId,
//Peripherals. ConectedDevice.Status & Name' to turn on and off or switch path manually

class Call extends Component{
    constructor(props) {
        super(props);
        this.state= {
            AudioInput: "",
            AudioOutputOn: "",
            AudioOutputOff: "",
            MicrophoneMute: "",
            Volume: "",
            BookingId: "",
            DeviceStatus: "",
            DeviceName: "",
            ActiveSpeaker: "",
            CameraInfo: "",
            SpeakerTrack: ""
        };

    }
    callAPI(){

        fetch("http://localhost:8080/Calls/AudioInput")
            .then(res => res.text())
            .then(res => this.setState({ AudioInput: res }));
        fetch("http://localhost:8080/Calls/AudioOutputOn")
            .then(res => res.text())
            .then(res => this.setState({ AudioOutputOn: res }));
        fetch("http://localhost:8080/Calls/AudioInput")
            .then(res => res.text())
            .then(res => this.setState({ AudioOutputOff: res }));
        fetch("http://localhost:8080/Calls/AudioOutputOff")
            .then(res => res.text())
            .then(res => this.setState({ MicrophoneMute: res }));
        fetch("http://localhost:8080/Calls/MicrophoneMute")
            .then(res => res.text())
            .then(res => this.setState({ Volume: res }));
        fetch("http://localhost:8080/Calls/Volume")
            .then(res => res.text())
            .then(res => this.setState({ BookingId: res }));
        fetch("http://localhost:8080/Calls/BookingId")
            .then(res => res.text())
            .then(res => this.setState({ DeviceStatus: res }));
        fetch("http://localhost:8080/Calls/DeviceStatus")
            .then(res => res.text())
            .then(res => this.setState({ DeviceName: res }));
        fetch("http://localhost:8080/Calls/DeviceName")
            .then(res => res.text())
            .then(res => this.setState({ ActiveSpeaker: res }));
        fetch("http://localhost:8080/Calls/ActiveSpeaker")
            .then(res => res.text())
            .then(res => this.setState({ ActiveSpeaker: res }));
        fetch("http://localhost:8080/Calls/CameraInfo")
            .then(res => res.text())
            .then(res => this.setState({ CameraInfo: res }));
        fetch("http://localhost:8080/Calls/SpeakerTrack")
            .then(res => res.text())
            .then(res => this.setState({ SpeakerTrack: res }));


    }
    componentWillMount() {
        this.callAPI();

    }
    render() {
        return(
            <div>
                You are in Call Menu
                <p> {this.state.AudioInput}</p>


            </div>
        );
    }
}
export default Call;