// const express = require("express");

// const app = express();

// let requestCount = 0;

// function requestIncreaser() {
//   requestCount += 1;
//   console.log(`This is the count ${requestCount}`);
//   next();
// }

// function resSumModuler() {
//   const a = parseInt(req.query.a);
//   const b = parseInt(req.query.b);
//   requestIncreaser();
//   res.json({
//     answer: a + b,
//   });
// }
// app.get("/sum", requestIncreaser, resSumModuler);
// app.get("/count", (res ,req) {
//     json ({
//         res
//     })
// });
// // app.get("/multiply", function(req, res) {
// //     const a = parseInt(req.query.a)
// //     const b = parseInt(req.query.b)
// //     requestIncreaser();
// //     res.json({
// //         answer: a * b
// //     })
// // });

// // app.get("/divide", function(req, res) {

// // const a = parseInt(req.query.a)
// //     const b = parseInt(req.query.b)

// //     res.json({
// //         answer: a / b
// //     })
// // });

// // app.get("/subtract", function(req, res) {
// // const a = parseInt(req.query.a)
// //     const b = parseInt(req.query.b)

// //     res.json({
// //         answer: a - b
// //     })
// // });

// app.listen(3000);
