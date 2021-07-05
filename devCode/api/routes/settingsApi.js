var express= require("express");
var router = express.Router();

router.get("/Settings/AudioInput", function (req, res, next){
    res.send("AudioInput");
});

router.get("/Settings/AudioOutputOn", function (req, res,next){
    res.send("AudioOutputOn");
});

router.get("/Settings/AudioOutputOff", function (req, res, next){
    res.send("AudioOutputOff");
});
router.get("/Settings/MicrophoneMute", function (req, res, next){
    res.send("MicrophoneMute");
});
router.get("/Settings/Volume", function (req,res, next){
    res.send("Volume");
});
router.get("/Settings/BookingId", function (req, res, next){
    res.send("BookingId");
});
router.get("/Settings/DeviceStatus", function (req, res,next){
    res.send("DeviceStatus");
});
router.get("/Settings/DeviceName", function (req, res, next){
    res.send("DeviceName");
});
router.get("/Settings/ActiveSpeaker", function (req, res, next){
    res.send("ActiveSpeaker");
})
router.get("/Settings/CameraInfo", function (req, res, next){
    res.send("CameraInfo");
});
router.get("/Settings/SpeakerTrack", function (req, res,next){
    res.send("SpeakerTrack");
});
module.exports= router;