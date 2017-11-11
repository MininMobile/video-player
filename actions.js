var v;
var s;
var l;

function onLoad() {
    v = document.getElementById("player");
    s = document.getElementsByClassName("slideBtn")[0];
    l = document.getElementsByClassName("volBtn")[0];

    // Init Slider
    s.setAttribute("min", "0");
    s.setAttribute("max", v.duration);
    updateSlider();
    setInterval(function(){updateSlider()}, 500);

    // Init Loudness
    l.setAttribute("min", "0");
    l.setAttribute("max", "100");
    l.setAttribute("value", "50");

    // Init Play
    $(".play").click(function() { playPause(v.paused); })
    
    // Init Mute
    $(".volume").click(function() { l.value = 0; updateVideoVolume(); })
    
    // Init Mute
    $(".screen").click(function() { updateVideoScreen(); })
}
$(document).on('input', ".slideBtn", function() { updateVideoTime(); });
$(document).on('input', ".volBtn", function() { updateVideoVolume(); });

function updateVideoTime() { v.currentTime = s.value; }

function updateVideoScreen() {
    if (v.requestFullscreen) {
        v.requestFullscreen();
    } else if (v.mozRequestFullScreen) {
        v.mozRequestFullScreen();
    } else if (v.webkitRequestFullscreen) {
        v.webkitRequestFullscreen();
    }else if (v.msRequestFullscreen) {
        v.msRequestFullscreen();
    }
}
function updateSlider() {
    s.value = v.currentTime;

    var curmins = Math.floor(v.currentTime / 60);
	var cursecs = Math.floor(v.currentTime - curmins * 60);
	var durmins = Math.floor(v.duration / 60);
	var dursecs = Math.floor(v.duration - durmins * 60);
	if(cursecs < 10){ cursecs = "0"+cursecs; }
	if(dursecs < 10){ dursecs = "0"+dursecs; }
	if(curmins < 10){ curmins = "0"+curmins; }
    if(durmins < 10){ durmins = "0"+durmins; }
    
	$("#curTime").html(curmins+":"+cursecs);
    $("#durTime").html(durmins+":"+dursecs);
    
    if (s.value == Math.floor(v.duration)) {
        playPause(false);
    }
}
function updateVideoVolume() {
    v.volume = l.value/100
    if (v.volume == 0) {
        $(".volume").html(' <div class="cbtn muted"></div> ');
    } else {
        $(".volume").html(' <div class="cbtn unmuted"></div> ');
    }
}
function playPause(paused) {
    if (paused) {
        if (s.value == Math.floor(v.duration)) {
            v.currentTime = 0;
        }
        v.play();
        $(".play").html(' <div class="cbtn pauseBtn"></div> ');
    } else {
        v.pause();
        $(".play").html(' <div class="cbtn playBtn"></div> ');
    }
}