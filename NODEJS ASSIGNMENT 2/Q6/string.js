var file=require("fs");
var arr=["akash","sagar" ,"vijay","amit"];

var add=function()
{
    for (ele of arr)
    {
       file.appendFile("file1.txt",ele+"|",function(err,data) 
       {
           if(err)
           console.log("ERROR: "+err);
          console.log("DATA ADDED SUCCESSFULLY ");
       });
    }
}
add();
