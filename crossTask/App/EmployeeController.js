app.controller("EmployeeController", ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
    $scope.ListOfEmployee;
    $scope.Status;

    $scope.Close = function () {
        $location.path('/EmployeeList');
    }

    //Get all employee and bind with html table
    $http.get("api/Employees/GetEmployees").success(function (data) {
        $scope.ListOfEmployee = data;

    })
        .error(function (data) {
            $scope.Status = "data not found";
        });

    //Add new employee
    $scope.Add = function () {
        var employeeData = {
            Name: $scope.Name,
            Address: $scope.Address,
            DOB: $scope.DOB,
            // DepartmentID: $scope.DepartmentID
        };
        debugger;
        $http.post("api/Employees/PostEmployee", employeeData).success(function (data) {
            $location.path('/EmployeeList');
        }).error(function (data) {
            console.log(data);
            $scope.error = "Something wrong when adding new employee " + data.ExceptionMessage;
        });
    }

    //Get the specified employee record

    if ($routeParams.empId) {
        $scope.Id = $routeParams.empId;

        $http.get('api/Employees/GetEmployee/' + $scope.Id).success(function (data) {
            $scope.Name = data.Name;
            $scope.Address = data.Address;
            $scope.DOB = data.DOB
            //$scope.DepartmentID = data.DepartmentID
        });

    }

    //Update the employee records
    $scope.Update = function () {
        debugger;
        var employeeData = {
            EmployeeID: $scope.Id,
            Name: $scope.Name,
            Address: $scope.Address,
            DOB: $scope.DOB
            //DepartmentID: $scope.DepartmentID
        };
        if ($scope.Id > 0) {

            $http.put("api/Employees/PutEmployee/", employeeData).success(function (data) {
                $location.path('/EmployeeList');
            }).error(function (data) {
                console.log(data);
                $scope.error = "Something wrong when adding updating employee " + data.ExceptionMessage;
            });
        }
    }


    //Delete the selected employee from the list
    $scope.Delete = function () {
        if ($scope.Id > 0) {

            $http.delete("api/Employees/DeleteEmployee/" + $scope.Id).success(function (data) {
                $location.path('/EmployeeList');
            }).error(function (data) {
                console.log(data);
                $scope.error = "Something wrong when adding Deleting employee " + data.ExceptionMessage;
            });
        }

    }
}]);