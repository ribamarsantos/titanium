var file = Ti.Filesystem.getFile(
   Ti.Filesystem.applicationDataDirectory,
  'teste.txt'
);

function doClick(e) {
    var conteudo = file.read().text;
  //  alert(conteudo);
    var linhas = conteudo.split('\n');
    Ti.API.info(linhas[0]);

    // $.textArea.value = conteudo;
}



file.write('Unibratec\n', true);



$.index.open();
