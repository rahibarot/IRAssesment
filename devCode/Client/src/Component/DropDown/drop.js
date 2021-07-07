import Calls from "../Calls/call";
import Video from "../Videos/video";
import Settings from "../Settings/settings";
export const drop=[
    {
        title: "call",
        url: Calls,  //put call.js here
        cName: "dropDown-call"
    },
    {
        title: "video",
        url: Video, //put video.js here
        cName: "dropDown-video"
    },
    {
        title: "settings",
        url: "#", //put settings.js here
        cName: "dropDown-setting"
    }
];
