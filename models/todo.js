var mongoose = require("mongoose");

var TodoitemSchema = new mongoose.Schema({
  id: {
    type: Number

  },
  title: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true,
  },
  completed: {
    type: Boolean,
  },
  Duedate: {
    type: Date,
    required: True,
  },
});

module.exports = mongoose.model("Todo", TodoitemSchema);
