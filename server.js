var express = require('express')
var app = express()

app.use(express.static('./public'))

app.get('/', function(req,res){
	// console.log('got to the server')
	res.sendFile('index.html', {root:'./'})
})

app.listen(8080)
