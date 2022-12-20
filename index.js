const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/mainCourses/MainCourses.json');
const allCourses = require('./data/AllCourse/AllCourses.json');



app.get('/news', (req, res) => {
    res.send(courses)
})

app.get('/courses', (req, res) => {
    res.send(allCourses)
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selected_course = allCourses.filter(course => course.course_id == id);
    res.send(selected_course)
})

app.get('/course-details/:id', (req, res) => {
    const id = req.params.id;
    const course_details = allCourses.find(course => course._id == id);
    res.send(course_details);
})

app.listen(port, () => {
    console.log('my server is running', port)
})