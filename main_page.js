// var video_info = [
//     {"id":111111, "video-time":"03:16", "title":"Kung Fu Panda 1 | Official Trailer #1", "src":"video_page.html?id=1", ""},
//     {"id":111112, "video-time":"06:06", "title":"Kung Fu Panda 3 | Official Trailer #2", "src":"video_page.html?id=2", ""},
//     {"id":111113, "video-time":"06:06", "title":"Kung Fu Panda 3 | Official Trailer #4"}
// ]


// for(var i=0 ; i<video_info.length ; i++){
//     var video_i = document.getElementById(video_info[i]["id"]);
//     console.log(video_i.childNodes[3].childNodes[1]["href"]);
//     if(video_i!==null){
//         video_i.childNodes[1].childNodes[1]["href"]=video_info[i]["src"];
//         video_i.childNodes[1].childNodes[3].childNodes[1].innerHTML=video_info[i]["video-time"];
//         video_i.childNodes[3].childNodes[1]["href"]=video_info[i]["src"];
//         video_i.childNodes[3].childNodes[1].childNodes[1].innerHTML=video_info[i]["title"];
//         // console.log(video_i.childNodes[3].childNodes[1].childNodes[1].innerHTML)
//     }
// }

for(var i=0 ; i<global_videos.length ; i++){
    var video_i = document.getElementById(video_info[i]["id"]);
    console.log(video_i.childNodes[3].childNodes[1]["href"]);
    if(video_i!==null){
        video_i.childNodes[1].childNodes[1]["href"]="https://www.youtube.com/watch?v="+global_videos[i]["ytVideoId"];
        // video_i.childNodes[1].childNodes[3].childNodes[1].innerHTML=global_videos[i]["video-time"];
        video_i.childNodes[3].childNodes[1]["href"]="https://www.youtube.com/watch?v="+global_videos[i]["ytVideoId"];
        video_i.childNodes[3].childNodes[1].childNodes[1].innerHTML=global_videos[i]["title"];
        
        // console.log(video_i.childNodes[3].childNodes[1].childNodes[1].innerHTML)
    }
}