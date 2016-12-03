var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Collections.temperature = new Backbone.Collection();

Alloy.Collections.places = Alloy.createCollection("place");

Alloy.createController("index");