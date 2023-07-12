const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageLink:  {
      type: String,
      path: String
  },
    published: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Courses = mongoose.model('Courses',courseSchema);

module.exports = Courses;
