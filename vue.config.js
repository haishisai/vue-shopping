
module.exports = {
  publicPath: './',
  // baseUrl: BASE_URL,  vue/cli 3.3之前
  // publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  devServer: {
      // proxy:{
      //     '/api': {
      //         target: 'http://localhost:9000/',
      //         pathRewrite:{
      //             // '^/api': '/api'
      //         }
      //     }
      // },
      open:true,
      host:'localhost',
      port: 8080
  }
}