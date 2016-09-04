var jukebox = document.querySelector("ul.player");
jukebox.addEventListener("click", function(e){
  var soundName = e.target.getAttribute('data-src');
  var soundPlaying = document.querySelector("#player");
  if (soundPlaying) {
    if (soundPlaying.paused) {
      soundPlaying.play();
      e.target.id = 'playing';
    }
    else {
      soundPlaying.pause();
      e.target.id = 'paused';
    }
  } else {
    var audioPlayer = document.createElement('audio');
    audioPlayer.id = 'player';
    e.target.id = 'playing';
    audioPlayer.src = soundName;
    document.body.appendChild(audioPlayer);
    audioPlayer.play();

    audioPlayer.addEventListener('ended', function(){
      audioPlayer.parentNode.removeChild(audioPlayer);
      e.target.id = '';
    }, false);
  }
}), false;