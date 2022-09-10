var express=require('express');
var bodyParser=require('body-parser')
var app=express();
app.locals.pretty=true;
app.set('view engine','jade');
app.set('views','./views')
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}))
app.get('/form',function(req,res){
    res.render('form');
});
app.get('/form_receiver',function(req,res){
    var title=req.query.title;
    var description=req.query.description;
    res.send(title+','+description);
});

app.post('/form_receiver',function(req,res){
    var title=req.body.title;
    var description=req.body.description;
    res.send(title+description);
});
app.get('/topic/:id',function(req,res){
    var topics=[
        'javascript',
        'nodejs',
        'express'
    ];
    var output=`
    <a href="/topic?id=0">javascript</a><br>
    <a href="/topic?id=1">Nodejs</a><br>
    <a href="/topic?id=2">express</a><br>
    ${topics[req.params.id]}`
    res.send(output);
})
app.get('/template',function(req,res){
    res.render('temp',{time:Date(),_title:'Jade'});
});
app.get('/',function(req,res){
    res.send('hello home page');
});
app.get('/dynamic',function(req,res){
    var lis='';
    for(var i=0;i<5;i++){
        lis=lis+'<li>coding</li>';
    }
    var output=`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    hello, static dynamic${lis}
</body>
</html>`
    res.send(output)
});
app.get('/route',function(req,res){
    res.send('hello router,<img src="/df.png">')
});
app.get('/login',function(req,res){
    res.send('Login please');
});
app.listen(3000,function(){
    console.log('connected 3000 port!');
});

