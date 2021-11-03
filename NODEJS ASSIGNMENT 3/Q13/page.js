var http=require("http");
var url=require("url");
var file=require("fs");
var server=http.createServer(processreq);
server.listen(3000,"localhost");
function processreq(req,res)
{
    if(req.method=="GET" && req.url=="/")
    {
        file.readFile("welcome.html",function(err,data)
        {
            res.writeHead(200,{"content-type":"text/html"});
            res.write("HI GO TO WELCOME.HTML ");
            res.end();
        });
    } 
    else if(req.method=="GET" && req.url=="/welcome.html")
    {
        file.readFile("welcome.html",function(err,data)
        {
            res.writeHead(200,{"content-type":"text/html"});
            res.write(data);
            res.end();
        });
    }  
    else
    {
        res.writeHead(404,{"content-type":"text/plain"});
        res.write("404 ERROR");
    }
}