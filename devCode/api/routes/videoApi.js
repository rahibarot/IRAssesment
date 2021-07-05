var express= require("express");
var router = express.Router();

var api_endpoint= require("../../server/app");

router.get("/Video/AudioInput", function (req, res, next){
    res.send(api_endpoint.AudioInput);
});

router.get("/Video/AudioOutputOn", function (req, res,next){
    res.send(api_endpoint.AudioOutputOn);
});

router.get("/Video/AudioOutputOff", function (req, res, next){
    res.send(api_endpoint.AudioOutputOff);
});
router.get("/Video/MicrophoneMute", function (req, res, next){
    res.send(api_endpoint.MicrophoneMute);
});
router.get("/Video/Volume", function (req,res, next){
    res.send(api_endpoint.Volume);
});
router.get("/Video/BookingId", function (req, res, next){
    res.send(api_endpoint.BookingId);
});
router.get("/Video/DeviceStatus", function (req, res,next){
    res.send(api_endpoint.DeviceStatus);
});
router.get("/Video/DeviceName", function (req, res, next){
    res.send(api_endpoint.DeviceName);
});
router.get("/Video/ActiveSpeaker", function (req, res, next){
    res.send(api_endpoint.ActiveSpeaker);
})
router.get("/Video/CameraInfo", function (req, res, next){
    res.send(api_endpoint.CameraInfo);
});
router.get("/Video/SpeakerTrack", function (req, res,next){
    res.send("SpeakerTrack");
});
module.exports= router;