var http=require("http");
var url=require("url");
var file=require("fs");
var server=http.createServer(processreq);
server.listen(3002,"localhost");
function processreq(req,res)
{
    if(req.url=="/")
    {
        file.readFile("usebyclient.html",function(err,data)
        {
            res.writeHead(200,{"content-type":"text/html"});
            res.write(data);
            //fs.createReadStream("./usebyclient.js").pipe(res);
            res.end();
        });
    }   
    
    else
    {
        res.writeHead(404,{"content-type":"text/plain"});
        res.write("404 ERROR");
    }
}