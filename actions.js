var v;
var s;

function onLoad() {
    v = document.getElementById("player");
    s = document.getElementsByClassName("slideBtn")[0];

    // Init Slider
    s.setAttribute("min", "0");
    s.setAttribute("max", v.duration);
    updateSlider();
    setInterval(function(){updateSlider()}, 500);

    // Init Play
    $(".play").click(function() { playPause(v.paused); })
}
$(document).on('input', s, function() { updateVideo(); });

function updateSlider() {
    s.value = v.currentTime;
    if (s.value == Math.floor(v.duration)) {
        playPause(false);
    }
}
function updateVideo() { v.currentTime = s.value; }

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