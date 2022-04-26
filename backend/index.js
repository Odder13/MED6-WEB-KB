const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ProjectModel = require("./models/Projects");
const AnswerModel = require("./models/Answers");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://MED6KB:MED6databaseKB@miniprojekt-cluster.qifmi.mongodb.net/MED6KB-WebDB?retryWrites=true&w=majority"
);

app.get("/getProjects", (req, res) => {
  ProjectModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.get("/getAnswers", (req, res) => {
  AnswerModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createAnswer", async (req, res) => {
  const answer = req.body; //Represents the data that will be sent from the frontend through the questionnaire
  const newAnswer = new AnswerModel(answer);
  await newAnswer.save();

  res.json(answer);
});

//react (the frontend) will run on port 3002
app.listen(3002, () => {
  console.log("Server runs properly.");
});
