/*




*/

var ED = ED || {};

(function($) {
	// because javascript
	"use strict";
	
	var settings = {};
	
	ED.ContractElement = function( $obj ) {
		settings = {
			checkSelector: '[type="checkbox"]',
			priceSelector: '[pattern="[0-9]*"]'
		};
		// merge this settings. ED.Settings overrides
		// settings defined above
		ED.Settings = $.extend( settings, ED.Settings );
		
		// private
		
		
		this.$self = $obj;
		this.$check = $(this.$self).children(ED.Settings.checkSelector);
		this.$price = $(this.$self).children(ED.Settings.priceSelector);
		this.init();
	}
	ED.ContractElement.prototype = {
		init: function() {
			console.log('Contract Element Init');
			console.log(ED.Settings)
			this.bindDomEvents();

		},
		bindDomEvents: function() {
			$(this.$self).children(ED.Settings.checkSelector).each(function() {
				
				$(this).on('click', function() {
					$.publish('EDC.UpdateTotal');
				});
			});
			
			$(this.$self).children(ED.Settings.priceSelector).each(function() {
				$(this).on('focus blur', function() {
					$.publish('EDC.UpdateTotal');
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
	};

	$(function() {
		
	});

}(jQuery));

