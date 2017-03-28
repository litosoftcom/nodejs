//require epxress middleware
var express = require('express');
var path = require('path');

//create router object
var router= express.Router();

//export our router to be accessible by other object
module.exports = router;

// rout our app
router.get('/', function (req,res){
//    res.send('Hello world!2');
//res.sendFile(path.join(__dirname,'../index.html'));
    res.render('pages/home');
});

//route for about page

router.get('/about', function (req,res){
    //create user 
    var users = [
        { name: 'Jan', email :'jan@example.com', avatar : 'http://placecage.com/200/200'},
        { name: 'Piet', email :'piet@example.com', avatar : 'http://placecage.com/201/200'},
        { name: 'Klaas', email :'klaas@example.com', avatar : 'http://placecage.com/202/200'},
        { name: 'Boer', email :'boer@example.com', avatar : 'http://placecage.com/203/200'},
    ];
    //res.sendFile(path.join(__dirname,'../about.html'));
    res.render('pages/about', {users: users});
});
//route for contact page
router.get('/contact', function (req,res){
    //res.send('contact page');
    res.render('pages/contact');
});
router.post('/contact', function(req,res){
    //post code to be placed here
    console.log(req.body.message);
    res.send('Thanks for contacting us, ' + req.body.name + '! We will respond shortly.');
});
