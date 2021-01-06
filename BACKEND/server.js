const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const toyService = require('./services/toyService.js')
const app = express()
const port = 3030


// Config the express App
app.use(bodyParser.json())
app.use(cors());


// Config the backend routing:

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/api/toys', (req, res) => {

    const { name, inStock, type } = req.query;
    const filterBy = {
        name: name || '',
        inStock: inStock || true,
        type: type || ''
    }

    toyService.query(filterBy)
        .then(toys => {
            res.send(toys)
        })
})
app.get('/api/toys/:toysId', (req, res) => {
    const { toysId } = req.params
    toyService.getById(toysId)
        .then(toys => {
            res.send(toys)
        })
})
app.delete('/api/toys/:toysId', (req, res) => {
    const { toysId } = req.params
    toyService.remove(toysId)
        .then(() => {
            res.send('Removed Success')
        })
})
app.post('/api/toys', (req, res) => {
    const toys = req.body
    toyService.save(toys)
        .then(savedToy => {
            res.send(savedToy)
        })
})
app.put('/api/toys/:id', (req, res) => {
    const toys = req.body
    toyService.save(toys)
        .then(savedToy => {
            res.send(savedToy)
        })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})