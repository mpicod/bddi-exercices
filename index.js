let express = require ('express')
let app = express()

app.get('/', function(req,res) {
    res.send('Hello World')
})

app.get('/user/:name', function(req,res) {
    res.send('Hello ' + req.params.name)
})

app.use(function (req, res, next) {
    console.log('time', Date.now())
    next()
})

app.get('/user/:name', function(req, res){
    res.render('index', {
        message: 'hello' + req.params.name
    })
})

app.set('view engine', 'pug')

app.listen(3000)