function add(){
  var fugitive = Alloy.createModel('fugitive',{
    name: $.fugitiveTextField.value,
    captured: 0,
    capturedLat: 0,
    capturedLong: 0

  });
  fugitive.save();
  Alloy.Collections.fugitives.fetch();
  close();
}

function close(){
  if ( OS_IOS){
    $.navWindow.close();
  }else{
    $.addFugitive.close();
  }
}
