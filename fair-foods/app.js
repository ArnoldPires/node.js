const express = require('express')
const path = require('path')
const app = express();
const port = 3000
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/css', express.static('css'));
app.use(express.static('views'))
app.get('/', (req, res) => {
  res.render('foods.ejs');
});
app.get('/', (req, res) => {
  if orders.length > 0){
    let lastOrder = order = orders[-1]
    res.render('foods.ejs', {
      customer: lastOrder.customer
      number: lastOrder.number
    })
    else {
      res.render('foods.ejs')
    }
})
orders
app.post('/order', (req, res) => {
  console.log(req.body.customer)
  console.log(req.body.number)
  res.render('ok');
});
app.listen(port, () => {
    console.log(`Do as I say and work! ${port}!`)
});
