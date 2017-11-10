var v;
var s;

$(document).ready(function() {
    v = $("video#player")[0];
    s = document.getElementsByClassName("slideBtn")[0];

    // Init Slider
    s.min = 0;
    s.max = (v.duration).toString();
    updateSlider();
    setInterval(function(){updateSlider()}, 500);

    $(".play").click(function() {
        if (v.paused) {
            v.play();
            $(this).html('<div class="pbtn pauseBtn">');
        } else {
            v.pause();
            $(this).html('<div class="pbtn playBtn">');
        }
    })
})
$(document).on('input', s, function() { updateVideo(); });

function updateSlider() { s.value = v.currentTime; }
function updateVideo() { v.currentTime = s.value; }