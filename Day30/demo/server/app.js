const http = require("http");
const fs = require("fs");
const PORT = 5050;

let mainHtml = "";
fs.readFile("../client/pages/index.html", (err, data) => {
  err ? console.log(err) : (mainHtml = data.toString());
});
let profileHtml = "";
fs.readFile("../client/pages/profile.html", (err, data) => {
  err ? console.log(err) : (profileHtml = data.toString());
});

let script = "";
fs.readFile("../client/scripts/script.js", (err, data) => {
  err ? console.log(err) : (script = data.toString());
});
let mainCSS = "";
fs.readFile("../client/styles/main.css", (err, data) => {
  err ? console.log(err) : (mainCSS = data.toString());
});
let image = "";
fs.readFile("../client/images/2.jpg", (err, data) => {
  err ? console.log(err) : (image = data);
});
let fav = "";
fs.readFile("../client/icons/favicon.ico", (err, data) => {
  err ? console.log(err) : (fav = data);
});

http
  .createServer((req, res) => {
    //#region GET
    if (req.method === "GET") {
      // headers -> meta data req , res
      //   res.writeHead(200, {
      //     "content-type": "text/plain", // mime type
      //   });
      //   res.setHeaders("content-type", "text/plain");
      //   res.write("<h1>hello</h1>");
      switch (req.url) {
        case "/":
        case "/pages/index.html":
        case "/client/pages/index.html":
          res.setHeader("content-type", "text/html");
          res.write(mainHtml);
          break;
        case "/pages/profile.html":
        case "/client/pages/profile.html":
          res.setHeader("content-type", "text/html");
          res.write(profileHtml);
          break;
        case "/styles/main.css":
        case "/client/styles/main.css":
          res.setHeader("content-type", "text/css");
          res.write(mainCSS);
          break;
        case "/scripts/script.js":
        case "/client/scripts/script.js":
          res.setHeader("content-type", "text/javascript");
          res.write(script);
          break;
        case "/images/2.jpg":
        case "/client/images/2.jpg":
          res.setHeader("content-type", "image/jpeg");
          res.write(image);
          break;
        case "/icons/favicon.ico":
        case "/client/icons/favicon.ico":
          res.setHeader("content-type", "image/vnd.microsoft.icon");
          res.write(fav);
          break;
        default:
          res.writeHead(404);
          res.write("Not Found");
          break;
      }
      res.end();
    }
    //#endregion
    //#region POST
    else if (req.method === "POST") {
      // switch (req.url) {
      //   //body
      //   case "/pages/profile.html":
      //   case "/client/pages/profile.html":
      //     res.setHeader("content-type", "text/html");
      //     res.write(profileHtml);
      //     break;
      // }
      req.on("data", (data) => {
        const params = new URLSearchParams(data.toString());
        console.log(params.get("name"));
        console.log(params.get("age"));
        profileHtml = profileHtml.replace("{name}", params.get("name"));
        // console.log(data.toString());
      });
      req.on("error", (err) => {
        console.log(err);
      });
      req.on("end", () => {
        res.setHeader("content-type", "text/html");
        res.write(profileHtml);
        res.end();
      });
    }
    //#endregion
    //#region PUT
    else if (req.method === "PUT") {
    }
    //#endregion
    //#region DELETE
    else if (req.method === "DELETE") {
    }
    //#endregion
  })
  .listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
