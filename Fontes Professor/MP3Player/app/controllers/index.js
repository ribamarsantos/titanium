var audioPlayer = Ti.Media.createAudioPlayer({ 
    url: 'http://www.musicasparaouvir.org/wp-content/uploads/2015/08/01.-Bye-Bye-Cro.mp3',
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


$.index.open();
