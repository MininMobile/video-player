var v;
var s;

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
}
$(document).on('input', ".slideBtn", function() { updateVideoTime(); });
$(document).on('input', ".volBtn", function() { updateVideoVolume(); });

function updateVideoVolume() { v.volume = l.value/100 }
function updateSlider() {
    s.value = v.currentTime;
    if (s.value == Math.floor(v.duration)) {
        playPause(false);
    }
}
function updateVideoTime() { v.currentTime = s.value; }

function playPause(paused) {
    if (paused) {
        if (s.value == Math.floor(v.duration)) {
            v.currentTime = 0;
        }
        v.play();
        $(".play").html(' <div class="cbtn pauseBtn"> ');
    } else {
        v.pause();
        $(".play").html(' <div class="cbtn playBtn"> ');
    }
}