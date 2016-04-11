/**
 * Created by miguelplazas on 21/03/16.
 */

app.controller('CategoryCtrl',
    function ($scope, $mdDialog, $mdMedia, $location, $mdToast, Category) {

        $scope.title = 'Categorias';

        $scope.categories = Category.all();

        function updateCategories() {
            Category.all(function (data) {
                $scope.categories = data;
            });
        };

        $scope.rsCategory = {};

        $scope.goToCategory = function (rowCategory, ev) {

            console.log(rowCategory);


            $location.path('/category/show/').search({categoryId: rowCategory});

            //$location.path('/issue');
            console.log($location.path());
            //$scope.category = Category.get({id: rowCategory});

            /*
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'tpl/category/categories_show.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    category: $scope.category
                }
            });
            */

        };

        $scope.showDelete = function (rowCategory, ev) {

            var confirm = $mdDialog.confirm()
                .title('ADVERTENCIA!')
                .textContent('Desea eliminar la categoría "' + rowCategory.name + '"?')
                .ariaLabel('Eliminar categoría')
                .targetEvent(ev)
                .ok('Cancel')
                .cancel('Ok');
            $mdDialog.show(confirm).then(function() {
                console.log('Cancel delete')
            }, function() {
                deleteCategory(rowCategory.id);
            });
        };

        $scope.showAdd = function (ev) {

            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'tpl/categories_new.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    category: null
                }
            });

        };

        $scope.editCategory = function (rowCategory, ev) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'tpl/categories_edit.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    category: rowCategory
                }
            });

        };

        function DialogController($scope, $mdDialog, category) {
            $scope.category = category;
            $scope.hide = function () {
                $mdDialog.hide();
            };
            $scope.cancel = function () {
                $mdDialog.cancel();
            };
            $scope.answer = function (answer) {
                $mdDialog.hide(answer);
            };
            $scope.saveCategory = function (rsCategory) {
                var newRecord = new Category({category: rsCategory});
                newRecord.$save(function (resp, headers) {
                    updateCategories();
                    $mdDialog.hide();
                    $mdToast.show($mdToast.simple().textContent('Category was created!'));
                })
            };
            $scope.updateCategory = function (rsCategory) {
                var newRecord = new Category(rsCategory);
                newRecord.$update({id:rsCategory.category.id}, rsCategory);

                //updateCategories();
                $mdDialog.hide();
                $mdToast.show($mdToast.simple().textContent('Category was updated!'));

            };
        }

        function deleteCategory (id) {

            for (var i = 0, len = $scope.categories.length; i < len; i++) {
                if ($scope.categories[i].id === id) {

                    Category.delete({id: id});
                    $scope.categories.splice(i, 1);
                    $mdToast.show($mdToast.simple().textContent('Category was deleted!'));
                    break;
                }
            }
        }

        $scope.fields = Category.new();


    }
)

app.controller('CategoryShowCtrl',
    function ($scope, $routeParams, $controller, Category, IssueByCategory) {

        $controller('IssueCtrl', {$scope : $scope});

        var rsCategory = Category.get({id: $routeParams.categoryId }, function(data) {
            $scope.category = data;
        });

        $scope.issueCat = IssueByCategory.get({category: $routeParams.categoryId });
        $scope.title = rsCategory.name;

    }
)