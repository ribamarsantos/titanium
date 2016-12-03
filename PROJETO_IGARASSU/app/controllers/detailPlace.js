// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var row = $.args;
// carregar os detalhes do lugar pelo id
var xhr = Ti.Network.createHTTPClient();

xhr.onerror = function(e){
    alert(e);

}

xhr.onload = function(){
  Ti.API.info(this.responseText);
  Alloy.Collections.places.reset(JSON.parse(this.responseText));
}

xhr.open('GET', 'http://igarassu-project.herokuapp.com/place');
xhr.send();

$.lblPlace.text = row.title;


function filterPlace(collection){
  return collection.where({place_type: row.id});
}

function showDetails(e){
	// var fugitive = Alloy.Collections.fugitives.get(e.rowData.identificador);
	// var ctrl = Alloy.createController('fugitiveDetails', fugitive);
	// $.fugitiveTab.open(ctrl.getView());
}

function showDescriptionPlace(e){
  //
}
