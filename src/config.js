require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Web Linter',
    description: 'Find the depulcate contents',
    head: {
      titleTemplate: 'React Redux Example: %s',
      meta: [
        {name: 'description', content: 'All the modern best practices in one example.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'React Redux Example'},
        {property: 'og:image', content: 'http://t03.deviantart.net/wWlF_teUE-G5Wi8z2MXAqt-5bD0=/fit-in/150x150/filters:no_upscale():origin()/pre14/bdac/th/pre/f/2016/265/8/3/mr_robot_folder_icon_1_by_3bdullah421-daijjxd.png'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Web Linter'},
        {property: 'og:description', content: 'Find the depulcate contents'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@yan'},
        {property: 'og:creator', content: '@yan'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
