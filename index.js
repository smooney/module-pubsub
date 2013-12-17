/*
 * index.js
 * Scripts related to index.html
 */

var Base = window.Base || {};

$(document).ready(function() {
	
	Base.ContractPanel.init();
	
	//Base.ContractElement.init();
	// elements
	$('.BaseElement').each(function() {
		
		Base.ContractElement.construct(this, {});
	});
	
});