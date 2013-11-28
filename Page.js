/*




*/

var ED = ED || {};

(function($) {
	// because javascript
	"use strict";
	
	var settings = {};
	
	ED.ContractPage = function( $obj ) { 
		settings = {
			
		};
		// merge this settings. ED.Settings overrides
		// settings defined above
		ED.Settings = $.extend( settings, ED.Settings );
		
		this.$Self = $( $obj );
	};
	
	ED.ContractPage.prototype = {
		init: function() {
			this.bindDomEvents();
			
		},
		bindDomEvents: function() {
			
		}
	};


	$(function() {
		
	});

}(jQuery));

