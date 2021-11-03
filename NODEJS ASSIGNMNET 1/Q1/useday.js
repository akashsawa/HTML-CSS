var date=new Date();
t1=date.getHours();
module.exports.greet=function() 
{
if(t1>7 && t1<12)
  console.log("GOOD MORNING !!");
else if(t1>=12 && t1<=16)
  console.log("GOOD AFTERNOON !!");
else
  console.log("GOOD EVENING !!");
};