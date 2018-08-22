app.controller('mod1Ctrl',['$scope','DataFactory',function($scope,DataFactory) {
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
}]);

app.controller('mod2Ctrl',['$scope','DataFactory',function($scope,DataFactory) {
    $scope.employes=DataFactory.getAllData();
    $scope.showdata=0;
    $scope.editdata=0;
    $scope.delete=function(id){
        console.log("delete "+id);
        $scope.employes=DataFactory.delete(id);
        console.log($scope.employes);
    };
    $scope.edit=function(id){
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
        $scope.employes=DataFactory.setData(data);
        $scope.showdata=data.empid;
        $scope.editdata=0;
     //   console.log(employes);
    }


}]);
app.controller('mod3Ctrl',[ '$scope','$timeout','DataFactory',function($scope,$timeout,DataFactory){

    //$scope.employes=DataFactory.getAllData();
     $scope.showMessage = true;

    $scope.getMessage = function() {
      $scope.showMessage = false;
      $timeout(function() {
         $scope.showMessage = true;
      }, 3000);
      
    };
    $scope.formSubmit=function(){
       // $scope.show=false;
        if($scope.username==undefined||$scope.empid==undefined)
            return false;
        //console.log($scope.us);
        if(DataFactory.registerEmp($scope.username,$scope.empid)){
           $scope.getMessage();
        }
        //$scope.employes.push(angular.copy($scope.form1));
        $scope.username="";
        $scope.empid="";
        $scope.myForm.myName.$setPristine();
        $scope.myForm.myName.$setUntouched();
       // $scope.myForm.myName.blur();
        $scope.myForm.myEmpid.$setPristine();
        $scope.myForm.myEmpid.$setUntouched();
     //   $scope.myForm.myEmpid.blur();
     //   $scope.myForm.$setPristine();
      //   $scope.myForm.$setUntouched();

    };


}]);
