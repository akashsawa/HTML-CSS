var http = require('http');
var url = require('url');
var fs = require('fs');

function process_req(req, res) {
	console.log(req.url);
  if (req.method == 'GET' && req.url == '/') {
	  fs.readFile('form.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
   });
  }
  else if(req.method == 'GET' && req.url.substring(0,10) == '/rectangle'){
     var q = url.parse(req.url, true);
	   var qdata = q.query;
     console.log(qdata.length+" "+qdata.width); 
     var l = parseInt(qdata.length);
     var b = parseInt(qdata.width);
   
     var rad = l * b;
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.write("The area is : " + rad);
     res.end();
   }
  
   else
	   res.end("not found");
}
var server = http.createServer(process_req)
server.listen(3000);
console.log('server listening on localhost:3000');
