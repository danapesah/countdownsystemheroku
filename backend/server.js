  
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); //helps us to connect to our mongodb database

require('dotenv').config(); //dotenv file

const app=express();
const port = process.env.PORT ||5000;

//app.use(cors());
app.use(express.json()); //parse jason

const uri = "mongodb+srv://danape:countdownsystem@cluster0-gvajm.mongodb.net/test?retryWrites=true&w=majority"; //where our db is stored 
// await mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true });

// const uri = process.env.LOCAL_URI; //where our db is stored 
mongoose.connect( uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
     .then(() => console.log( 'Database Connected' ))
     .catch(err => console.log( err ));
                      
// const connection= mongoose.connection; 
// connection.once('open', ()=>{
//     console.log("MongoBD database connection established successfully" );
// })


const countsRouter = require('./routes/counts');
const usersRouter = require('./routes/users');

app.use('/users', usersRouter);
app.use('/counts', countsRouter);


app.listen(port ,()=> {
    console.log('Server is running on port:',  {port} ); //start the server
});