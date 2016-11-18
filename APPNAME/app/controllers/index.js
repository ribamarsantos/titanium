var items = [];

function doClick(e) {
  // var msg = '';
  //   if (  $.txtEmail.value.trim() == "" ){
  //     $.txtEmail.focus();
  //     msg = 'Informe o email';
  //   }else if ( $.txtSenha.value.trim() == ""){
  //     $.txtSenha.focus();
  //     msg = 'Informe a senha';
  //   }else{
  //     msg = 'Seja Bem vindo' + $.txtEmail.value;
  //     items.push({title:$.txtEmail.value});
  //     $.list.data = items;
  //   }
  //
  //   alert(msg);

  var url = "http://swapi.co/api/people/1";
	var json;
	var xhr = Ti.Network.createHTTPClient({
		onload: function () {
			json = JSON.parse(this.responseText);
      console.log(json);
      $.list.data =  json;
			alert(json.name);
		}
	});

}


$.index.open();
