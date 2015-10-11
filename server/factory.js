angular.module("myApp")
    .factory('BlogService', BlogService);

BlogService.$inject = ['$http'];

function BlogService($http) {
    var blogService = {};

    blogService.getBlogPost = function() { 
	return $http.get('/templates/blog-post.html')
            .success(function(data, status, headers, config) {
	        return data
            })
            .error(function(data, status, headers, config) {
	        return "Oops! Sorry, this blog post could not be loaded."
            });
	}

    return blogService;
}