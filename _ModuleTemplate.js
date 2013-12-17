/*
 * _ModuleTemplate.js
 * Use as template for new modules
 * Replace "_ModuleTemplate" as module name
 * Alter core variables and methods
*/

var Base = window.Base || {};

(function(Base, $) {
	"use strict";
	
	Base._ModuleTemplate = (function(obj, customizaton) {
		
		/*
			Core Variables
		*/
		var $self,
			settings = {};
		
		/*
			Core Methods
		*/
		var init = function(obj, customization) {
			// define self object
			$self = obj;
			
			// combine customization
			if (customization !== undefined) {
				settings = $.extend({}, settings, customization);
			}
			
			// add to domReady stack
			
			// register publisher
			publisher();
			
			// register subscriber
			subscriber();
			
			// bind events
			bindEvents();
			
			// update
			update();
			
			getValue();
		},
		
		update = function(arg) {
			console.log('element update');
		},
		
		publisher = function() {
			
		},
		
		subscriber = function() {
			
		},
		
		bindEvents = function() {
			
		};
		
		/*
			Module Specific Methods
		*/
		
		/*
			Exposed Methods
		*/
		return {
			init: init,
			update: update
		}
	}());
	
	/*
	 * @constructor 
	 */
	Base.ContractElement.construct = function(obj, customization) {
		//console.log('construct element');
		Base.ContractElement.init(obj, customization);
	}
	
	/*
	 * initialize 
	 */
	Base.ContractElement.construct($('.BaseElement'), {});
	

}(Base, jQuery));
