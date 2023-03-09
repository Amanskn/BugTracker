require('dotenv').config();

const express=require('express');
const app=express();
const port=process.env.port||8000;
const db=require('./config/mongoose');

app.use(express.static('./assets'));

app.use(express.urlencoded({extended:false}));

app.set('views','./views');
app.set('view engine', 'ejs')


app.use('/',require('./routes'));


app.listen(port,function(err){
    if(err){
        console.log("Error in running the server",err);
        return;
    }
    console.log("Issue Tarcker Server is running on port",port);
    return;
});
