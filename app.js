const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Set static path
app.use(express.static(path.join(__dirname,'public')))

app.get('/users', (req,res) => {
    let users = [
        {
            first_name: "John",
            last_name: "Doe",
            age: 34,
            gender: "male"
        },
        {
            first_name: "Sam",
            last_name: "Means",
            age: 65,
            gender: "male"
        },
        {
            first_name: "Sarah",
            last_name: "Redfry",
            age: 19,
            gender: "female"
        }                
    ]
    res.json(users)
})

app.post('/subscribe', (req, res) => {
    let name = req.body.name
    let email = req.body.email

    console.log(`${name} has subscribed with ${email}`)
})

app.listen(3000, function() {
    console.log('Server started on port 3000...')
})