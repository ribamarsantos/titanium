// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var row = $.args;
$.lblPlace.text = row.title;


function filterPlace(collection){
  return collection.where({place_type: row.id});
}

function showDetails(e){
	var fugitive = Alloy.Collections.fugitives.get(e.rowData.identificador);
	var ctrl = Alloy.createController('fugitiveDetails', fugitive);
	$.fugitiveTab.open(ctrl.getView());
}

function showDescriptionPlace(e){
  //
}
