var dbFileSource = "database/banco";
var dbFileTarget = "banco";
var db;
exports.install = function () {
  db =   Ti.Database.install(dbFileSource, dbFileTarget);
  db.close();

};

exports.consultarUsuarios = function () {

  var db  = Ti.Database.open(dbFileTarget);
  try {
    var rs = db.execute('select * from users');
    var users = [];
    while( rs.isValidRow()){
      users.push({
         id : rs.fieldByName('id'),
         nome : rs.fieldByName('nome'),
         email : rs.fieldByName('email')

      });
      rs.next();

    }

    return users;
  } catch (e) {
    alert('Erro ao consultar usuarios: ' + e.value);
    Ti.API.info(e.message);
  } finally {
    db.close();
  }

};

exports.cadastrarUsuario = function (usuario) {
  var db  = Ti.Database.open(dbFileTarget);
  try {
    db.execute (' insert into users(nome, email) values (?,?)', usuario.nome, usuario.email);
    var id = db.lastInsertRowId;

  } catch (e) {

  } finally {
    db.close();
  }
};
exports.removerUsuario = function (id) {
  var db = Ti.Database.open(dbFileTarget);
  try {
    db.execute('delete from users where id = ?', id);
    
  } catch (e) {

  } finally {
    db.close();
  }

};
exports.emailJaCadastrado = function(email){
  var db = Ti.Database.open(dbFileTarget);
  try {
    var rs = db.execute(' select * from users where email = ?', email);
    return rs.isValidRow();
  } catch (e) {

  } finally {
    db.close();
  }
};
