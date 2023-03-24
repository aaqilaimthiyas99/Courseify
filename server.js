const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Course = require('./Models/courseModels');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
//Send a request to add the courses
app.post('/v1/courses', async(req,res)=>{
    try{
        const courses = await Course.create(req.body);
        res.status(200).json(courses);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//List down all the courses
app.get('/v1/courses', async(req,res)=>{
    try{
        const courses = await Course.find({})
        res.status(200).json(courses)
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//Update the course based on the id
app.put('/v1/courses/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const course = await Course.findByIdAndUpdate(id, req.body);
        if(!course){
            res.status(404).json({message: "Cannot find the course with ID"})
        }
        const updateCourse = await Course.findById(id);
        res.status(200).json(updateCourse);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//Remove the course
app.delete('/v1/courses/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const course = await Course.findByIdAndDelete(id);
        if(!course){
            res.status(404).json({message: "Cannot find the course with ID"})
        }
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//Search the course based on ID 
app.get('/v1/course/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const course = await Course.findById(id);
        res.status(200).json(course);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//Search the course based on the course attribute
app.get('/v1/course?search="search_term"', async(req,res)=>{
    try{
        const search_term = req.params;
        const course = await Course.find("Courses", search_term);
        res.status(200).json(course);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//connecting to database
mongoose.set("strictQuery",false)
mongoose.connect("mongodb+srv://Admin:12345@cluster0.npfpcp3.mongodb.net/Courseify_API?retryWrites=true&w=majority")
.then(()=>{
    console.log("Connected to MongoDB")
    app.listen(8080,()=>{
        console.log("API is running on port 8080");
    })
}).catch((error)=>{
    console.log(error)
})