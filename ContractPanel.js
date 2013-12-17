/*
 * ContractPanel.js
 * Contract Info Panel. Displays total value of contract
*/

var Base = window.Base || {};

(function(Base) {
	// because javascript
	"use strict";
	
	Base.ContractPanel = (function() {
		
		var init = function() {
			console.log('panel init');
			
			// add to domReady stack
			
			// register publisher
			publisher();
			
			// register subscriber
			subscriber();
			
			// bind events
			bindEvents();
			
			// update
			update();
		},
		
		update = function(arg) {
			arg = arg || 'none';
			console.log('contract update: ' + arg);
		},
		
		publisher = function() {
			
		},
		
		subscriber = function() {
			/*
			 * Subscribe to Contract:* Events 
			*/
			Base.subscribe('Contract:Update', function(arg) {
				update(arg);
			});
		},
		
		bindEvents = function() {
			
		};
		
		return {
			init: init,
			update: update
		}	
	}());
	
	/*
	 * initialize 
	 */
	//Base.ContractPanel.init();
	
	/*
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
	*/

}(Base));

