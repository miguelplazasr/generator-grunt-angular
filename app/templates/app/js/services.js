/**
 * Created by miguelplazas on 19/03/16.
 */

var domain = 'http://localhost:8000';

/* Category */
app.factory('Category', function($resource) {

    var url = domain + '/api/categories/';

    var category = $resource(url + ':id', {
    	id: '@id', category: '@category'
    }, 
	{
        all: {
            method : 'get',
            isArray: true
        },
        save: {
            method : 'POST',
            transformRequest: function(data, headers){
                headers = angular.extend({}, headers, {'Content-Type': 'application/json'});
                return angular.toJson(data); // this will go in the body request
            }
        },
		new: {
			method: 'GET',
			url: url + 'new.json'
		},
        delete: {
            method: 'DELETE',
            params: {
                id: '@id'
            }
        },
        get: {
            method: 'GET',
            params: {
                id: '@id'
            }
        },
        update: {
            method: 'PUT',
            params: {
                id: '@id'
            },
            isArray: false,
            transformRequest: function(data, headers){
                headers = angular.extend({}, headers, {'Content-Type': 'application/json'});
                return angular.toJson(data); // this will go in the body request
            }
        }
    });

    return category;

});

/* Issue */

app.factory('Issue', function($resource) {

    var url = domain + '/api/issues/';

    var category = $resource(url + ':id', {
            id: '@id'
        },
        {
            all: {
                method : 'get',
                isArray: true
            },
            save: {
                method : 'POST',
                transformRequest: function(data, headers){
                    headers = angular.extend({}, headers, {'Content-Type': 'application/json'});
                    return angular.toJson(data); // this will go in the body request
                }
            },
            new: {
                method: 'GET',
                url: url + 'new.json'
            },
            delete: {
                method: 'DELETE',
                params: {
                    id: '@id'
                }
            },
            update: {
                method: 'PUT',
                params: {
                    id: '@id'
                },
                isArray: false,
                transformRequest: function(data, headers){
                    headers = angular.extend({}, headers, {'Content-Type': 'application/json'});
                    return angular.toJson(data); // this will go in the body request
                }
            }
        });

    return category;

});



app.factory('IssueByCategory', function($resource) {

    var url = domain + '/api/issues/:category/category';

    var category = $resource(url, {
            category: '@category'
        },
        {
            get: {
                method: 'GET',
                params: {
                    category: '@category'
                },
            }
        });

    return category;

});