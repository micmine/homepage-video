function toggleMute(){
  var video = document.getElementById('bgvideo');
  video.muted = !video.muted;
  var toggle = document.getElementById('toggle');
  toggle.hidden = !toggle.hidden;
}