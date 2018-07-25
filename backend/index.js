const express = require('express')
const app = express()
const bodyParser = require('body-parser')
let chair = require('./data')

app.use(bodyParser.json())
app.get('/', (req, res) => res.send('Welcome to Fake JSON API'))
app.get('/api/bag', (req, res) => {res.send(chair)})

const addChair = (list, item) => {
    list.push(item)
    return list
}

app.post('/api/bag', (req, res) => {
    const newChair = req.body
    const newItemChair = addChair(chair, newChair)
    chair = newItemChair
    res.send(chair)
})

app.listen(3000, () => console.log('Fake JSON API'))