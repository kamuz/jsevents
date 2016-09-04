var jukebox = document.querySelector("ul.player");
jukebox.addEventListener("click", function(e){
  var audioPlayer = document.createElement('audio');
  var soundName = e.target.getAttribute('data-src');
  audioPlayer.id = 'player';
  e.target.id = 'playing';
  audioPlayer.src = soundName;
  document.body.appendChild(audioPlayer);
  audioPlayer.play();

  audioPlayer.addEventListener('ended', function(){
    audioPlayer.parentNode.removeChild(audioPlayer);
    e.target.id = '';
  }, false);
}), false;