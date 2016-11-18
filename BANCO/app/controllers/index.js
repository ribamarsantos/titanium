var dbhelper = require('dbhelper');
dbhelper.install();
var data = [];

function listarUsuario(){
  $.tbviewUsers.data = [];
  data = [];
  var users = dbhelper.consultarUsuarios();

  for (var i = 0; i < users.length; i++) {
    data.push({
        title: users[i].nome,
        idusuario:users[i].id
    });

  }

  $.tbviewUsers.data = data;
}

listarUsuario();


function adicionar() {
  var msg = '';
    if (  $.txtNome.value.trim() === "" ){
      $.txtNome.focus();
      msg = 'Informe o nome';
    }else if ( $.txtEmail.value.trim() === ""){
      $.txtEmail.focus();
      msg = 'Informe p email';
    }else{
      var usuario= {
        nome : $.txtNome.value,
        email : $.txtEmail.value
      };

      if ( dbhelper.emailJaCadastrado(usuario.email)){
          alert('email ja cadastrado');
      }else{
        dbhelper.cadastrarUsuario(usuario);
        limparControls();
      }
      listarUsuario();
    }
}
function excluir(e){
  var rowData = e.rowData;

//  alert('deseja excluir o usuario?' + rowData.idusuario);
  removerUsuario(rowData.idusuario);
}

function removerUsuario(id) {
  dbhelper.removerUsuario(id);
  listarUsuario();
}
function limparControls(){
    $.txtNome.value = "";
    $.txtEmail.value = "";
    $.txtNome.focus();

}
$.index.open();
