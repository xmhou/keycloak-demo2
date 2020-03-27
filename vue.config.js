module.exports = {
    chainWebpack: config => {
        config.module
            .rule('css')
            .test(/\.css$/)
            .oneOf('vue')
            .resourceQuery(/\?vue/)
            .use('px2rem')
            .loader('px2rem-loader')
            .options({
                remUnit: 75
            })
    },
    devServer: {
        proxy: { //目的是解决跨域，若测试环境不需要跨域，则不需要进行该配置
            '/api': {
                // 目标 API 地址
                target: 'http://localhost:7001',
                // target: 'http://localhost:3000',
                
                // 如果要代理 websockets
                ws: true,
                // 将主机标头的原点更改为目标URL
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
}