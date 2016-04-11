/**
 * Created by miguelplazas on 19/03/16.
 */
app.controller('MainCtrl',[
	'$scope',
	'$mdBottomSheet',
	'$mdSidenav',
	'$mdDialog',
	function ($scope, $mdBottomSheet, $mdSidenav, $mdDialog){		
		
		$scope.toggleSidenav = function(menuId) {
			$mdSidenav(menuId).toggle();
		};
		
		$scope.menu = [
			{
				link: '/#/category',
				title: 'Categories',
				icon: 'dashboard'
			}
		];
	}
]);
