var dados = [
	{title:'Santa Cruz', divisao:1, height:40},
	{title:'Sport', divisao:1, height:40},
	{title:'Náutico', divisao:2, height:40}
];

$.myTable.data = dados;

function exibirDivisao(e) {
	alert('Divisão do ' + e.rowData.title + ': ' + e.rowData.divisao);
}

var row = Ti.UI.createTableViewRow({
	title:'Central',
	divisao: 3,
	backgroundColor: 'red',
	height:40
});

$.myTable.appendRow(row);

$.index.open();
