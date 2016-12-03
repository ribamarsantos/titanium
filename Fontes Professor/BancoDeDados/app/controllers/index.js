var dbhelper = require('dbhelper');
dbhelper.install();

function carregar() {
	var usuarios = dbhelper.consultarUsuarios();
	var data = [];
	for (var i=0; i < usuarios.length; i++) {
	  data.push({
	  	title:usuarios[i].nome + ' - ' + usuarios[i].email
	  });
	};
	
	$.myTableView.data = data;
}

function cadastrar() {
	dbhelper.cadastrarUsuario({
		nome:$.txtNome.value,
		email:$.txtEmail.value
	});
	carregar();
}
carregar();
$.index.open();
