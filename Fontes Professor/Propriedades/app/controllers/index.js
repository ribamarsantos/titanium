function salvar() {
	//Ti.App.Properties.setString('email', $.txtEmail.value);
	var obj = {
		email:$.txtEmail.value,
		senha:$.txtSenha.value
	};
	Ti.App.Properties.setString('usuario', JSON.stringify(obj));
}

function carregar() {
	//var info = Ti.App.Properties.getString('email');
	var usuario = JSON.parse(Ti.App.Properties.getString('usuario'));
	//alert(info);
	alert(usuario.senha);
}

$.index.open();
