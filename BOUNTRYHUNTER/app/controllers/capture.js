// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

// function showDetails(e){
// 	var ctrl = Alloy.createController('capturedDetails', {name: e.rowData.title});
// 	$.captureTab.open(ctrl.getView());
// }

function showDetails(e){
	var fugitive = Alloy.Collections.fugitives.get(e.rowData.identificador);
	var ctrl = Alloy.createController('capturedDetails', fugitive);
	$.captureTab.open(ctrl.getView());
}
function capturedFilter(collection){
	return collection.where({captured: 1});
}
