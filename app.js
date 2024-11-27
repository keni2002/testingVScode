import express from "express";
const app = express();
const hostname = "127.0.0.1";
const port = 3000;

app.get("/", (req, res)=>{
    res.json(
        {
            message: "cruel world",
            greeting: "good bye"
        }
    );
});

app.listen(port, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});
