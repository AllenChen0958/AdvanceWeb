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

// for(var i=0 ; i<global_videos.length ; i++){
//     var video_i = document.getElementById(global_videos[i]["id"]);
//     console.log(video_i.childNodes[3].childNodes[1]["href"]);
//     if(video_i!==null){
//         video_i.childNodes[1].childNodes[1]["href"]="https://www.youtube.com/watch?v="+global_videos[i]["ytVideoId"];
//         // video_i.childNodes[1].childNodes[3].childNodes[1].innerHTML=global_videos[i]["video-time"];
//         video_i.childNodes[3].childNodes[1]["href"]="https://www.youtube.com/watch?v="+global_videos[i]["ytVideoId"];
//         video_i.childNodes[3].childNodes[1].childNodes[1].innerHTML=global_videos[i]["title"];
        
//         // console.log(video_i.childNodes[3].childNodes[1].childNodes[1].innerHTML)
//     }
// }

// (function (){
//     var tag = document.createElement("script"),
//         firstScriptTag = document.getElementsByTagName("script")[0];

//         tag.src = "https://www.youtube.com/iframe_api";
//         firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// })();

//============================================================
// var player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     height: '390',
//     width: '640',
//     videoId: 'M7lc1UVf-VE',
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
//   // var dur = !player.getDuration? 0 : player.getDuration();
//   // console.log(dur);
//   // player.cueVideoById('bHQqvYy5KYo', 5, 60, "small")
  
// }

// var getVideoTime = function (player) {
//     if(player!==undefined){
//         if(player.getDuration()!==undefined){
//             player.pauseVideo();
//             player.unMute();
//             console.log(player.getDuration());
//         }
//         else{
//             setTimeout(getVideoTime, 150);
//             console.log("call again ");
//         }
       
//     }else{
//         setTimeout(getVideoTime, 150);
//         console.log("call again ");
//     }
// }


// function onPlayerReady(event) {
//     event.target.playVideo();
//     console.log(player.getDuration());
//     player.cueVideoById('bHQqvYy5KYo', 5, 60, "small");
//     getVideoTime(player);    
// }

// var done = false;
// function onPlayerStateChange(event) {
//     if (event.data == YT.PlayerState.PLAYING && !done) {
//         setTimeout(stopVideo, 6000);
//         done = true;
//     }
// }
// function stopVideo() {
//     player.stopVideo();
// }
// This function creates an <iframe> (and YouTube player)
// after the API code downloads.

// function onYouTubeIframeAPIReady() {
//     var player = new YT.Player('player', {
//         width: '100%',
//         // events: {
//         //   'onReady': onPlayerReady,
//         //   'onStateChange': onPlayerStateChange
//         // }
//         // videoId: currentVideo.ytVideoId,
//     });
//     player.cueVideoById("fGPPfZIvtCw", 0, "small");

//     // var left_secssion = document.getElementById("left-section");
//     // for(var i=0 ; i<global_videos.length ; i++) {
//     //     var video_block = document.createElement("li");
//     //     video_block.classList.add("span2");
//     //     // video_block.innerHTML = '<div class="thumbnail" id='+ String(global_videos["id"]) +'>';
//     //     // video_block.innerHTML +=     '<div class="photo">'
//     //     // video_block.innerHTML +=     '<a href=video_page.html?id='+ String(global_videos["id"])  +'>';
//     //     var thumbnail = document.createElement("div");
//     //     thumbnail.classList.add("thumbnails");
//     //     thumbnail.id = String(global_videos[i]["id"]);

//     //     var cover_photo_block = document.createElement("div");
//     //     cover_photo_block.classList.add("photo");

//     //     var a = document.createElement("a");
//     //     a.href= "video_page.html?id=" + String(global_videos[i]["id"]);

//     //     var img=document.createElement("img");
//     //     img.src = "https://i.ytimg.com/vi/" + String(global_videos[i]["ytVideoId"]) + "/hqdefault.jpg";

//     //     var video_label = document.createElement("span");
//     //     video_label.classList.add("label");
//     //     video_label.classList.add("label-inverse");
//     //     video_label.classList.add("class-photo-label");

//     //     var video_time = document.createElement("span");
//     //     video_time.classList.add("video-time");
//     //     // video_time.innerHTML=

//     //     player.cueVideoById(String(global_videos[i]["ytVideoId"]));
//     //     // console.log();

//     //     a.appendChild(img);
//     //     cover_photo_block.appendChild(a)
//     //     thumbnail.appendChild(cover_photo_block);
//     //     video_block.appendChild(thumbnail);
//     //     console.log(video_block);

//     // }
// };

var thumbnails = document.getElementById("video_thumbnails");
for(var i=0 ; i<global_videos.length ; i++) {
    var video_block = document.createElement("li");
    video_block.classList.add("span2");
    // video_block.innerHTML = '<div class="thumbnail" id='+ String(global_videos["id"]) +'>';
    // video_block.innerHTML +=     '<div class="photo">'
    // video_block.innerHTML +=     '<a href=video_page.html?id='+ String(global_videos["id"])  +'>';
    var thumbnail = document.createElement("div");
    thumbnail.classList.add("thumbnail");
    thumbnail.id = String(global_videos[i]["id"]);

    var cover_photo_block = document.createElement("div");
    cover_photo_block.classList.add("photo");

    var a = document.createElement("a");
    a.href= "video_page.html?id=" + String(global_videos[i]["id"]);

    var img=document.createElement("img");
    img.src = "https://i.ytimg.com/vi/" + String(global_videos[i]["ytVideoId"]) + "/hqdefault.jpg";

    var video_label = document.createElement("span");
    video_label.classList.add("label");
    video_label.classList.add("label-inverse");
    video_label.classList.add("class-photo-label");

    var video_time = document.createElement("span");
    video_time.classList.add("video-time");
    video_time.innerHTML=global_videos[i]["duration"];
    


    a.appendChild(img);
    cover_photo_block.appendChild(a)

    video_label.appendChild(video_time);
    cover_photo_block.appendChild(video_label);
    thumbnail.appendChild(cover_photo_block);
    
    //===============================================
    var info_block = document.createElement("div");
    info_block.classList.add("caption");

    var a = document.createElement("a");
    a.href="video_page.html?id=" + String(global_videos[i]["id"]);

    var h5 = document.createElement("h5");
    h5.innerHTML = global_videos[i]["title"];

    var icon_div = document.createElement("div");
    var icon = document.createElement("i");
    icon.classList.add("icon-headphones");
    icon.innerHTML=global_videos[i]["views"];
    
    var lang_label_block = document.createElement("div");
    var span_ch = document.createElement("span");
    var span_en = document.createElement("span");
    span_en.classList.add("label");
    span_en.classList.add("label-warning");
    span_ch.classList.add("label");
    span_en.innerHTML="美國腔";
    span_ch.innerHTML="中文";


    a.appendChild(h5);
    icon_div.appendChild(icon);

    lang_label_block.appendChild(span_ch);
    lang_label_block.appendChild(span_en);

    info_block.appendChild(a);
    info_block.appendChild(icon_div);
    info_block.appendChild(lang_label_block);


    thumbnail.appendChild(info_block);
    video_block.appendChild(thumbnail);
    // console.log(video_block);
    // console.log(thumbnails);
    thumbnails.appendChild(video_block);

}
