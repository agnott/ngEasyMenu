angular.module('demoModule',[
	'ngEasyMenu'
])
.controller('demoController', ['$scope', function($scope){
	var self = this;
	console.log(self);
	
	self.menuConfig = {
		classList: 'class-1 class-2',
		items: [{
			text: 'Link 1',
			classList: 'class-3'
		},{
			text: 'Link 2'
		}]
	}
	
}]);