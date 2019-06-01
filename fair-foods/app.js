const express = require('express');
const app = express();
const port = 3000;
const fairFoods = [

];


app.use('/', express.static('views'));
app.get('/', (req, res) => {
  res.render('foods.ejs', { notes: fairFoods});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
