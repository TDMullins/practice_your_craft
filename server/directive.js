blogPost.$inject = ['$compile'];

function blogPost($compile) {
    return {
        restrict: 'E',
        replace: false,

        scope: {
	    content: '='
        },

        link: function($scope, element, attributes) {
	    $scope.$watch('content', function(content) {
        	element.html($compile(content)($scope));
    	    }, true);
        }
    };
}