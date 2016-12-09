exports.createNavigationWindow = function(args) {
    Ti.API.info(args);
    args.modal = true;
    return Ti.UI.iOS.createNavigationWindow(args);
};