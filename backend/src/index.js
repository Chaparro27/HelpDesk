const express = require('express');
const app = express();
const morgan = require('morgan');

//Settings
app.set('port', process.env.PORT || '3000')
app.set('json spaces', 2);
// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//starting server
app.listen(3000, ()=>{
    console.log(`server on port ${3000}`);
})