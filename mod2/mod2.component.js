angular.module('mod2').component('mod2Display',{
    templateUrl:'mod2/mod2.template.html',
    controller:[ '$scope', 'DataFactory',
    function($scope,DataFactory){
        var status=[];
        $scope.employes=angular.copy(DataFactory.getAllData());
        for(var i=0;i<$scope.employes.length;i++){
            status.push(0);
            $scope.employes[i].status=0;
        }

        $scope.delete=function(id){
            console.log("delete "+id);
            DataFactory.delete(id);
            for(var i=0;i<$scope.employes.length;i++){
                if($scope.employes[i].empid==id){
                    $scope.employes.splice(i,1);
                    break;
                }
            }
            console.log($scope.employes);
        };

        $scope.edit=function(id){
            var employe=angular.copy(DataFactory.getUserData(id));
            for(var i=0;i<$scope.employes.length;i++){
                if($scope.employes[i].empid==id){
                    $scope.employes[i]=angular.copy(employe);
                    $scope.employes[i].status=2;
                    status[i]=2;
                }
                
            }
        };


        $scope.viewData=function(id){
            var employe=angular.copy(DataFactory.getUserData(id));
            for(var i=0;i<$scope.employes.length;i++){
                if($scope.employes[i].empid==id){
                    $scope.employes[i]=angular.copy(employe);
                    if(status[i]==1){
                        $scope.employes[i].status=0;
                        status[i]=0;
                    }
                    else{
                        $scope.employes[i].status=1;
                        status[i]=1;
                    }
                }
            }
        };

        $scope.editData=function(data){
            //  console.log(data);
              DataFactory.setData(data)
              var employe=angular.copy(DataFactory.getUserData(data.empid));
            for(var i=0;i<$scope.employes.length;i++){
                if($scope.employes[i].empid==data.empid){
                    $scope.employes[i]=angular.copy(employe);
                    $scope.employes[i].status=1;
                    status[i]=1;
                }
             }

          }








        // $scope.showdata=0;
        // $scope.editdata=0;
        
        // $scope.edit=function(id){
        //     $scope.employes=angular.copy(DataFactory.getAllData());
        //     if($scope.editdata==id){
        //         $scope.showdata=0;
        //         $scope.editdata=0;
        //     }
        //     else{
        //         $scope.showdata=0;
        //         $scope.editdata=id;
        //     }
        // };
        // $scope.viewData=function(id){
        //     $scope.employes=angular.copy(DataFactory.getAllData());
        //     if($scope.showdata==id){
        //         $scope.editdata=0;
        //         $scope.showdata=0;
        //     }
        //     else{
        //         $scope.editdata=0;
        //         $scope.showdata=id;
        //     }
        // };
    
    
        // $scope.editData=function(data){
        //   //  console.log(data);
        //     DataFactory.setData(data)
        //     $scope.employes=angular.copy(DataFactory.getAllData());
        //     $scope.showdata=data.empid;
        //     $scope.editdata=0;
        //  //   console.log(employes);
        // }
    
    }
    ]
});
