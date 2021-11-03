var file=require("fs");
var f1=file.readFileSync("usebook.json");
var a=JSON.parse(f1);


for(i=0;i<a.cust.length;i++)
    file.appendFileSync("book.txt","BOOK NAME: "+a.cust[i].name+"\n"+"BOOK ID.: "+a.cust[i].id+"\n");