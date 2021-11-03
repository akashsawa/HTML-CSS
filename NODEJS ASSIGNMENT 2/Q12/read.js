var file=require("fs");
content=file.readFileSync("file.txt");
for(i=0;i<content.toString().split("\n").length;i++)
{
    console.log((i+1)+". "+content.toString().split("\n")[i]);   
}

   // console.log("1."+content.toString().split(" "));
//console.log(content);//