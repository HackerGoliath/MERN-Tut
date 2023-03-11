const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.cookie('myCookie', 'someValue')
    res.send('Cookie set')
})

app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000')
})
