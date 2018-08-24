app.controller('mod2Ctrl',['$scope','DataFactory',function($scope,DataFactory) {
    $scope.employes=angular.copy(DataFactory.getAllData());
    $scope.showdata=0;
    $scope.editdata=0;
    $scope.delete=function(id){
        console.log("delete "+id);
        $scope.employes=DataFactory.delete(id);
        console.log($scope.employes);
    };
    $scope.edit=function(id){
        $scope.employes=angular.copy(DataFactory.getAllData());
        if($scope.editdata==id){
            $scope.showdata=0;
            $scope.editdata=0;
        }
        else{
            $scope.showdata=0;
            $scope.editdata=id;
        }
    };
    $scope.viewData=function(id){
        $scope.employes=angular.copy(DataFactory.getAllData());
        if($scope.showdata==id){
            $scope.editdata=0;
            $scope.showdata=0;
        }
        else{
            $scope.editdata=0;
            $scope.showdata=id;
        }
    };


    $scope.editData=function(data){
      //  console.log(data);
        DataFactory.setData(data)
        $scope.employes=angular.copy(DataFactory.getAllData());
        $scope.showdata=data.empid;
        $scope.editdata=0;
     //   console.log(employes);
    }


}]);