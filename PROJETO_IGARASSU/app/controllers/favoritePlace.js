// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

Alloy.Collections.places.fetch();

function showdetailPlace(e){
  alert('open descriptionPlace');
  // var objplace = Alloy.Collections.places.get(e.rowData.identificador);
  // Alloy.createController('descriptionPlace', objplace)
  // .getView().
  // open();
}
