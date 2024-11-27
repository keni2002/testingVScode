import express from "express";
const app = express();
const hostname = "0.0.0.0";
const port = 3000;

app.get("/", (req, res)=>{
    res.send("GoodBye world");
});

app.listen(port, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);

});
