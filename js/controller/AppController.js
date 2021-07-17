app.controller("myCtrl", function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese","Cream"]; 
   
    $scope.addItem = function () {
    $scope.products.push($scope.addMe);
    }     
});