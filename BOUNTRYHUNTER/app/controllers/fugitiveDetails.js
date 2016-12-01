var fugitive = $.args;

$.fugitiveDetails.title = fugitive.get('name');

<<<<<<< HEAD

if ( fugitive.get('photo')){
  $.fugitiveImageView.image = fugitive.get('photo');
}else{
  $.fugitiveImageView.image= '/images/burglar.png';
}



=======
>>>>>>> parent of a1dd7cb... aula data binding, camera
function capture(e){
  if(OS_ANDROID && Ti.Platform.version >= '5'){
    if (!Ti.Geolocation.hasLocationPermissions()){
      Ti.Geolocation.requestLocationPermissions(function(e){
        if (e.success){
          capture();
          return;
        }else{
          alert('É Preciso permissão');
          return;
        }
      });
    }
  }
  Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_HIGH;
  Ti.Geolocation.getCurrentPosition(function(e){
    fugitive.set('capturedLat', e.coords.latitude);
    fugitive.set('capturedLong', e.coords.longitude);
    Ti.API.info(fugitive.get('capturedLong'));
  });


  fugitive.set('captured', 1);
  fugitive.save();
  $.fugitiveDetails.close();
}

function remove(){
  fugitive.destroy();
  $.fugitiveDetails.close();
}
