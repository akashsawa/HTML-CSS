var file=require("fs");
file.readFile("empinfo.txt",function(err,data)
{   
   var id="4598";
    if(err)
       console.log("ERROR: "+err);
    var a=data.toString().split("\n");
    for (var i=0;i<a.length;i++)
    {
      var b=data.toString().split(":");
      if(id==b[i+1])
       {
         file.appendFile("resigned.txt",b[0]+":"+a[1]+"\n"+a[2]+":"+a[3]+"\n"+a[4]+":"+a[5]+"\n",function(err)
           {
            if(err)
               console.log("ERROR: "+err);
            console.log("EMPLOYEE ADDED");
           });
         break;
       }
    }
 
  
       
});
//console.log(f1.toString());
