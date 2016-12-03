var dbFileSource = 'db/banco.sqlite';
var dbFileTarget = 'banco.sqlite';
exports.install = function() {
	var db = Ti.Database.install(dbFileSource, dbFileTarget);
	db.close();
};

exports.cadastrarUsuario = function(usuario) {
	var db = Ti.Database.open(dbFileTarget);
	try {
		db.execute('INSERT INTO users (nome, email) VALUES (?, ?)',
					usuario.nome, usuario.email);
	} catch(e) {
		alert(e.message)	;	
	} finally {
		db.close();	
	} 
	
};

exports.consultarUsuarios = function() {
	var db = Ti.Database.open(dbFileTarget);
	var rs = db.execute('select * from users');
	var users = [];
	while (rs.isValidRow()) {
		users.push({
			id:rs.fieldByName('id'),
			nome:rs.fieldByName('nome'),
			email:rs.fieldByName('email')
		});
		rs.next();
	}
	db.close();
	
	return users;
};
