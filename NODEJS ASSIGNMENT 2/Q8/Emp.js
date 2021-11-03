var file=require("fs");
function Employee(empid,ename,salary)
{
    this.empid=empid;
    this.ename=ename;
    this.salary=salary;
}
var empl=[];
var emp1=new Employee(1001,"akash",10000);
var emp2=new Employee(1002,"sagar",20000);
var emp3=new Employee(1003,"amit",30000);
var emp4=new Employee(1004,"pranit",40000);

var emp=[emp1,emp2,emp3,emp4];

for(i=0;i<emp.length;i++)
{
    var a=emp[i].empid;
    var b=emp[i].ename;
    var c=emp[i].salary;
    file.appendFileSync("newemp.txt",a+":"+b+":"+c+"\n",function(err)
    {
        if(err)
            console.log("ERROR: "+err);
        else
            console.log("ADDED SUCCESSFULLY ");
    });

}
