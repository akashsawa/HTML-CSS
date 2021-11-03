exports.add=function(a,b)
{
    return a+b;
}
exports.sub=function(a,b)
{
    return a-b;
}
exports.div=function(a,b)
{

    return (parseFloat(a/b));
}
exports.mul=function(a,b)
{
    return a*b;
}
exports.sum=function()
{
    var sum=0; var i=0;
    while(i<arguments.length)
    {
        sum=sum+arguments[i];
        i++;
    }
    return sum;
}
exports.sq=function(a,b)
{
    return a*a;
}