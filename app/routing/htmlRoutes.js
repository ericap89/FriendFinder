//Build paths to static html 

var path = require('path');


module.exports = function(app)
{ //path to home 
    app.get('/', function (req,res)
    {
      res.sendFile(path.join(__dirname , '../public/home.html'));
    });
  //path to survey
    app.get('/survey.html', function (req, res) 
    {
      res.sendFile(path.join(__dirname , '../public/survey.html'));
    });
} 