exports.definition = {
	config: {
		columns:{
			"id"              : "integer",
			"place_type"      : "integer",
			"place_name" 			: "text",
			"description_pt"	: "text",
			"description_eng"	: "text",
			"description_esp"	: "text",
			"price" 					: "real",
			"address" 				: "text",
			"district"        : "text",
			"phone"   				: "text",
			"photo"						: "text",
			"placelat"				: "real",
			"placelong" 			: "real",
			"favorite"        : "integer"
		},
		adapter: {
			type: "sql",
			collection_name: "places"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here

			// For Backbone v1.1.2, uncomment the following to override the
			// fetch method to account for a breaking change in Backbone.
			/*
			fetch: function(options) {
				options = options ? _.clone(options) : {};
				options.reset = true;
				return Backbone.Collection.prototype.fetch.call(this, options);
			}
			*/
		});

		return Collection;
	}
};
