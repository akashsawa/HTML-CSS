var f1=require("fs");
f1.readFile("file.txt",function(err,data)
{
    if(err)
        console.log(err);
    else
    {
    var arr=data.toString().split("\n");
    var tot=0;
    for(i=0;i<arr.length;i++)
    {

       var newarr=arr[i].split(":");
       var name=newarr[0];
       var maths=parseInt(newarr[1]);
       var science=parseInt(newarr[2]);
       var tot=maths+science;
       var percent=(tot/200)*100;
       if(percent >= 90)
       {
           console.log(name+"- "+tot+"- "+"A");
       }
       else if(percent<90 && percent>70)
       {
           console.log(name+"- "+tot+" -"+"B");
       }
       else
       {
        console.log(name+"- "+tot+"- "+"C");
        }
       
    }
}
        
        

    
});
