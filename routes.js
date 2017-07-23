var path = require('path');

module.exports = function(app) {

  // app.get('/api', function (req, res) {
  //   console.log('api call');
  //
  //   res.send('/api');
  // });

  // app.get('/restricted', function (req, res) {
  //   res.sendFile(path.join(__dirname, '../views/index.html'));
  // });
  app.get('/*', function (req, res) {
    console.log('get *', req.url);
    console.log('sending: ', path.join(__dirname, '/app/index.html'))
    res.sendFile(path.join(__dirname, '/app/index.html'));
  });
};