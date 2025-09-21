const http = require("http");
const fs = require("fs");
const path = require("path");
const handleRouteBasedOnFile = require("../utils/handleRouteBasedOnFile.module.js");
const PORT = 7000;

http
  .createServer((req, res) => {
    switch (req.method) {
      case "GET":
        if (req.url === "/api/users") {
          const dataFile = path.join(__dirname, ".");
          fs.readFile(dataFile, "utf8", (err, data) => {
            if (err) {
              res.statusCode = 500;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ error: "Cannot read users" }));
              return;
            }
            res.setHeader("Content-Type", "application/json");
            res.end(data || "[]");
          });
        } else {
          handleRouteBasedOnFile(req, res);
        }
        break;

      case "POST":
        console.log(req.url);
        if (req.url === "/welcome.html") {
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

            const dataDir = path.join(__dirname, "../data");
            if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

            const dataFile = path.join(dataDir, "data.json");

            fs.readFile(dataFile, "utf8", (err, data) => {
              let json = [];
              if (!err && data) {
                try {
                  json = JSON.parse(data);
                } catch {
                  json = [];
                }
              }
              json.push(userData);

              fs.writeFile(dataFile, JSON.stringify(json, null, 2), (err) => {
                if (err) {
                  res.statusCode = 500;
                  res.end("Internal Server Error");
                  return;
                }

                const welcomePath = path.join(__dirname, "../client/pages/welcome.html");
                fs.readFile(welcomePath, "utf8", (err, html) => {
                  if (err) {
                    res.statusCode = 500;
                    res.end("Error loading welcome page");
                    return;
                  }

                  // replace placeholders
                  html = html.replace("{name}", name || "");
                  html = html.replace("{mobile}", mobile || "");
                  html = html.replace("{address}", address || "");
                  html = html.replace("{email}", email || "");

                  res.statusCode = 200;
                  res.setHeader("Content-Type", "text/html");
                  res.end(html);
                });
              });
            });
          });
        } else {
          res.statusCode = 405;
          res.end("Method Not Allowed");
        }
        break;

      case "PUT": {
        let body = "";
        req.on("data", (chunk) => (body += chunk));
        req.on("end", () => {
          const { index, user } = JSON.parse(body);
          const dataFile = path.join(__dirname, "../data/data.json");
          fs.readFile(dataFile, "utf8", (err, data) => {
            if (err) return res.end("[]");
            let users = JSON.parse(data || "[]");
            if (users[index]) {
              users[index] = user;
              fs.writeFile(dataFile, JSON.stringify(users, null, 2), () => {
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify(users));
              });
            } else {
              res.statusCode = 404;
              res.end(JSON.stringify({ error: "User not found" }));
            }
          });
        });
        break;
      }

      case "DELETE": {
        let body = "";
        req.on("data", (chunk) => (body += chunk));
        req.on("end", () => {
          const { index } = JSON.parse(body);
          const dataFile = path.join(__dirname, "../data/data.json");
          fs.readFile(dataFile, "utf8", (err, data) => {
            if (err) return res.end("[]");
            let users = JSON.parse(data || "[]");
            if (users[index]) {
              users.splice(index, 1);
              fs.writeFile(dataFile, JSON.stringify(users, null, 2), () => {
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify(users));
              });
            } else {
              res.statusCode = 404;
              res.end(JSON.stringify({ error: "User not found" }));
            }
          });
        });
        break;
      }

      default:
        res.statusCode = 405;
        res.end("Method Not Allowed");
        break;
    }
  })
  .listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
