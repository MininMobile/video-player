function onload2() {
    var data = `<video id="player" onclick="playPause(v.paused)">
    <source src="${videoName}" type="${videoType}">
    Your browser sucks
    </video>
    
    <ul class="controls">
    <span class="slide"> <input type="range" class="slideBtn"> </span>
    
    <div style="position: relative; top: calc(-0.5em + 1px);">
        <li class="play"> <div class="cbtn playBtn"></div> </li>
        <li class="length"> 
            <span id="curTime"></span>/<span id="durTime"></span>
        </li>
        <li class="speed"> <div class="cbtn fast"> </div> 
    
        <li class="screen right"> <div class="cbtn empty"> </div> </li>
        <li class="volContainer right"> <input type="range" class="volBtn"> <li>
        <li class="volume right"> <div class="cbtn unmuted"></div> </li>
    </div>
    </ul>`;

    document.getElementsByClassName("videoWrapper")[0].innerHTML = data;

    var script = document.createElement('script');
    script.src = 'video.js';
	document.getElementsByTagName('head')[0].appendChild(script);

    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = 'video.css';
	document.getElementsByTagName('head')[0].appendChild(style);

    setTimeout(function(){ onLoad(); },1000);
}