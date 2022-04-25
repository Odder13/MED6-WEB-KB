const mongoose = require("mongoose");

//Defining the components of answer models
const AnswerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  Q0: {
    type: String,
    required: false,
  },
  Q1: {
    type: String,
    required: false,
  },
  Q2: {
    type: String,
    required: false,
  },
  Q2: {
    type: String,
    required: false,
  },
  Q3: {
    type: String,
    required: false,
  },
  Q4: {
    type: String,
    required: false,
  },
  Q5: {
    type: String,
    required: false,
  },
  Q6: {
    type: String,
    required: false,
  },
  Q7: {
    type: String,
    required: false,
  },
  Q8: {
    type: String,
    required: false,
  },
  Q9: {
    type: String,
    required: false,
  },
});

const AnswerModel = mongoose.model("answers", AnswerSchema);
module.exports = AnswerModel;
