// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var row = $.args;
//title
$.windowDetail.title = row.title;
function carregarHttp() {

}
// carregar os detalhes do lugar pelo id
var xhr = Ti.Network.createHTTPClient();

xhr.onerror = function(e){
    alert(e);

}

xhr.onload = function(){
  //Ti.API.info(this.responseText);
  Alloy.Collections.places.reset(JSON.parse(this.responseText));
}

xhr.open('GET', 'http://igarassu-project.herokuapp.com/place');
xhr.send();




function filterPlace(collection){

  return collection.where({place_type: row.id});
}

function showMoreDetailPlace(e){

  var objplace = Alloy.Collections.places.where({id: e.rowData.identificador});
  //Ti.API.info(objplace.id);
  //  Ti.API.info(JSON.stringify(objplace[0]));
  var ctrl = Alloy.createController('descriptionPlace', objplace);
  ctrl.getView().open();
}
