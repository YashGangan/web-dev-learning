import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "yash123",
  port: "5432"
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  
  if(password === "") {
    res.send("Enter a password");
  }
  try{
      const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [email]);

    if (checkResult.rows.length > 0) {
      res.send("User already exits, try again with another email");
    } else {
      const result = await db.query("INSERT INTO users (email, password) VALUES ($1, $2)", 
        [email, password]);
      console.log(result);
      res.render("secrets.ejs");
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  
  try{
      const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);

    if (result.rows.length > 0) {
      const user = result.rows[0];
      const getPass = user.password;
      if (getPass.toLowerCase() === password.toLowerCase()) {
        res.render("secrets.ejs");
        console.log(`Welcome user ${email}`);
      } else {
        res.send("Incorrect Password");
      }
    } else {
      res.send("user not found");
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on https://localhost:${port}`);
});
