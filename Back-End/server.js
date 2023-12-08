const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors);
const database = {

    users: [
        {
            id: "122",
            name: "abdullah",
            password: "Aa123456",
            email: "Alzoum@gmail.com",
            entries: 0,
            joined: new Date()

        },
        {
            id: "123",
            name: "fahad",
            password: "fhd1234",
            email: "fahad@gmail.com",
            entries: 0,
            joined: new Date()

        }
    ]


}
app.get('/', (req, res) => {
    res.json(database.users)
})

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    database.users.push({
        id: "155",
        name: name,
        password: password,
        email: email,
        entries: 0,
        joined: new Date()
    })
    res.json(database.users[database.users.length - 1]);
})

app.post('/signin', (req, res) => {
    if (req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password) {
        console.log("success")
    }
    else {
        res.status(400).json('error logging in')
    }
})

app.get('/profile/:id', (req, res) => {
    let isFound = false
    const { id } = req.params;
    database.users.forEach(user => {
        if (user.id === id) {
            isFound = true
            return res.json(user)
        }
    })
    if (!isFound) {
        res.status(404).json("there is no id ")
    }
})

app.put('/image', (req, res) => {
    let isFound = false
    const { id } = req.body;
    database.users.forEach(user => {
        if (user.id.match(id)) {
            isFound = true
            user.entries++
            return res.json(user.entries)
        }
    })
    if (!isFound) {
        res.status(404).json("there is no id ")
    }
})
app.listen(3001, () => {
    console.log("app is running on port 3001");
})



/*
/ --> res = this is working
/signin --> POST = seccess/fail
/register --> POST = user
/profile/:userid -->GET = user
/image --> PUT -->user
*/