var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
	if(req.url==="/welcome"){
		res.statusCode = 200;
		res.setHeader("Content-Type","text/plain");
		res.end('Welcome to Dominos!');
	}

	else if(req.url === "/contact"){

		res.statusCode = 200;
		res.setHeader("Content-Type","application/json");
		res.end('{"phone": "18602100000","email": "guestcaredominos@jublfood.com"}');
		//res.end("{'phone': '18602100000','email': 'guestcaredominos@jublfood.com'}");
	}

  else{
    res.statusCode = 404;
	res.write("404 Not Found");
    res.end();
  }
}

httpServer.listen(8081);

module.exports = httpServer;