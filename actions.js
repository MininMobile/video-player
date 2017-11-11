var v;
var w;
var s;
var l;
var f;

function onLoad() {
    v = document.getElementById("player");
    w = document.getElementsByClassName("videoWrapper")[0];
    s = document.getElementsByClassName("slideBtn")[0];
    l = document.getElementsByClassName("volBtn")[0];
    f = false;

    // Init Slider
    s.setAttribute("min", "0");
    s.setAttribute("max", v.duration);
    updateSlider();
    v.ontimeupdate = function() { updateSlider() };

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
    
    // Init Speed
    $(".speed").click(function() { updateVideoSpeed(); })
}
$(document).on('input', ".slideBtn", function() { updateVideoTime(); });
$(document).on('input', ".volBtn", function() { updateVideoVolume(); });

function updateVideoTime() { v.currentTime = s.value; }

function updateVideoScreen() {
    f = !f;
    if (f) {
        w.style.width = "calc(100% - 1px)";
        $(".screen").html(' <div class="cbtn full"> ');
    } else {
        w.style.width = "50%";
        $(".screen").html(' <div class="cbtn empty"> ');
    }
    toggleFullScreen();
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
function updateVideoSpeed() {
    var speed = prompt("Enter video speed (0.15 to 10)");
    if (isNaN(speed)) {
        alert("Invalid Number");
    } else {
        if (speed > 10) {
            speed = 10;
        } else if (speed < 0.15) {
            speed = 0.15;
        }

        v.playbackRate = speed;
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
function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
     (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {  
        document.documentElement.requestFullScreen();  
      } else if (document.documentElement.mozRequestFullScreen) {  
        document.documentElement.mozRequestFullScreen();  
      } else if (document.documentElement.webkitRequestFullScreen) {  
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
      }  
    } else {  
      if (document.cancelFullScreen) {  
        document.cancelFullScreen();  
      } else if (document.mozCancelFullScreen) {  
        document.mozCancelFullScreen();  
      } else if (document.webkitCancelFullScreen) {  
        document.webkitCancelFullScreen();  
      }  
    }  
  }