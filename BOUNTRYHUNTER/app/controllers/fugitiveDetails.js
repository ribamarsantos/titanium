var fugitive = $.args;

$.fugitiveDetails.title = fugitive.get('name');


if ( fugitive.get('photo')){
  $.fugitiveImageView.image = fugitive.get('photo');
}else{
  $.fugitiveImageView.image= '/images/burglar.png';
}



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
  var file = Ti.Filesystem.getFile(fugitive.get('photo'));
  if(file.exits() && file.deleteFile()){
    fugitive.destroy();
    $.fugitiveDetails.close();
  }else{
    alert('Erro ao excluir imagem do fugitivo');
  }
}

function showOption(e){
  var animation = Titanium.UI.createAnimation();
  animation.backgroundColor = 'black';
  animation.duration = 7000;
  var animationHandler = function() {
    animation.removeEventListener('complete',animationHandler);
    animation.backgroundColor = 'orange';
    $.viewOption.animate(animation);
  };
  animation.addEventListener('complete',animationHandler);
  //$.viewOption.animate = animation;
  $.viewOption.visible = true;
}
function takePhotoFromCamera(e) {

  try {
    Ti.Media.showCamera({
      mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO],
      error: function(e){
        alert(e.message);
      },
      success: savePhoto
    });
  } catch (e2) {
    alert(e2.message);
  } finally {
    $.viewOption.visible = false;
  }


}


function takePhotoFromGallery(e) {
  try {
    Ti.Media.openPhotoGallery({
      mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO],
      error: function(e){
        alert(e.message);
      },
      success: savePhoto
    });
  } catch (e2) {
    alert(e2.message);
  } finally {
    $.viewOption.visible = false;
  }


}


function savePhoto(e) {
  var image = e.media;
  var file = Ti.Filesystem.getFile(
      Ti.Filesystem.applicationDataDirectory,
      fugitive.get('alloy_id') + '.jpg');
  file.write(image);
  $.fugitiveImageView.image = image;
  fugitive.set('photo', file.getNativePath());
  fugitive.save();
}
