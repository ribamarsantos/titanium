// Arguments passed into this controller can be accessed via the `$.args` object directly or:

var args = arguments[0]|| {};
var arg = [];
arg = JSON.stringify(args[0]);

var objplace = JSON.parse(arg);

if ( OS_IOS ){
  $.navWindow.title = objplace.place_name;
}else{
  $.wincontent.title = objplace.place_name;
}


$.imgPlace.image     = objplace.photo;
$.lblPhone.text      = objplace.phone;
$.lblAddress.text    = objplace.address + " - " + objplace.district;
$.lblPrice.text      = objplace.price;
$.btnFavorite.visible = objplace.favorite != 1;
var lang = Ti.Locale.currentLanguage;

if ( lang.indexOf("pt-")){
  $.lblDescription.text = objplace.description_pt;
}else if (lang.indexOf("es-")) {
  $.lblDescription.text = objplace.description_esp;
}else{
  $.lblDescription.text = objplace.description_eng;
}


function showMap(e){
  try {
      var ctrl = Alloy.createController('mapPlace', objplace);
      if(OS_IOS){
        var navCtrl = Ti.UI.iOS.createNavigationWindow({
          modal: true,
          window: ctrl.getView()
        });

        ctrl.navWindow = navCtrl;
        navCtrl.open();
      }else{
        ctrl.getView().open();
      }
  } catch (e2) {
      alert(e2.message);;
  } finally {

  }
}

function favoritePlace(e){
  if ( objplace.favorite != 1){
      objplace.favorite = 1;
      Alloy.createModel('place', objplace).save();
      close();
    }else{
      alert('Já é um favorito');
    }
}

function close() {
	if (OS_IOS) {
		$.navWindow.close();
	} else {
		$.wincontent.close();
	}
}
