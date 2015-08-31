angular.module('ngEasyMenu')
.directive('ngEasyMenu', [function(){
	return {
		restrict: 'E',
		scope: {
			config: '=ngEasyMenuConfig'
		},
		bindToController: true,
		controller: function($scope){
			var self = this;
			console.log(self);
			
		},
		controllerAs: 'ngEM',
		templateUrl: 'ngEasyMenu/ngEasyMenu.template.html'
	}
}]);