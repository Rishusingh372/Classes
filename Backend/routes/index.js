const express = require('express');
const app = express();
const studentRouter = require('./routers1/studentRouter');
const empRouter = require('./routers1/empRouter');
const teacherRouter = require('./routers1/teacherRouter');

app.get('/',(req,res)=>{{
    res.send("<h1>This is student dashboard </h1>")
}})

app.use('/students', studentRouter);

app.use('/employee', empRouter);

app.use('/teacher', teacherRouter);


app.listen(8800, () => {
    console.log("Server is running on port 8800");
});