const express = require ('express');
const cors = require ('cors');
const app = express ();
const bodyParser = require('body-parser');
const empController = require ('./routes/empRoutes');

app.use(bodyParser.json());

app.use (cors ());

app.use('/empoyees',empController);


app.listen (5000, () => {
  console.log ('Server is running on port 5000');
});