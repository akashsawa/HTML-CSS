 

module.exports.factorial=function()
{
    var fact=1; i=arguments[0];
    while(i>=1)
    {
        fact=fact*i;
        i--;
    }
    return fact;
}

module.exports.prime=function()
{ 
    var a=2;
    i=arguments[0];
    for(a=2;a<i;a++)
    {
        if(i%a==0)
        {
          flag=1;
          break;
        }
        else flag=0;
    }
    return flag;
}

module.exports.table=function()
{
    var t=1; i=arguments[0];
    while(t<=10)
    {
        m=t*i;
        console.log("TABLE: \n"+m+"\n")
        t++;
    }
}