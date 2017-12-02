var v;
var w;
var s;
var l;
var f;
var initialWidth;

function onLoad() {
    v = document.getElementById("player");
    w = document.getElementsByClassName("videoWrapper")[0];
    s = document.getElementsByClassName("slideBtn")[0];
    l = document.getElementsByClassName("volBtn")[0];
    initialWidth = w.style.width;
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
	document.getElementsByClassName("play")[0].addEventListener("click", function() { playPause(v.paused) }, false);
    
    // Init Mute
    document.getElementsByClassName("volume")[0].addEventListener("click", function() { l.value = 0; updateVideoVolume(); }, false);
    
    // Init Mute
    document.getElementsByClassName("screen")[0].addEventListener("click", function() { updateVideoScreen(); }, false);
    
    // Init Speed
    document.getElementsByClassName("speed")[0].addEventListener("click", function() { updateVideoSpeed(); }, false);
}
document.getElementsByClassName("slideBtn")[0].addEventListener("input", function() { updateVideoTime(); }, false);
document.getElementsByClassName("volBtn")[0].addEventListener("input", function() { updateVideoVolume(); }, false);

function updateVideoTime() { v.currentTime = s.value; }

function updateVideoScreen() {
    f = !f;
    if (f) {
        w.style.width = "calc(100% - 1px)";
        w.style.height = "100vh";
        document.getElementsByClassName("screen")[0].innerHTML = ' <div class="cbtn full"> ';
    } else {
        w.style.width = initialWidth;
        w.style.height = "initial";
        document.getElementsByClassName("screen")[0].innerHTML = ' <div class="cbtn empty"> ';
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
    
	document.getElementById("curTime").innerHTML = curmins + ":" + cursecs;
    document.getElementById("durTime").innerHTML = durmins + ":" + dursecs;
    
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