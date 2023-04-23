const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
const ejs = require('ejs');
const logincontroller = require('./controllers/logincontroller');
const homecontroller = require('./controllers/homecontroller');
const verificationcontroller = require('./controllers/verificationcontroller');
app.use(express.static('front-end'));
app.set('view engine', 'ejs');
app.set('views', 'front-end-views');
const port = 9091;



app.get('/', logincontroller); 
app.get('/registration', (req, res) => {res.render('registration')}); 
app.post('/home', homecontroller);
app.post('/verification',verificationcontroller);
app.listen(port, () => { console.log(`Server listening at http://localhost:${port}`); });


