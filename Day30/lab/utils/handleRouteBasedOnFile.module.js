const fs = require("fs").promises;
const path = require("path");
const readAllFoldersFiles = require("./readAllFoldersFiles.module.js");

async function loadFiles() {
  try {
    const pages = await readAllFoldersFiles(path.join(__dirname, "../client/pages"));
    const styles = await readAllFoldersFiles(path.join(__dirname, "../client/styles"));
    return { ...pages, ...styles };
  } catch (err) {
    console.log(err);
  }
}
const replaceNotAlphabet = "/([^/?]+?.[a-zA-Z0-9]+)";

const typesWithMimes = {
  html: "text/html",
  css: "text/css",
  js: "text/javascript",
  jpg: "image/jpeg",
  ico: "image/x-icon",
  png: "image/png",
};
function getFilename(url) {
  const match = url.match(/\/([^\/?]+\.[a-zA-Z0-9]+)(?=$|\?)/);
  return match ? match[1] : null;
}

// test.js

const handleRouteBasedOnFile = async (req, res) => {
  // const  = await loadFiles();
  const pages = await loadFiles();
  const url = req.url === "/" ? "/index.html" : req.url;
  const keyPage = getFilename(url);

  if (pages[keyPage]) {
    const ext = keyPage.split(".").pop();
    const mimeType = typesWithMimes[ext] || "application/octet-stream";
    res.statusCode = 200;
    res.setHeader("Content-Type", mimeType);
    res.write(pages[keyPage]);
    res.end();
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.write("404 Not Found");
    res.end();
  }
};

module.exports = handleRouteBasedOnFile;
