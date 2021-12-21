const path = require('path')
module.exports = {
    publicPath: "./",
    outputDir: "dist",

    indexPath: "index.html",
    filenameHashing: true
}
module.exports = {
    devServer: {
        host: '0.0.0.0',
        disableHostCheck: true
    }
}
module.exports = {
    css: {
        loaderOptions: {
            less: {
                // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
                lessOptions: {
                    modifyVars: {
                        // 直接覆盖变量
                        'text-color': '#111',
                        'border-color': '#eee',
                        'background-color':'#f7f8fa',
                        // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                        hack: `true; @import "your-less-file-path.less";`,
                    },
                },
            },
        },
    },
};