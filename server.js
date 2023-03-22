const express = require('express')
const mongoose = require('mongoose')
const Course = require('./models/courseModel')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))


//List down all the courses
app.get('/v1/courses', async(req, res) => {
    try{
        const courses = await Course.find({});
        res.status(200).json(courses);         
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

//Search the course based on the course ID
app.get('/v1/courses/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const course = await Course.findById(id);
        if(!course) {
            return res.status(404).json({message: `Can't find any course with ID ${id}`});
            }
            res.status(200).json(course);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


//Send a request to add the courses
app.post('/v1/courses', async(req, res) => {
    try {
        const course = await Course.create(req.body)
        res.status(201).json(course);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }

});


//Update the course based on the id
app.put('/v1/courses/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const course = await Course.findByIdAndUpdate(id, req.body);
        //We cannot find any course in database
        if(!course){
            return res.status(404).json({message: `Can't find any course with ID ${id}`})
        }
        const updatedCourse = await Course.findById(id);
        res.status(200).json(updatedCourse);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
});


//Remove the course
app.delete('/v1/courses/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const course = await Course.findOneAndDelete(id);
        if(!course){
            return res.status(404).json({message: `Can't find any course with ID ${id}`});
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});


//Search the course based on the course attribute
app.get('/v1/courses', async (req, res) => {
    try {
        const searchTerm = req.query.search;
        const courses = await Course.find({$text: {$search: searchTerm}});
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


mongoose.set("strictQuery", false)
mongoose.
connect('mongodb+srv://admin:98Mkk1216@clusterapi.icaskfj.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, () => {
        console.log('Node API app is running on port 3000')
    });
}).catch((error) => {
    console.log(error)
})