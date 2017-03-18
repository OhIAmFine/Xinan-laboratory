var http=require("http");
http.createServer(function(req,res){
	res.writeHead(200,{"content-Type":"text/html"});
	res.write("<p>服务器NODE</p>");
	res.end("<h2>搭建服务器:端口在1122</h2>");
	
}).listen(1122);