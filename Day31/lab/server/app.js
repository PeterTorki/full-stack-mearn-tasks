const express = require("express");
const path = require("path");
const fs = require("fs");
const { fetchModule } = require("../modules/fetch.module"); // return -> modules.exports || exports

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true })); // buit in
app.use(express.json()); // built in

app.get("/", (req, res) => {
  const absolute = path.join(__dirname, "../client/pages/index.html");
  res.sendFile(absolute);
});

app.get("/scripts/welcomeScript.js", (req, res) => {
  const absolute = path.join(__dirname, "../client/scripts/welcomeScript.js");
  res.sendFile(absolute);
});

app.get("/api/users", (req, res) => {
  const absolute = path.join(__dirname, "../data/data.json");
  res.sendFile(absolute);
});

app.get("/welcome.html", (req, res) => {
  const absolute = path.join(__dirname, "../client/pages/welcome.html");
  res.sendFile(absolute);
});

app.delete("/api/users", async (req, res) => {
  const { index } = req.body;
  try {
    const fetchedData = await fetchModule.fetch("http://localhost:3000/api/users");
    const existingData = await fetchedData.json();
    const updatedData = existingData.filter((_, idx) => idx != index);
    const dataDir = path.join(__dirname, "../data");
    const dataFile = path.join(dataDir, "data.json");
    fs.writeFileSync(dataFile, JSON.stringify(updatedData, null, 2), "utf8");
    const welcomePath = path.join(__dirname, "../client/pages/welcome.html");
    let html = fs.readFileSync(welcomePath, "utf8");
    res.end(html);
  } catch (error) {
    console.error("Error fetching existing data:", error);
  }
});

app.put("/api/users", async (req, res) => {
  const { index, user } = req.body;

  try {
    const fetchedData = await fetch("http://localhost:3000/api/users");
    const existingData = await fetchedData.json();
    const updatedData = existingData.map((item, idx) => (idx == index ? { index, ...user } : item));
    console.log("updatedData: ", updatedData);
    const dataDir = path.join(__dirname, "../data");
    const dataFile = path.join(dataDir, "data.json");
    fs.writeFileSync(dataFile, JSON.stringify(updatedData, null, 2), "utf8");
    const welcomePath = path.join(__dirname, "../client/pages/welcome.html");
    let html = fs.readFileSync(welcomePath, "utf8");
    res.end(html);
  } catch (error) {
    console.error("Error fetching existing data:", error);
  }
});

app.get("/styles/main.css", (req, res) => {
  const absolute = path.join(__dirname, "../client/styles/main.css");
  res.sendFile(absolute);
});

app.post("/welcome.html", async (req, res) => {
  const { name, mobile, address, email } = req.body;
  const userData = { name, mobile, address, email };
  const dataDir = path.join(__dirname, "../data");
  try {
    const fetchedData = await fetch("http://localhost:3000/api/users");
    const existingData = await fetchedData.json();
    const updatedData = [...existingData, userData];
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);
    const dataFile = path.join(dataDir, "data.json");
    fs.writeFileSync(dataFile, JSON.stringify(updatedData, null, 2), "utf8");
    const welcomePath = path.join(__dirname, "../client/pages/welcome.html");
    let html = fs.readFileSync(welcomePath, "utf8");
    html = html.replace("{name}", name || "");
    html = html.replace("{mobile}", mobile || "");
    html = html.replace("{address}", address || "");
    html = html.replace("{email}", email || "");
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(html);
  } catch (error) {
    console.error("Error fetching existing data:", error);
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

/*
 const files = [
    {
      route: "/",
      relativePath: "../client/pages/index.html",
      type: "GET",
    },
    {
      route: "/welcome.html",
      relativePath: "../client/pages/welcome.html",
      type: "POST",
    },
    {
      route: "/styles/main.css",
      relativePath: "../client/styles/main.css",
      type: "GET",
    },
    {
      route: "/script/welcomeScript.js",
      relativePath: "../client/scripts/welcomeScript.js",
      type: "GET",
    },
  ];
*/
