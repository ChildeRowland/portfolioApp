'use strict';

angular.module('portfolioAppApp')


.directive('cmCodeEx', function () {
	return {
		templateUrl: 'app/main/partials/code.html',
		scope: false
	}
})

.directive('cmDesignEx', function () {
	return {
		templateUrl: 'app/main/partials/design.html',
		scope: false
	}
})

.directive('cmAboutEx', function () {
	return {
		templateUrl: 'app/main/partials/about.html',
		scope: false
	}
});