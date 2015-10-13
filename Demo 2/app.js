
(function(){

	var app = angular.module('gemStore',[]);

	app.controller('StoreController', function(){

		this.product=gem;	
	});
	var gem={

		name: 'Dodecahydron',
		price: '100',
		description: 'this is teh description for Dodecahydron lol .....',
	} 	 
})();