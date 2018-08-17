app.service('DataFactory',function(){
	this.empdata=[];
	this.registerEmp=function (name,id){
		var emp={};
		emp.name=name;
		emp.empid=id;
		emp.age="";
		emp.mobile="";
		emp.address="";
		emp.project="";
		this.empdata.push(emp);
		return true;
	}

	this.delete=function(id){
		console.log(id);
		for(var i=0;i<this.empdata.length;i++){
			if(id==this.empdata[i].empid){
				console.log(i);
				this.empdata.splice(i,1);
				break;
			}
		}
		console.log(this.empdata);
		return this.empdata;
	}

	this.setData=function(data){
		for(var i=0;i<this.empdata.length;i++){
			if(this.empdata[i].empid==data.empid){
				this.empdata[i].age=data.age;
				this.empdata[i].mobile=data.mobile;
				this.empdata[i].address=data.address;
				this.empdata[i].project=data.project;
				break;
			}
		}
		return this.empdata;
	}

	this.getAllData=function(){
		return this.empdata;
	}

	this.getData=function(id){
		for(var  i=0;i<this.empdata.length;i++){
			if(this.empdata[i].empid==data.empid){
				return this.empdata[i]
			}
		}
	}


});