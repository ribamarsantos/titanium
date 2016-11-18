var dados = [ {title:"Sport",divisao:1, height:40},
              {title:"Santa Cruz",divisao: 1, height:40},
              {title:"Nautico", divisao:2, height:40}
               ];
$.times.data = dados;

function exibirDivisao(e){
  alert('O time ' + e.rowData.title + ' está na ' + e.rowData.divisao);

}

var row = Ti.UI.createTableViewRow({
  title:'Central',
  divisao: 3,
  backgroundColor:'red',
  height: 40
});

$.times.appendRow(row);

$.index.open();
