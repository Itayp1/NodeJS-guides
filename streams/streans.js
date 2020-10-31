const fs = require("fs")

// for (let i = 0; i < 9999999; i++) {
//     fs.appendFileSync("bigfile.txt", param)

// }

// const arr = []
// const startTime = new Date()
// // const file3 = fs.readFileSync("bigfile.txt");
// for (let i = 0; i < 100; i++) {
//     const file3 = fs.readFileSync("bigfile.txt");
//     arr.push(file3)
//     console.log(`i memoryUsage: ${process.memoryUsage().rss / 2000000}  ${i}`)
//     fs.appendFileSync("bigfile1.txt", file3);


// }

// const updatedDate = new Date() - startTime
// console.log(updatedDate)
const { pipeline } = require('stream');
const zlib = require('zlib');
const { createGzip, unzip } = require('zlib');
const gzip = createGzip();

const source = fs.createReadStream("bigfile.txt", "utf8")
// const destination = fs.createWriteStream("bigfile2.zip")
const destination = fs.createWriteStream("bigfile3.txt")

pipeline(source, gzip, destination, (err) => {
    if (err) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
    }
});


// pipeline(source, gzip, destination, (err) => {
//     if (err) {
//         console.error('An error occurred:', err);
//         process.exitCode = 1;
//     }
// });



// source.on('data', function (chunk) {

//     destination.write(chunk)
// });


// destination.on("finish", () => {
//     console.log("done")
// })



// source.on('close', function () {
//     console.log("done");
// });

// source.on('error', function (err) {
//     console.log("error" + err);
// });
// source.on('end', function () {
//     console.log("end");
//     destination.end()

// });