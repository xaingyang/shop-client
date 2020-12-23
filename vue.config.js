module.exports = {
    // lintOnSave: false, // 关闭ESLint的规则检查
    lintOnSave: 'warning', // 输出提示错误, 但项目继续运行

    devServer:{
      proxy:{
        '/api':{
          target:'http://39.99.186.36',
          changeOrigin:true,
          pathRewrite:{'^/api':''}
        }
      }
    }
  }