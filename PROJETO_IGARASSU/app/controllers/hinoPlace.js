var audioPlayer = Ti.Media.createAudioPlayer({
    url: '/sounds/Hino_Igarassu.mp3',
    allowBackground: true
});

audioPlayer.addEventListener('progress', function(e){
	Ti.API.info(e.progress);
	Ti.API.info(audioPlayer.getDuration());
	$.progress.value = e.progress / audioPlayer.getDuration();
});

function play() {
	audioPlayer.start();
	$.progress.min = 0;
	$.progress.max = 1;
}

function closeWindow(e){
  $.hinoPlaceWin.close();
}
function pause(e){
  audioPlayer.pause();
}
