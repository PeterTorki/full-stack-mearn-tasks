const path = require("path");
const readAllFolderFiles = require("./readAllFolderFiles.module.js");

function loadFiles(callback) {
  console.log("current directory on loadFiles:", path.join(__dirname, "../client/pages"));

  readAllFolderFiles(path.join(__dirname, "../client/pages"), (err, pages) => {
    if (err) return callback(err);

    readAllFolderFiles(path.join(__dirname, "../client/styles"), (err, styles) => {
      if (err) return callback(err);
      readAllFolderFiles(path.join(__dirname, "../client/icons"), (err, icons) => {
        if (err) return callback(err);
        readAllFolderFiles(path.join(__dirname, "../data"), (err, data) => {
          if (err) return callback(err);
          readAllFolderFiles(path.join(__dirname, "../client/scripts"), (err, scripts) => {
            if (err) return callback(err);
            const allFiles = { ...pages, ...styles, ...icons, ...data, ...scripts };
            callback(null, allFiles);
          });
        });
      });
    });
  });
}

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

const handleRouteBasedOnFile = (req, res) => {
  const callbackFunction = (err, pages) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "text/plain");
      res.write("Internal Server Error");
      return res.end();
    }

    const url = req.url === "/" ? "/index.html" : req.url;
    const keyPage = getFilename(url);

    if (pages[keyPage]) {
      const ext = keyPage.split(".").pop();
      const mimeType = typesWithMimes[ext];
      res.statusCode = 200;
      console.log("pages: ", pages);
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
  loadFiles(callbackFunction);
};

module.exports = handleRouteBasedOnFile;
