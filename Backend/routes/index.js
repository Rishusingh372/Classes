const express = require('express');
const app = express();
const studentRouter = require('./routers1/studentRouter');

app.get('/',(req,res)=>{{
    res.send("<h1>This is student dashboard </h1>")
}})
app.use('/students', studentRouter);


app.listen(8800, () => {
    console.log("Server is running on port 8800");
});