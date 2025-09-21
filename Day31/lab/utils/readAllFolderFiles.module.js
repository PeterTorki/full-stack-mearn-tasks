const fs = require("fs");
const path = require("path");

const textFileExts = ["html", "css", "js", "txt", "json"];

function readAllFolderFiles(dirname, callback) {
  fs.readdir(dirname, (err, filenames) => {
    if (err) {
      if (err.code === "ENOENT") {
        // المجلد مش موجود => نرجع object فاضي ونكمل
        return callback(null, {});
      }
      return callback(err); // أي خطأ تاني يترمي
    }

    const namesWithContent = {};
    let pending = filenames.length;

    if (!pending) return callback(null, namesWithContent);

    filenames.forEach((filename) => {
      const ext = path.extname(filename).slice(1); // الامتداد من غير النقطة
      const isTextFile = textFileExts.includes(ext);

      const encoding = isTextFile ? "utf-8" : null;

      fs.readFile(path.join(dirname, filename), encoding, (err, content) => {
        if (err) {
          if (err.code === "ENOENT") {
            pending -= 1;
            if (pending === 0) callback(null, namesWithContent);
            return;
          }
          return callback(err);
        }

        namesWithContent[filename] = content;
        pending -= 1;

        if (pending === 0) {
          callback(null, namesWithContent);
        }
      });
    });
  });
}

module.exports = readAllFolderFiles;
