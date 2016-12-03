exports.log = function (mensagem) {
	Ti.API.info(mensagem);
};

exports.showAlert = function(mensagem) {
	alert(mensagem);
};
