const express = require("express");
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

app.get('/', (req, res)=> {
  
});

app.get('/main', (req, res)=> {

});

app.listen(8080, () => {
  console.log("server is started with stably");
});
