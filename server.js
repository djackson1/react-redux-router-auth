import express from 'express';
import config from './webpack.config.js';
import webpack from 'webpack';


const app         = express();
const port = process.env.PORT || 8080;
const compiler = webpack(config);


app.use(require('webpack-dev-middleware')(compiler, {
  // noInfo: true,
  // publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


const routes = require('./routes')(app);

app.listen(port, () => {
  console.log('Magic happens at http://localhost:' + port);
});