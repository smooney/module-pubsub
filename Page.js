/*




*/

var Base = Base || {};

(function($) {
	// because javascript
	"use strict";
	
	var settings = {};
	
	Base.ContractPage = function( $obj ) { 
		settings = {
			
		};
		// merge this settings. ED.Settings overrides
		// settings defined above
		Base.Settings = $.extend( settings, Base.Settings );
		
		this.$Self = $( $obj );
	};
	
	Base.ContractPage.prototype = {
		init: function() {
			this.bindDomEvents();
			
		},
		bindDomEvents: function() {
			
		}
	};


	$(function() {
		
	});

}(jQuery));

