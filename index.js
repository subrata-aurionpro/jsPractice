const express = require("express")
const app = express();
const fs = require("fs");

// app.use((req, res, next) => {
//     setTimeout(() => {
//         console.log(`${req.method} request method`);
//     }, 3000);
// });

app.get("/", (req, res) =>{
    fs.writeFileSync()
    fs.writeFile()
    fs.write()
    setTimeout(() => {
        console.log(`sent get request`);
    }, 1000);
})

app.listen(5000, () => {
    console.log("server is on");
})