module.exports.stringoperation=
{
    Uppercase:function(name)
    {
        console.log(name.toUpperCase());
    },

    palin:function(name)
    {
        var str="";
        for(i=name.length-1;i>=0;i--)
        { 
           str=str+name[i];
        }
        if(name==str)
           console.log("STRING IS PALINDROME ");
        else
           console.log("STRING IS NOT PALINDROME ");
    },
    www:function()
    {
        str=" ";var count=0;
        var arr=["www.mini.com","www.asus.com","www.msi.com","in.en.gov.in"];

        for(i=0;i<arr.length;i++)
        { 
            var a=arr[i].split(".");
            //console.log(a);
            if(a[0]=="www")
               count=count+1;
            
        }
        console.log(count);
    }
}