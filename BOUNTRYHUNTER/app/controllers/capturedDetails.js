// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var captured = $.args;

if ( captured.get('photo')){
  $.capturedImageView.image = captured.get('photo');
}else{
  $.capturedImageView.image= '/images/burglar.png';
}

$.capturedDetails.title = captured.get('name');

function capture(e){
  captured.set('captured', 0);
  captured.save();
  $.capturedDetails.close();
}

function showAtMap(e) {
	var ctrl = Alloy.createController('map', captured);
  if ( OS_ANDROID){
    ctrl.getView().open();
  }else{
    $.capturedDetails.tab.open(ctrl.getView());  
  }

}
