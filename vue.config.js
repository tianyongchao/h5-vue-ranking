const path = require("path");
module.exports = {
    publicPath: './',
    lintOnSave: false,
    devServer: {
        port: '8201',
        open: false,
        proxy: {
            '/': {
                target: 'http://192.168.4.132:45029',
                changeOrigin: true
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/assets/base/_variable.scss";`
            },
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 37.5,
                        unitPrecision: 3,
                        propList: ['*'],
                        exclude: /(node_module)/,
                        selectorBlackList: ['.van'],
                        mediaQuery: false,
                        minPixelValue: 1
                    })
                ]
            }
        }
    },
}
