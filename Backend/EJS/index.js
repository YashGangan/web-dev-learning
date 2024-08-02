import express from "express";

const app = express();
const port = 3000;
const date = new Date();
let today = "";
let adviceToday = "";

function getDayType (req, res, next) {
    let day = date.getDay();
    if (day === 6 || day === 0) {
        today = "weekend";
        adviceToday = "let's have some fun"
    } else {
        today = "a weekday";
        adviceToday = "it's time to work"
    }
    next();
}
app.use(getDayType);

app.get("/", (req, res) => {
    res.render("index.ejs", {
        dayType: today,
        advice: adviceToday
    })
})

app.listen (port, () => {
    console.log(`Listening on port ${port}`);
})