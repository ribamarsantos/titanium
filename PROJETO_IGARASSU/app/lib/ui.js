exports.createNavigationWindow = function(args){
  Ti.API.info(args);
  if ( OS_IOS){
  
    args.modal = true;
    return Ti.UI.iOS.createNavigationWindow(args);
  }else{
    return args.window;
  }
}
