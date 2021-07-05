var express= require("express");
var router = express.Router();
var api_endpoint= require("../../server/app");


var express = require('express')
var app = express()




// console.log(AudioInput)

router.get("/Calls/AudioOutputOn", function (req, res,next){
   res.send(api_endpoint.AudioOutputOn);
});

router.get("/Calls/AudioOutputOff", function (req, res, next){
   res.send(api_endpoint.AudioOutputOff);
});
router.get("/Calls/MicrophoneMute", function (req, res, next){
   res.send(api_endpoint.MicrophoneMute);
});
router.get("/Calls/Volume", function (req,res, next){
   res.send(api_endpoint.Volume);
});
router.get("/Calls/BookingId", function (req, res, next){
   res.send(api_endpoint.BookingId);
});
router.get("/Calls/DeviceStatus", function (req, res,next){
   res.send(api_endpoint.DeviceStatus);
});
router.get("/Calls/DeviceName", function (req, res, next){
   res.send(api_endpoint.DeviceName);
});
router.get("/Calls/ActiveSpeaker", function (req, res, next){
   res.send(api_endpoint.ActiveSpeaker);
})
router.get("/Calls/CameraInfo", function (req, res, next){
   res.send(api_endpoint.CameraInfo);
});
router.get("/Calls/SpeakerTrack", function (req, res,next){
   res.send("SpeakerTrack");
});


module.exports= router;