// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var place = $.args;
var Map = require('ti.map');

var placeAnnotation = Map.createAnnotation({
	latitude:place.placelat,
	longitude:place.placelong,
	title:place.place_name,
  subtitle: place.phone,
	pincolor:Map.ANNOTATION_RED
});

var map = Map.createView({
	mapType:Map.NORMAL_TYPE,
	region:{
    latitude:place.placelat,
  	longitude:place.placelong,
		latitudeDelta:0.01,
		longitudeDelta:0.01
	},
	animate:true,
	annotations:[placeAnnotation]
});
$.mapPlace.title   = place.place_name;
$.mapPlace.add(map);
