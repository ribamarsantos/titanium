var fugitive = $.args;

$.fugitiveDetails.title = fugitive.get('name');

function capture(e){
  fugitive.set('captured', 1);
  fugitive.save();
  $.fugitiveDetails.close();
}

function remove(){
  fugitive.destroy();
  $.fugitiveDetails.close();
}
