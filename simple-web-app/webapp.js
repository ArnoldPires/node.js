const express = require('express')
const app = express()
const port = 3000

app.get('/arnold', (req, res) => res.send('<h1>Hello Arnold!</h1><p>How are you?</p>'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
