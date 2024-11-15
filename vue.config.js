const { defineConfig } = require('@vue/cli-service');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    configureWebpack: {
        plugins: [new NodePolyfillPlugin()],
        optimization: {
            splitChunks: {
                chunks: 'all',
            },
        },
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                secure: true,
            },
        },
    },
});
