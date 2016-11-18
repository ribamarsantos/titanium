

function showAddFugitive(argument) {
  var ctrl = Alloy.createController('addFugitive');

  if ( OS_IOS){
    var navCtrl = Ti.UI.iOS.createNavigationWindow({
      modal: true,
      window: ctrl.getView()
    });
    // necessário para fechar
    ctrl.navWindow = navCtrl;
    navCtrl.open();
  }else{
    ctrl.getView().open();
  }
}

Ti.App.addEventListener('showFugitiveEvent', showAddFugitive);

Alloy.Collections.fugitives.fetch();



$.index.open();
