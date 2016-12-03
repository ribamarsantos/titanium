var xhr = Ti.Network.createHTTPClient();
xhr.onerror = function(e) {
	alert(e);
};
xhr.onload = function() {
	Ti.API.info(this.responseText);
	Alloy.Collections.filmes.reset(JSON.parse(this.responseText).Search);
};
xhr.open('GET', 'http://www.omdbapi.com/?s=Batman&y=&plot=short&r=json');
xhr.send();



$.index.open();
