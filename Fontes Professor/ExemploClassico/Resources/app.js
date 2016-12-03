var janela = Ti.UI.createWindow({
	backgroundColor:'red'
});

var botao = Ti.UI.createButton({
	title:'Clique-me',
	height:40,
	width:'90%'
});

botao.addEventListener('click', function(){
	//alert('Olá Pessoal!');
	
	// var NovaJanela = require('novajanela');
	// var newJanela = NovaJanela({
		// nome:'Pedro',
		// idade: 24
	// });
	// newJanela.open();
	var util = require('util');
	util.showAlert('Teste');
	util.log('Teste');
});

janela.add(botao);
janela.open();
