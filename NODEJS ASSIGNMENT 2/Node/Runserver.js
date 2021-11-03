var http = require("http");
function f1(req,res)
{
   res.writeHead(200,{"Content-Type":"text.html"});
   res.write("<h1>HELLO AKASH");
   res.end();

}
var server=http.createServer(f1);
server.listen(4000 , "localhost");
console.log("SERVER IS LISTENING");
