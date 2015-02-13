/**
 * Created by manojp on 1/27/2015.
 */

var PORT = 7000;

var express =require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser')
var methodOverride = require('method-override')


var app =express();

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());


app.use('/',function(req,res, next){
    console.log(req.method);
    console.log(req.ip);
    console.log('---------------------------');
    next();
});

app.use(methodOverride('_method'))

app.use('/', function(req,res){
    console.log(req.method);
    console.log(req.body);

    var employee={};
    employee.firstName='Manoj';
    employee.lastName='Pathak';
    res.send(employee);

});



app.listen(PORT,function(){
    console.log('Application is running on http://localhost:'+PORT);
})