// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {    
  publicPath: process.env.NODE_ENV === 'production'
   ? '/rkhong/'
   : '/',
  outputDir: 'docs',
  css : {
    loaderOptions : {
      scss: { 
        additionalData: ` 
          @import "@/assets/scss/variables.scss"; 
        `, 
      },
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
          args[0].title = "Hongryeokyeong's Portfolio";
          return args;
      })
  }
 } 
 