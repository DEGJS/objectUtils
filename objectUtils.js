let objectUtils = {

	extend: function(out) {
		out = out || {};
	    for (var i = 1; i < arguments.length; i++) if (arguments[i]) for (var key in arguments[i]) arguments[i].hasOwnProperty(key) && (out[key] = arguments[i][key]);
	    	return out;
	},

	convertToArray: function(out) {
		if (!Array.isArray(out)) {
			return [out];
		} else {
			return out;
		}
	}

};

export default objectUtils;