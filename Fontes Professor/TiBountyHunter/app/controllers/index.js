if (OS_ANDROID) {
	if (!Ti.Media.hasCameraPermissions()) {
		Ti.Media.requestCameraPermissions(function(e){
			if (e.success) {
				init();
			} else {
				alert('É necessário aceitar a permissão da camera!');
			}
		});
	}
} else {
	init();
}

function showAddFugitive() {
	var ctrl = Alloy.createController('addFugitive');
	
	if (OS_IOS) {
		var navCtrl = Ti.UI.iOS.createNavigationWindow({
			modal:true,
			window:ctrl.getView()
		});
		// Necessário para fechar o modal
		ctrl.navWindow = navCtrl; 
		navCtrl.open();
	} else {
		ctrl.getView().open();	
	}	
}

Ti.App.addEventListener('showFugitiveEvent',showAddFugitive);

function init() {
	Alloy.Collections.fugitives.fetch();
	$.index.open();	
}

