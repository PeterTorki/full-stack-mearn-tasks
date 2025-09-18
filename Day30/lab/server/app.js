const http = require("http");
const fs = require("fs");
const PORT = 7000;

const handleRouteBasedOnFile = require("../utils/handleRouteBasedOnFile.module.js");

http
  .createServer((req, res) => {
    switch (req.method) {
      case "GET":
        handleRouteBasedOnFile(req, res);
        break;
      case "POST":
        // write what came from url to a file called data.json
        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });
        req.on("end", () => {
          const parsedBody = new URLSearchParams(body);
          const name = parsedBody.get("name");
          const mobile = parsedBody.get("mobile");
          const address = parsedBody.get("address");
          const email = parsedBody.get("email");
          const userData = { name, mobile, address, email };
          fs.appendFile("data.json", JSON.stringify(userData, null, 2), (err) => {
            if (err) {
              res.statusCode = 500;
              res.setHeader("Content-Type", "text/plain");
              res.write("Internal Server Error");
              res.end();
            }
            res.statusCode = 302;
            res.setHeader("Location", "/welcome.html");
            res.end();
          });
        });

        break;

      default:
        break;
    }
  })
  .listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
