// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function closeWindow(e){
  $.listInfoPlaceWin.close();
}

function showDetails(e){
  Alloy.createController('hinoPlace').getView().open();
}
