var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  if(req.url==="/welcome"){
    //res.writeHead(200,"Welcome to Dominos!");
	res.writeHead(200);
	res.write(JSON.stringify("Welcome to Dominos!"));
    res.end();
  }

  else if(req.url === "/contact"){
    //res.writeHead(200,"{phone: '18602100000',email: 'guestcaredominos@jublfood.com'}");
	res.writeHead(200);
	res.write(JSON.stringify("{phone: '18602100000',email: 'guestcaredominos@jublfood.com'}"));
    res.end();
  }

  else{
    res.writeHead(404," 404 not found");
	res.write("404 Not Found");
    res.end();
  }
}

httpServer.listen(8081);

module.exports = httpServer;