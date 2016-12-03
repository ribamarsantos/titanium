// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var fugitive = $.args;

$.capturedDetails.title = fugitive.get('name');
Ti.API.info(fugitive.get('capturedLong'));

if (fugitive.get("photo")) {
	$.capturedImageView.image = fugitive.get("photo");
} else {
	$.capturedImageView.image = '/images/burglar.png';
}

function showMap(){
	var ctrl = Alloy.createController('map', fugitive);
	if (OS_ANDROID) {
		ctrl.getView().open();
	} else {
		$.capturedDetails.tab.open(ctrl.getView());	
	}
	
}
