const fs = require("fs").promises;
const path = require("path");

async function readAllFoldersFiles(dirname) {
  try {
    const filenames = await fs.readdir(dirname);
    const namesWithContent = {};

    for (const filename of filenames) {
      const content = await fs.readFile(path.join(dirname, filename), "utf-8");
      namesWithContent[filename] = content;
    }
    return namesWithContent;
  } catch (err) {
    throw err;
  }
}

module.exports = readAllFoldersFiles;
