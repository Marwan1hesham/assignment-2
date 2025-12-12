const path = require("node:path");
const { EventEmitter } = require("node:events");
const event = new EventEmitter();
const fs = require("node:fs");
const os = require("node:os");

// // Q1
// function location() {
//     console.log({
//         file: __filename,
//         dir: __dirname
//     });
// }

// location()

// // Q2
// function fileName(filePath) {
//     return path.basename(filePath);
// }

// console.log(fileName(__filename))

// // Q3
// function buildPath(obj) {
//     return path.format(obj);
// }

// console.log(buildPath({ dir: "/folder", name: "app", ext: ".js"}));

// // Q4
// function ext(filePath) {
//     return path.extname(filePath);
// }

// console.log(ext(__filename))

// // Q5
// function parsedPath(givenPath) {
//     const parsed = path.parse(givenPath);
//     return {Name: parsed.name, Ext: parsed.ext};
// }

// console.log(parsedPath(__filename));

// // Q6
// function absolute(givenPath) {
//     return path.isAbsolute(givenPath);
// }

// console.log(absolute(__filename))

// // Q7
// function join(...paths) {
//     return path.join(...paths);
// }

// console.log(join("src", "components", "app.js"))

// // Q8
// function resolve(relativePath) {
//     return path.resolve(relativePath)
// }

// console.log(resolve("./index.js"))

// // Q9
// function joinPaths(path1, path2) {
//     return path.join(path1, path2);
// }

// console.log(joinPaths("/folder1", "folder2/file.txt"))

// // Q10
// const txtPath = path.resolve("./data.txt");

// function deleteAsync(filePath) {
//   fs.rm(filePath, (err) => {
//     if (err) console.log(err);
//     console.log(`The file ${path.basename(filePath)} is deleted`)
//   });
// }

// deleteAsync(txtPath);
// console.log(5);

// // Q11
// const dirPath = path.resolve("./src");

// function createFileSync(givenPath2) {
//   fs.mkdirSync(givenPath2);
// }

// createFileSync(dirPath);

// // Q12
// event.on("start", () => {
//     console.log("Welcome event triggered!");
// })

// event.emit("start")

// // Q13
// event.on("login", (username => {
//     console.log(`User logged in: ${username}`);
// }))

// event.emit("login", "Ahmed")

// // Q14
// const notesPath = path.resolve("./notes.txt");

// const content = fs.readFileSync(notesPath, {encoding: "utf-8"})
// console.log(content);
// console.log(5);

// // Q15
// fs.writeFileSync("./async.txt", "Async save")

// // Q16
// const exist = fs.existsSync("./notes.txt");
// console.log(exist);

// // Q17
// function sysInfo() {
//     return {
//         Platform: os.platform(),
//         Arch: os.arch()
//     }
// }

// console.log(sysInfo())
