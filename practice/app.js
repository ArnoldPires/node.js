const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('<h1>Hello Arnold!</h1><p>How are you?</p><p>I am doing well</p>'))
app.use(express.static('views'))
app.set('view engine', 'ejs');
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
