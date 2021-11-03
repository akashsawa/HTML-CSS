var file=require("fs");
var f1=file.readFileSync("customer.json");
var a=JSON.parse(f1);

for(i=0;i<a.cust.length;i++)
    console.log("NAME: "+a.cust[i].name+"\n"+"CONTACT NO.: "+a.cust[i].ph);