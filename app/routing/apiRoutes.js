var friends = require("../data/friends");
//Api Route for friends.js
module.exports = function(app) {
  app.get("/api/data", function(req, res) {
    res.json(friends);
  });
}