# video-player
A simple, pure js, html5 video player.

## Usage
Add your video to a directory somewhere on the webserver, just
somewhere you can access the video.

For when you want to use a video in your website, make sure you add
`<script src="videoLoader.js"></script>` to the html `head` tag.

Then, add `<div class="videoWrapper" style="width: 50%;">` where you
want the video player to be, the width will automatically adjust the
height for you.

Next up, add `<script>var videoName = "Media/video.mp4"; var videoType = "video/mp4"; onload2();</script>`
to the end of the page, this will set the directory and name of the
video so it can be played, and, set the video type to mp4, you can
customize this so it works your you. `onload2();` just launches the
embed process from the `videoLoader.js` script.

(Yes, I know you can only have one video on the page at a time, b-but
I'm working on it! <3)

## Credits
- [Time Code Snippet](http://www.developphp.com/video/JavaScript/Video-Duration-and-Current-Play-Time-Programming-Tutorial)
- [Video Used](https://www.youtube.com/watch?v=RUina9K2Y8g)
