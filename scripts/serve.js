require('babel/register');

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('../webpack.config.js').development;

const app = express();
const compiler = webpack(config);

var url = require('url');


//pushState
app.use(require('connect-pushstate')({
  allow: /__webpack_hmr|api/
}));


app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: false,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));

app.use(require('webpack-hot-middleware')(compiler));

//proxy
app.use('/api', require('proxy-middleware')(url.parse('http://172.16.30.125:8080/zeus/')));


app.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
