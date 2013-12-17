/*
 * _ModuleTemplate_Alt.js
 * Use as template for new modules (alternate version)
 * Replace "_ModuleTemplate" as module name
 * Alter core variables and methods
*/

var Base = window.Base || {};

(function(Base, $) {
	"use strict";
	
	/*
		Core Variables
	*/
	var $self,
		settings = {};
	
	Base.ContractPage = function( $obj ) { 
		settings = {
			
		};
		// merge this settings. ED.Settings overrides
		// settings defined above
		Base.Settings = $.extend( settings, Base.Settings );
		
		// define self object
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

}(Base, jQuery));

