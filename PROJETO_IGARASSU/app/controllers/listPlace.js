// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var height_row = 50;

var activities =[];
var activities =[
  {title: L('diversao'),
  id   :1,
  height: height_row},
  {title: L('feiras'),
  id   :2,
  height: height_row},
  {title: L('hoteis'),
  id   :3,
  height: height_row},
  {title: L('igrejas'),
  id   :4,
  height: height_row},
  {title: L('monumentos_historicos'),
  id   :5,
  height: height_row},
  {title: L('museus'),
  id   :6,
  height: height_row},
  {title: L('pracas'),
  id   :7,
  height: height_row},
  {title: L('praias'),
  id   :8,
  height: height_row},
  {title: L('restaurantes'),
  id   :9,
  height: height_row}
];

$.tableViewListPlaces.data = activities;

function showDetails(e){
  Alloy.createController('detailPlace',e.rowData)
                                          .getView()
                                          .open();
}

function closeWindow(e){
  $.listPlaceWin.close();
}
