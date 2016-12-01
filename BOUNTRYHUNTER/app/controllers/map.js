// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var fugitive = $.args;

var Map = require('ti.map');

var fugitiveAnnotation = Map.createAnnotation({
  latitude: fugitive.get('capturedLat'),
  longitude: fugitive.get('capturedLong'),
  title: fugitive.get('name'),
  pincolor: Map.ANNOTATION_RED
});


var map = Map.createView({
  mapType: Map.NORMAL_TYPE,
  region:{
    latitude: fugitive.get('capturedLat'),
    longitude: fugitive.get('capturedLong'),
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  },
  animate: true,
  annotations: [fugitiveAnnotation]
});

$.map.add(map);
