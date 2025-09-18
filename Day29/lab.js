const http = require("node:http");

const server = http.createServer();

const fs = require("fs");
server.listen(3000, () => {
  console.log("http://localhost:3000");
});

server.on("request", (req, res) => {
  console.log("Requested URL:", req.url); // ← check this

  const objResult = evalOperation(req.url);

  if (!objResult || Object.keys(objResult).length === 0) {
    res.end(JSON.stringify({ error: "Invalid operation or URL." }));
    return;
  }

  const result = JSON.stringify(objResult, null, 2);

  fs.writeFile("./Day29/result.json", result, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Created Successfully");

    fs.readFile("./Day29/result.json", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      res.end(data);
    });
  });
});

const evalOperation = (url) => {
  const doesHaveAnOperation = (s) => s.includes("sub") || s.includes("add") || s.includes("mul") || s.includes("div");

  const isOperation = (char) => char === "d" || char === "b" || char === "v" || char === "l";

  const doOperation = (char, operationStr) => {
    const nums = operationStr.split("/").filter((num) => num !== "");
    switch (char) {
      case "d":
        return { o: "+", res: nums.reduce((acc, cur) => acc + parseInt(cur), 0) };
      case "b":
        let sub = parseInt(nums[0]);
        for (let i = 1; i < nums.length; i++) {
          sub -= parseInt(nums[i]);
        }
        return { o: "-", res: sub };
      case "v":
        let div = parseInt(nums[0]);
        for (let i = 1; i < nums.length; i++) {
          if (parseInt(nums[i]) === 0) {
            return { o: "/", res: "Infinity" };
          }
          div /= parseInt(nums[i]);
        }
        return { o: "/", res: div };
      case "l":
        return { o: "*", res: nums.reduce((acc, cur) => acc * (parseInt(cur) || 1), 1) };
    }
  };

  let i = 0;
  const answers = [];
  while (doesHaveAnOperation(url) && i >= 0) {
    let toDoOperations = "";
    for (i = url.length - 1; i >= 1; i--) {
      if (isOperation(url[i])) {
        const reversedToDoOperations = toDoOperations.split("").reverse().join("");
        const result = doOperation(url[i], reversedToDoOperations);
        answers.push(result);
        toDoOperations = "";
        i -= 3;
      }
      toDoOperations += url[i];
    }
    // builded string 19 * 5 + 4
    let buildedStringOfOperations = "";
    for (let j = answers.length - 1; j >= 0; j--) {
      if (j === answers.length - 1) {
        buildedStringOfOperations += `${answers[j].res} `;
      } else {
        buildedStringOfOperations += `${answers[j].o} ${answers[j].res} `;
      }
    }

    buildedStringOfOperations += `= ${eval(buildedStringOfOperations)}`;
    return { operations: answers, finalAnswer: buildedStringOfOperations };
  }

  return {};
};
