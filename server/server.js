import express from "express";
import cors from "cors"

const app = express();

app.use(cors());

// For parsing application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

let jokes = [
    {
      "id": 1,
      "joke": "Why don't scientists trust atoms? Because they make up everything!"
    },
    {
      "id": 2,
      "joke": "Why was the math book sad? Because it had too many problems."
    },
    {
      "id": 3,
      "joke": "What did the ocean say to the beach? Nothing, it just waved."
    },
    {
      "id": 4,
      "joke": "Why don't skeletons fight each other? They don't have the guts."
    }
  ]

app.get("/api",(req,res)=>{
    res.json(jokes)
})

app.post("/api/jokes",(req,res)=>{
    const newJoke = req.body;
    newJoke.id = jokes.length+1
    jokes.push(newJoke);
    res.send(newJoke);
})

app.post("/api/removed",(req,res)=>{
  const removedJoke = req.body;
  const newjokes = jokes.filter(joke=>joke.id != `${removedJoke.id}`)
  jokes = [...newjokes];
  res.send(newjokes)
})

app.listen(5000,()=>{console.log("server running on port 5000")})