module.exports = function(aluno) {
	var win2 = Ti.UI.createWindow({
		backgroundColor:'green'
	});
	
	var myLabel = Ti.UI.createLabel({
		text:aluno.nome + ' idade: ' + aluno.idade
	});
	
	win2.add(myLabel);
	
	return win2;
};
