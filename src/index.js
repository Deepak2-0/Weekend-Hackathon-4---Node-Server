var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  if(req.url==="/welcome"){
    res.status(200).write("Welcome to Dominos!");
    res.end();
  }

  else if(req.url === "/contact"){
    res.status(200).write("{phone: '18602100000',email: 'guestcaredominos@jublfood.com'}");
  }

  else{
    res.status(404).write(" 404 not found");
  }
}

httpServer.listen(8081);

module.exports = httpServer;