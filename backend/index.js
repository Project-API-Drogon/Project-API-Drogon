const express = require('express')
const app = express()
const bodyParser = require('body-parser')
let bag = require('./data')

app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

// app.use(bodyParser)
app.use(bodyParser.json())
app.get('/', (req, res) => res.send('Welcome to Fake JSON API'))
app.get('/api/bag', (req, res) => {res.send(bag)})

// const addChair = (list, item) => {
//     list.push(item)
//     return list
// }

// app.post('/api/bag', (req, res) => {
//     const newBag = req.body
//     const newItemBag = addChair(chair, newBag)
//     chair = newItemBag
//     res.send(bag)
// })

app.listen(3000, () => console.log('Fake JSON API'))