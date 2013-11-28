/*




*/

var ED = ED || {};

(function($) {
	// because javascript
	"use strict";
	
	var settings = {};
	
	ED.Body = function() {
		
	};
	ED.Body.prototype = {
		updateTotal: function() {
			var i = 0,
				total = 0;
				
			for (i; i < ED.Elements.length; i++ ){
				if (ED.Elements[i].isSelected() ) {
					total += ED.Elements[i].getPrice();
				}
			}
			
			ED.ContractTotal.updateView(total)
			
		}
		
	};
	
	$(function() {
		ED.Main = new ED.Body();
		
		// override default settings
		settings = {
			environment: 'test'
		};
		ED.Settings = $.extend( ED.Settings, settings );
		
		ED.Pages = [];
		ED.Elements = [];
		
		$( '.EDPage' ).each(function() {
			ED.Pages.push( new ED.ContractPage( this ) );
		});
		
		$( '.EDElement' ).each(function() {
			ED.Elements.push( new ED.ContractElement( this ) );
		});
		
		ED.ContractTotal = new ED.ContractPanel( $('#ContractTotal') );
		
		// EDContract.UpdateTotal publishes each time an element field is updated
		$.subscribe( 'EDC.UpdateTotal', function(){
			ED.Main.updateTotal();
		});
		
		
	});

}(jQuery));

