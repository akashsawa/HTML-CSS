var app=require("./mymodule.js");
var a=7;
console.log("FACTORIAL: "+app.factorial(a));
if(app.prime(a)==1)
    console.log(a+" IS NOT A PRIME NO.");
else
    console.log(a+" A PRIME NO.");
app.table(a);