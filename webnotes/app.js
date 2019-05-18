const myNotes = [
  'http is a protocol',
  'http requests have a url, method, header, and body',
  'I like peaches'
];

const express = require('express')
const app = express()
const port = 3000

//app.get('/webnotes', (req, res) => res.send(''))
//app.use('/', express.static('views'));
app.get('/', (req, res) => {
  res.render('notes.ejs', { notes: myNotes});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
