/**
 * Created by miguelplazas on 23/03/16.
 */

app.controller('IssueCtrl',
    function ($scope, Issue) {
        $scope.title = 'Issues';

        $scope.issues = Issue.all();



    }
)