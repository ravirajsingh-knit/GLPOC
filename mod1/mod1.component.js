
angular.module("mod1").component('mod1Display',{
    templateUrl:"mod1/mod1.template.html",

    controller:[ '$scope','DataFactory',
    function($scope,DataFactory){
        $scope.editMode=false;
        $scope.employes=angular.copy(DataFactory.getNames());
    
       console.log($scope.employes);
       $scope.changeMode=function(){
        $scope.editMode=!$scope.editMode;
       }
       $scope.clickedCancel=function(id){
        $scope.changeMode();
        $scope.employe=angular.copy(DataFactory.getUserData(id));
        console.log($scope.employe);
       }
       $scope.clickedSubmit=function(data){
        $scope.changeMode();
        $scope.employe=angular.copy(DataFactory.setData(data));
        console.log($scope.employe);
       }
    
       $scope.userData=function(id){
        $scope.editMode=false;
        $scope.employe=angular.copy(DataFactory.getUserData(id));
        console.log($scope.employe);
       }
    }
    ]  
});



