const withSass = require('@zeit/next-sass');

module.exports = {
  // some configuration
  assetPrefix: process.env.NODE_ENV === 'production' ? '/{reponame}' : '',
  // another configuration
};

module.exports = withSass();
