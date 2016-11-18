var xhr = Ti.Network.createHTTPClient();

xhr.onerror = function (e) {
  alert(e);
  // body...
};

xhr.onload = function () {
  var filmes = JSON.parse(this.responseText).Search;
  var rows = [];
  for (var i = 0; i < filmes.length; i++) {
    var filme = filmes[i];


    var row = Ti.UI.createTableViewRow();

    var view = Ti.UI.createView({
      width : Ti.UI.FILL,
      height : Ti.UI.SIZE,
      layout: 'horizontal'
    });

    var image = Ti.UI.createImageView({
      height: 96,
      width: 72,
      left: 5,
      top: 5,
      bottom: 5,
      image: filme.Poster
    });

    view.add(image);

    var viewDados = Ti.UI.createView({
      height: Ti.UI.FILL,
      width: Ti.UI.SIZE,
      layout: 'vertical'
    });

    var tituloLabel = Ti.UI.createLabel({
      text: filme.Title,
      top: 5,
      left: 5
    });

    var anoLabel = Ti.UI.createLabel({
      text: filme.Year,
      top: 5,
      left: 5
    });

    viewDados.add(tituloLabel);
    viewDados.add(anoLabel);
    view.add(viewDados);
    row.add(view);
    rows.push(row);

  }

  $.myTableView.data = rows;
};

xhr.open('GET', 'http://www.omdbapi.com/?s=batman&y=&plot=short&r=json');

xhr.send();
$.index.open();
