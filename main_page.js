var video_info = [
    {"id":111111, "video-time":"03:16", "title":"Kung Fu Panda 3 | Official Trailer #1"},
    {"id":111112, "video-time":"07:06", "title":"Kung Fu Panda 3 | Official Trailer #2"},
    {"id":111113, "video-time":"06:06", "title":"Kung Fu Panda 3 | Official Trailer #3"}
]


for(var i=0 ; i<video_info.length ; i++){
    var video_i = document.getElementById(video_info[i]["id"]);
    // console.log(video_i.childNodes);
    if(video_i!==null){
        video_i.childNodes[1].childNodes[3].childNodes[1].innerHTML=video_info[i]["video-time"];
        video_i.childNodes[3].childNodes[1].childNodes[1].innerHTML=video_info[i]["title"];
        // console.log(video_i.childNodes[3].childNodes[1].childNodes[1].innerHTML)
    }
}

