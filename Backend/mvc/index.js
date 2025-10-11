const express = require('express');
const app = express();
const StuRoute = require("./routers/stuRoute")

app.set ('view engine', 'ejs');

app.use('/CSS', express.static('CSS'));

app.use("/students", StuRoute);




app.listen(8900, () => {
    console.log('Server is running on port 8900');
});