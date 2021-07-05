var express= require("express");
var router = express.Router();

var api_endpoint= require("../../server/app");
router.get("/", function (req, res, next){
    res.send(api_endpoint.CameraInfo);
});

module.exports= router;