// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var fugitive = $.args;

$.capturedDetails.title = fugitive.get('name');

function capture(e){
  fugitive.set('captured', 1);
  fugitive.save();
}
