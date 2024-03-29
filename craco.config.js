const CracoLessPlugin = require('craco-less')
const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
    webpack: {
        alias: {
            '@': resolve('src'),
        },
    },
    devServer: {
        proxy: {
            '/backend': {
                target: 'https://fanyi-api.baidu.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/backend': '/',
                },
            },
        },
    },
    plugins: [{ plugin: CracoLessPlugin }],
}
