/*




*/

var Base = Base || {};

(function($) {
	// because javascript
	"use strict";
	
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
	};

	$(function() {
		
	});

}(jQuery));

