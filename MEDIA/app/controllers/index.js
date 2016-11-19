var audioPlayer = Ti.Media.createAudioPlayer({
    url: 'http://www.musicasparaouvir.org/wp-content/uploads/2015/10/01.-David-Guetta-feat.-MAGIC-Son-Sun-Goes-Down-www.musicasparabaixar.org_.mp3',
    allowBackground: true
});

audioPlayer.addEventListener('progress', function (e) {
    $.progress.value = e.value;
});

  var sound = Ti.Media.createSound(
    {
        url: 'http://www.musicasparaouvir.org/wp-content/uploads/2015/10/01.-David-Guetta-feat.-MAGIC-Son-Sun-Goes-Down-www.musicasparabaixar.org_.mp3'
    }
  );

function playSong(e){
  //sound.play();

  audioPlayer.start();
  $.progress.min = 0;
  $.progress.max = 1;
  $.progre.value = e.progress / audioPlayer.getDuration;
  Ti.API.info(audioPlayer.getDuration());
}

function stopSong(e){
  sound.stop();
}


$.index.open();
