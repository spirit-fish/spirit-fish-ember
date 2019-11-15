/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  let ENV = {
    build: {}
    // include other plugin configuration that applies to all deploy targets here
  };

  ENV.s3 = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    bucket: 'nyc-fishfry-ember',
    region: 'us-east-1',
    filePattern: '**/*.{html,js,css,png,gif,ico,jpg,map,xml,txt,svg,swf,eot,ttf,woff,woff2,otf}'
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
