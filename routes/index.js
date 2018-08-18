let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('content/index', { 
    title: 'Index With Express' 
  });
});


/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('content/about', { 
    title: 'about With Express',
    author: 'Ayush Patel'
 });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('content/contact', { 
    title: 'Contact Me',
    authors: ['ayush', 'TomClancy', 'Godzilla', 'SpiderMan', 'BatMan']
 });
});

/* project page*/
router.get('/project', function(req, res, next) {
  res.render('content/project', { 
    title: 'My Project'  
 });
});

module.exports = router;
