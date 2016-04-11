/**
 * Created by miguelplazas on 19/03/16.
 */
"use strict";

var app = angular.module('veedorApp',
    [
        'ngMaterial',
        'ngMdIcons',
        'ngRoute',
        'ngResource',
    ]);

/* Routes Configuration */
app.config(function ($routeProvider){
    $routeProvider
		.when('/', {
			controller: "MainCtrl"
		})
        .when('/category', {
            controller: "CategoryCtrl",
            templateUrl: "tpl/category/categories_index.html"
        })
		.when('/category/new', {
			controller: "CategoryCtrl",
			templateUrl: "tpl/category/categories_new.html"
		})
        .when('/category/show/:categoryId', {
            controller: "CategoryShowCtrl",
            templateUrl: "tpl/category/categories_show.html"
        })
        .when('/issue', {
            controller: "IssueCtrl",
            templateUrl: "tpl/issue/issue_index.html"
        })
        .when('/issue/new', {
            controller: "IssueCtrl",
            templateUrl: "tpl/issue/issue_new.html"
        })
        .otherwise({
            redirectTo: '/'
        });
});

/* Theming Configuration */
app.config(function($mdThemingProvider){
	$mdThemingProvider.theme('default')
	.primaryPalette('indigo', {
            'default': '800'
        })
	.accentPalette('amber', {
            'default': '500'
        })
})