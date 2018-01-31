const webpackConfig = require('../node_modules/@ionic/app-scripts/config/webpack.config');
const webpack = require('webpack');

const ENV = process.env.IONIC_ENV;
const envConfigFile = require(`./config-${ENV}.json`);
const fooConfig = envConfigFile.foo;

webpackConfig.plugins.push(
    new webpack.DefinePlugin({
        webpackGlobalVars: {
          APP_SENTRY_DNS: JSON.stringify(fooConfig),
        }
    })
);
