import express from 'express';

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>hello world</h1>");
})

app.post("/register", (req, res) => {
    res.sendStatus(201);
})

app.put("/user/yash", (req, res) => {
    res.sendStatus(200);
})

app.patch("/user/yash", (req, res) => {
    res.sendStatus(200);
})

app.delete("/user/yash", (req, res) => {
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})