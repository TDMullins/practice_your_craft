angular.module("myApp")
    .directive('prettyPrint', prettyPrint);

function prettyPrint() {
        return {
            restrict: 'C',
            replace: false,
           
            scope: {},

            link: function($scope, element, attributes) {
                element.html(prettyPrintOne(element.html()));
            }
    };
};