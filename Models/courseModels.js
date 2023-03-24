const mongoose = require('mongoose');

const coursesSchema = mongoose.Schema(
    {
        Name: {
            type: String,
            required: [true, "Please enter the name of the course"]
        },
        Lecturer: {
            type: String,
            required: false
        },
        Institute: {
            type: String,
            required: false
        },
        Rating: {
            type: Number,
            required: false
        },
        Link: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Course = mongoose.model('Courses', coursesSchema);

module.exports = Course;