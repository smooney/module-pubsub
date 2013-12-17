/*
 * Element.js
 * Implementation of a contract Element
*/

var Base = window.Base || {};

(function(Base, $) {
	"use strict";
	
	Base.ContractElement = (function(obj, customizaton) {
		
		var $self, $check, $price,
			settings = {
				checkSelector: '[type="checkbox"]',
				priceSelector: '[pattern="[0-9]*"]'
			};
		
		/*
			Core Methods
		*/
		var init = function(obj, customization) {
			// define self object
			$self = obj;
			$check = $(this.$self).children(Base.Settings.checkSelector);
			$price = $(this.$self).children(Base.Settings.priceSelector);
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
			/*
			 * Publish Contract:* Events 
			*/
		},
		
		subscriber = function() {
			
		},
		
		bindEvents = function() {
			
		};
		
		/*
			Module Specific Methods
		*/
		
		var getValue = function() {
			console.log(self);
		},
		
		publishValue = function() {
			/*
			 * Publish Contract:* Events 
			*/
			Base.publish('Contract:Update', getValue());
		};
		
		
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
	//Base.ContractElement.construct($('.BaseElement'), {});
	
	
	/*
	var settings = {};
	
	Base.ContractElement = function( $obj ) {
		settings = {
			checkSelector: '[type="checkbox"]',
			priceSelector: '[pattern="[0-9]*"]'
		};
		// merge this settings. ED.Settings overrides
		// settings defined above
		ED.Settings = $.extend( settings, ED.Settings );
		
		// private
		
		
		this.$self = $obj;
		this.$check = $(this.$self).children(Base.Settings.checkSelector);
		this.$price = $(this.$self).children(Base.Settings.priceSelector);
		this.init();
	}
	Base.ContractElement.prototype = {
		init: function() {
			console.log('Contract Element Init');
			console.log(Base.Settings)
			this.bindDomEvents();

		},
		bindDomEvents: function() {
			$(this.$self).children(Base.Settings.checkSelector).each(function() {
				
				$(this).on('click', function() {
					$.publish('BaseC.UpdateTotal');
				});
			});
			
			$(this.$self).children(Base.Settings.priceSelector).each(function() {
				$(this).on('focus blur', function() {
					$.publish('BaseC.UpdateTotal');
				});	
			});

		},
		selectElement: function() {
			
		},
		getPrice: function() {
			return parseInt(this.$price.val(), 10);
		},
		isSelected: function() {
			return this.$check.is(':checked');
		},
		validate: function() {
			return (parseInt(this.$price.val(), 10) > 0);
		}
	};*/

}(Base, jQuery));

