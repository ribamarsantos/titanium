// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function showDetails(e){
<<<<<<< HEAD
	var fugitive = Alloy.Collections.fugitives.get(e.rowData.identificador);
	var ctrl = Alloy.createController('capturedDetails', fugitive);
	ctrl.tab = $.capturedTab;
=======
	var ctrl = Alloy.createController('capturedDetails', {name: e.rowData.title});
>>>>>>> parent of a1dd7cb... aula data binding, camera
	$.captureTab.open(ctrl.getView());
}
