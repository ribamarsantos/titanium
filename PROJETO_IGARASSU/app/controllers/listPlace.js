// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var activities =[];
var activities =[
  {title: L('diversao'),
  id   :1},

  {title: L('feiras'),
  id   :2},
  {title: L('hoteis'),
  id   :3},
  {title: L('igrejas'),
  id   :4},
  {title: L('monumentos_historicos'),
  id   :5},
  {title: L('museus'),
  id   :6},
  {title: L('pracas'),
  id   :7},
  {title: L('praias'),
  id   :8},
  {title: L('restaurantes'),
  id   :9}
];

$.tableViewListPlaces.data = activities;

function showDetails(e){
  var row = e.rowData;  
  var ctrl = Alloy.createController('detailPlace',row);
  if(OS_IOS){
    var navCtrl = Ti.UI.iOS.createNavigationWindow({
      modal: true,
      window: ctrl.getView()
    });

    ctrl.navWindow = navCtrl;
    navCtrl.open();
  }else{
    ctrl.getView().open();
  }
}
