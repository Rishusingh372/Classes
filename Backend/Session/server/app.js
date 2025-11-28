import express from 'express';
const app = express();
import session from 'express-session';
import webRoutes from './routes/web.js';

app.use(session({
    name:"rishusessionid",
    secret: 'r12345',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge:20000 } // Set to true if using HTTPS
}));

app.use('/', webRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});