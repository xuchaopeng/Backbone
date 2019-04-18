// Css要压缩，打包，指纹
// Js要压缩，打包，模块化，指纹
// 将css，和js，和img放在static目录下
// Html要放在page目录下
// Data放在当前目录下即可

fis.hook('commonjs')

// Css要压缩，打包，指纹
fis.match('**.css', {
  // 压缩
  optimizer: 'clean-css',
  packTo: 'static/pkg/css/app.css',
  // 指纹
  useHash: true
})

// 库文件打包一起
fis.match('static/lib/**.js', {
  // 压缩
  optimizer: 'uglify-js',
  // 打包
  packTo: 'static/lib.js',
  // 指纹
  useHash: true
})

// Js要压缩，打包，模块化，指纹
fis.match('static/modules/**.js', {
  // 压缩
  optimizer: 'uglify-js',
  // 打包
  packTo: 'static/app.js',
  // 模块化
  isMod: true,
  // 指纹
  useHash: true
})

// 将css，和js，和img放在static目录下

// Html要放在page目录下

// Data放在当前目录下即可

// 处理modjs
fis.match('mod.js', {
  // 压缩
  optimizer: 'uglify-js',
  // 指纹
  useHash: true,
  release: 'static/mod.js'
})

// 定义打包阶段

fis.match('::package', {
  postpackager: 'loader'
})