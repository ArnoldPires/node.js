//notes.ejs is able to link to the app.js file, because express is already programmed to find
//the notes.ejs file. This is because its in the views folder. Express always looks for
//the views folder. While in the views folder, it will always look for the .ejs file.
//HTML files can also be stored in there, but thats mainly for static files, where as
// .ejs is always for dynamic sites
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
app.delete('/notes/:id', (req, res) => {
  myNotes.splice(req.params.id, 1);
  console.log('delete route hit');
  res.send ({
    message: 'deleted',
    index: req.params.id
  });
});
app.listen(port, () => {
    console.log(`Do as I say and work! ${port}!`)
});
