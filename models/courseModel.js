const mongoose = require('mongoose')

const courseSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter the name of the course"]
        },
        description: {
            type: String,
            required: [true, "Please provide a brief summary of the course content and objectives"]
        },
        duration: {
            type: String,
            required: [true, "Please mention the length of the course in terms of time"]
        },
        level: {
            type: String,
            required: [true, "Please mention the level of expertise required to take the course"]
        },
        instructor: {
            type: String,
            required: [false, "You can mention the person who will be teaching the course"]
        }
    },
    {
        timestamps: true
    }
)

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;