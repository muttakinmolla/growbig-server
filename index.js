const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/mainCourses/MainCourses.json');

app.get('/', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    res.send(req.params.id)
})

app.listen(port, () => {
    console.log('my server is running', port)
})