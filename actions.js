var v;
var s;

$(document).ready(function() {
    v = document.getElementById("player");
    s = document.getElementsByClassName("slideBtn")[0];

    // Init Slider
    s.min = 0;
    s.max = (v.duration).toString();
    updateSlider();
    setInterval(function(){updateSlider()}, 500);

    // Init Play
    $(".play").click(function() { playPause(); })
})
$(document).on('input', s, function() { updateVideo(); });

function updateSlider() { s.value = v.currentTime; }
function updateVideo() { v.currentTime = s.value; }
function playPause() {
    if (v.paused) {
        v.play();
        $(".play").html(' <div class="pbtn pauseBtn"> ');
    } else {
        v.pause();
        $(".play").html(' <div class="pbtn playBtn"> ');
    }
}