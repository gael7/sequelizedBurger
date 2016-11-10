var express=require('express');
var router=express.Router();
var models=require('../models');

router.get('/', function(req, res){
  res.redirect('/burgers');
});

router.get('/burgers', function(req, res){
  models.Burger.findAll().then(function(data){
    var hbsObject={burgers: data};
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/burgers/insertOne', function (req, res) {
  console.log(req.body.burgerName);
	models.Burger.create({burgerName:req.body.burgerName}).then();
		res.redirect('/burgers');
	});

router.put('/burgers/updateOne/:burgerName', function (req, res) {
  console.log(req.params.burgerName);
  models.Burger.update({devoured: true}, {where:{burgerName: req.params.burgerName}}).then();
		res.redirect('/burgers');
	});

module.exports=router;
