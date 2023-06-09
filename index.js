const express = require('express')
const app = express()
app.use(express.json())

function mid(req, res, next){
    const { body } = req
    if( req.body.message = "valid" ){
        next()
    } else{
        res.send('Error!!!')
    }
}

function getFun(req, res) {
    res.send({
        message: "Hello",
        method: "GET"
    })
}

app.get('/', mid, getFun)


app.post('/',mid, (req, res) => {
    console.log("Good");
    res.send("PUT request is working")
});

// Listen http://localhost:3000

app.listen(3000, () => {
    console.log("Server runing");
})