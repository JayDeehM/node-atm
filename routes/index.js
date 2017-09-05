var express = require('express');
var router = express.Router();
var app     = express();
const bodyParser = require('body-parser');

// Cardholders
var users = [
    {name: 'Pedro Penduko', card : '1234', pass : '123456', money : 500000},
    {name: 'Agapito Dimagiba', card : '4567', pass : '123456', money : 100000},
    {name: 'Arnulfo Niloko', card : '3692', pass : '123456', money : 10000000}
 ];

 var p = '';

app.use(bodyParser.urlencoded({ extended: false }));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Random bank' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Random bank', name: users[p].name, money: users[p].money });
});

router.get('/withdraw', function(req, res, next) {
  res.render('withdraw', { name: users[p].name, money: users[p].money});
});

router.get('/transfer', function(req, res, next) {
  res.render('transfer', { name: users[p].name, money: users[p].money });
});

router.post('/login',function (req, res, next) {
  var user = req.body.card;
  var pass = req.body.pass;
  console.log(`Username: ${user}, Password: ${pass}`);

	    for(var i = 0; i<users.length; i++){
	    	console.log('Querying user '+i+': '+users[i].card )
	        if(users[i].card == user && users[i].pass == pass){
	            console.log('Login Success');
              p = i;
	            res.redirect('/home');
	            break;
	          }
	        }
          res.redirect('/?error=1');
	
});

router.post('/withdraw',function (req, res, next) {
  var amount = req.body.amount;
  console.log(`Amount: ${amount}`);
  	if(users[p].money > amount){
  		var x = users[p].money - amount;
  		users[p].money = x;
      res.redirect('/?error=2');
  	} else {
      res.redirect('/?error=3');
  	}
});

router.post('/transfer',function (req, res, next) {
  var amount = req.body.amount;
  console.log(`Amount: ${amount}`);
    if(users[p].money > amount){
      var y = users[p].money - amount;
      users[p].money = y;
      res.redirect('/?error=2');
    } else {
      res.redirect('/?error=3');
    }
});

module.exports = router;
