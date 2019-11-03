var app = angular.module('myApp', ['ngRoute']);

app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

    $routeProvider.when('/EmployeeList', { //Routing for show list of employee
        templateUrl: 'Views/EmployeeList.html',
        controller: 'EmployeeController'
    }).when('/AddEmployee', { //Routing for add employee
        templateUrl: 'Views/AddEmployee.html',
        controller: 'EmployeeController'
    })
        .when('/EditEmployee/:empId', { //Routing for geting single employee details
            templateUrl: 'Views/EditEmployee.html',
            controller: 'EmployeeController'
        })
        .when('/DeleteEmployee/:empId', { //Routing for delete employee
            templateUrl: 'Views/DeleteEmployee.html',
            controller: 'EmployeeController'
        })
        .otherwise({ //Default Routing
            controller: 'EmployeeController'
        })
}]);