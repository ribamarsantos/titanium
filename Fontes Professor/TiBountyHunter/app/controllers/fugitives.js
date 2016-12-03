// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function showDetails(e) {
	var fugitive = Alloy.Collections.fugitives.get(e.rowData.identificador);
	var ctrl = Alloy.createController('fugitiveDetails', fugitive);
	$.fugitiveTab.open(ctrl.getView());
}

function fugitivesFilter(collection) {
	return collection.where({captured:0});
}

function showAddFugitive() {
	Ti.App.fireEvent('showFugitiveEvent');
}
