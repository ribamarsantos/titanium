// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var row = $.args;
var xhr = Ti.Network.createHTTPClient({
  onload: function () {
      Alloy.Collections.places.reset(JSON.parse(this.responseText));
  },
  onerror: function (e) {
      Ti.API.debug(e.message);
    //alert(e);
  },
  timeout: 5000
});
//title
$.windowDetail.title = row.title;
$.windowDetail.addEventListener('open', callPlace);
function callPlace(e) {
  if ( Ti.Network.online){
    Ti.API.info('teste');
    xhr.open('GET', 'http://igarassu-project.herokuapp.com/place');
    xhr.send();
  }else{
    Ti.API.info('Sem internet!');
  }
}

function filterPlace(collection){
  return collection.where({place_type: row.id});
}

function showMoreDetailPlace(e){
  var objplace = Alloy.Collections.places.where({id: e.rowData.identificador});
  Alloy.createController('descriptionPlace', objplace).
    getView().
    open();
}
