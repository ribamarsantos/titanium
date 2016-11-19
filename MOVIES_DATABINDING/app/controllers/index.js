var xhr = Ti.Network.createHTTPClient();

xhr.onerror = function (e) {
  alert(e);
  // body...
};
xhr.onload = function () {
  Alloy.Collections.filmes.reset(JSON.parse(this.responseText).Search);
};

xhr.open('GET', 'http://www.omdbapi.com/?s=batman&y=&plot=short&r=json');

xhr.send();

$.index.open();

$.video.play();
