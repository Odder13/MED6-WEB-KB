const mongoose = require("mongoose");

//Defining the components of project models
const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    required: true,
  },
  subtheme: {
    type: String,
    required: true,
  },
});

const ProjectModel = mongoose.model("projects", ProjectSchema);
module.exports = ProjectModel;
