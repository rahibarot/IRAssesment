const http = require('http');

const hostname = '127.0.0.1';
const port = 8081;

const fs= require('fs');
const xml2js= require('xml2js');

const util = require('util');

const parser = new xml2js.Parser();

var express = require('express')
var app = express()

//for Video page and call page
// var dat;
var AudioInput;
var AudioOutputOn;
var AudioOutputOff;
var MicrophoneMute= false;
var Volume;
var BookingId;
var DeviceStatus = new Array();
var DeviceName = new Array();
var ActiveSpeaker;
var CameraInfo = new Array();





    fs.readFile('../Model/status.xml', (err, data)=> {
        parser.parseString(data, (err, res)=>{
            AudioInput= res['Status']['Audio'][0]['Input'][0]['Connectors'][0]['Microphone'][1]

            AudioOutputOn = res['Status']['Audio'][0]['Output'][0]['LocalOutput'][0]

            AudioOutputOff= res['Status']['Audio'][0]['Output'][0]['LocalOutput'][1]

            let mute= res['Status']['Audio'][0]['Microphones'][0]['Mute']
            if (mute = "Off"){
                MicrophoneMute= true;
            }

            Volume = res['Status']['Audio'][0]['Volume'][0]

            BookingId= res['Status']['Conference'][0]['Call'][0]['BookingId'][0]
            var arr1 = new Array();
            arr1 = res['Status']['Peripherals'][0]['ConnectedDevice']



            for (var i in arr1){
                DeviceStatus[i]= arr1[i]['Status'];
                DeviceName[i]= arr1[i]['Name'];
            }
            ActiveSpeaker = res['Status']['Video'][0]['ActiveSpeaker'][0]['PIPPosition'];

            var arr2= res['Status']['Cameras'][0]['Camera']

            for (var i in arr2){
                CameraInfo[i]= arr2[i]
                // console.log(i,CameraInfo[i] )
            }
            fileRead(AudioInput,AudioOutputOn,AudioOutputOff, Volume, BookingId, DeviceStatus, DeviceName, ActiveSpeaker, CameraInfo)

        })


    });


function fileRead(AudioInput,AudioOutputOn,AudioOutputOff, Volume, BookingId, DeviceStatus, DeviceName, ActiveSpeaker, CameraInfo){

    console.log("AudioInput",AudioInput)
    console.log("AudioOutputOn",AudioOutputOn)
        console.log("AudioOutputOff",AudioOutputOff)
    console.log("Volume",Volume)
    console.log("BookingId",BookingId)
    console.log("DeviceStatus",DeviceStatus)
    console.log("DeviceName",DeviceName)
        console.log("ActiveSpeaker",ActiveSpeaker)
    console.log("CameraInfo",CameraInfo)



}


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("hello");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports={
    AudioInput : AudioInput,
     AudioOutputOn : AudioOutputOn,
     AudioOutputOff: AudioOutputOff,
     MicrophoneMute: MicrophoneMute,
     Volume: Volume,
     BookingId: BookingId,
     DeviceStatus: DeviceStatus ,
     DeviceName: DeviceName,
     ActiveSpeaker: ActiveSpeaker,
     CameraInfo: CameraInfo
}


