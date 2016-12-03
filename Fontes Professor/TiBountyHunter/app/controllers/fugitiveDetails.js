// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var fugitive = $.args;

$.fugitiveDetails.title = fugitive.get('name');

if (fugitive.get("photo")) {
	$.fugitiveImageView.image = fugitive.get("photo");
} else {
	$.fugitiveImageView.image = '/images/burglar.png';
}

function capture() {
	if (OS_ANDROID) {
		if (!Ti.Geolocation.hasLocationPermissions()) {
			Ti.Geolocation.requestLocationPermissions(function(e){
				if (e.success) {
					capture();
				} else {
					alert('É preciso dar permissão!');
					return;
				}
			});
		}
	}
	
	if (Ti.Geolocation.locationServicesEnabled) {
		Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_HIGH;
		Ti.Geolocation.getCurrentPosition(function(e) {
			fugitive.set('capturedLat', e.coords.latitude);
			fugitive.set('capturedLong', e.coords.longitude);
			fugitive.set('captured', 1);
			fugitive.save();
			$.fugitiveDetails.close();
		});
	} else {
		alert("Habilite o GPS!");
	}
	
}

function remove() {
	fugitive.destroy();
	$.fugitiveDetails.close();
}

function takePhoto() {
	if (OS_ANDROID) {
		Ti.Media.showCamera({
			mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO],
			error:function(e) {
				alert(e.message);
			},	
			success: savePhoto
		});
	} else {
		Ti.Media.openPhotoGallery({
			mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO],
			error:function(e) {
				alert(e.message);
			},	
			success: savePhoto
		});
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
