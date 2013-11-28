/*




*/

var Base = Base || {};

(function($) {
	// because javascript
	"use strict";
	
	var settings = {};
	
	Base.Body = function() {
		
	};
	Base.Body.prototype = {
		updateTotal: function() {
			var i = 0,
				total = 0;
				
			for (i; i < Base.Elements.length; i++ ){
				if (Base.Elements[i].isSelected() ) {
					total += Base.Elements[i].getPrice();
				}
			}
			
			Base.ContractTotal.updateView(total)
			
		}
		
	};
	
	$(function() {
		Base.Main = new Base.Body();
		
		// override default settings
		settings = {
			environment: 'test'
		};
		Base.Settings = $.extend( Base.Settings, settings );
		
		Base.Pages = [];
		Base.Elements = [];
		
		$( '.BasePage' ).each(function() {
			Base.Pages.push( new Base.ContractPage( this ) );
		});
		
		$( '.BaseElement' ).each(function() {
			Base.Elements.push( new Base.ContractElement( this ) );
		});
		
		Base.ContractTotal = new Base.ContractPanel( $('#ContractTotal') );
		
		// EDContract.UpdateTotal publishes each time an element field is updated
		$.subscribe( 'BaseC.UpdateTotal', function(){
			Base.Main.updateTotal();
		});
		
		
	});

}(jQuery));

