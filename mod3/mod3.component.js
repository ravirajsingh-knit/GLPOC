angular.module("mod3").component("mod3Display",{
    templateUrl:"mod3/mod3.template.html",
    controller:[
        '$scope','$timeout','DataFactory',function($scope,$timeout,DataFactory){

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
        
            };
        
        
        }
    ]
});




// var app3=angular.module('app3',[]);
// app3.controller('mod3Ctrl',[ '$scope','$timeout','DataFactory',function($scope,$timeout,DataFactory){

//     //$scope.employes=DataFactory.getAllData();
//      $scope.showMessage = true;

//     $scope.getMessage = function() {
//       $scope.showMessage = false;
//       $timeout(function() {
//          $scope.showMessage = true;
//       }, 3000);
      
//     };
//     $scope.formSubmit=function(){
//        // $scope.show=false;
//         if($scope.username==undefined||$scope.empid==undefined)
//             return false;
//         //console.log($scope.us);
//         if(DataFactory.registerEmp($scope.username,$scope.empid)){
//            $scope.getMessage();
//         }
//         //$scope.employes.push(angular.copy($scope.form1));
//         $scope.username="";
//         $scope.empid="";
//         $scope.myForm.myName.$setPristine();
//         $scope.myForm.myName.$setUntouched();
//        // $scope.myForm.myName.blur();
//         $scope.myForm.myEmpid.$setPristine();
//         $scope.myForm.myEmpid.$setUntouched();

//     };


// }]);
