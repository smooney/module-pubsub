/*




*/

var Base = Base || {};

(function($) {
	// because javascript
	"use strict";
	
	
	Base.ContractPanel = function( $obj ) { 
		this.$Self = $( $obj );
	};
	
	Base.ContractPanel.prototype = {
		init: function() {
			this.bindDomEvents();
			
		},
		bindDomEvents: function() {
			// bind click on checkbox
			// bind change on each feild
		},
		updateView: function(value) {
			this.$Self.find('.value').html(value);
		},
		Subscribe: function(name, callback) {
			$.subscribe(name, callback)
		}
	};


	$(function() {
		
	});

}(jQuery));

