const myNotes = [

];
const express = require('express')
const app = express();
const port = 3000
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/css', express.static('css'));
//app.get('/webnotes', (req, res) => res.send(''))
//app.use('/', express.static('views'));
app.get('/', (req, res) => {
  res.render('notes.ejs', { notes: myNotes});
});
app.post('/notes', (req, res) => {
  myNotes.push(req.body.note);
  res.redirect('/');
});
app.listen(port, () => {
    console.log(`Do as I say and work! ${port}!`)
});
