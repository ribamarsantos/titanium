// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var fugitive = $.args;

$.capturedDetails.title = fugitive.get('name');

function capture(e){
  fugitive.set('captured', 1);
  fugitive.save();
}

function showAtMap(e) {
	var ctrl = Alloy.createController('map', captured);
  if ( OS_ANDROID){
    ctrl.getView().open();
  }else{
    $.capturedDetails.tab.open(ctrl.getView());  
  }

}
