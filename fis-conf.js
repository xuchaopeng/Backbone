fis.hook('commonjs');

fis.match('js/**.js', {
  useHash: true,
  potimizer: 'uglify-js'
})

fis.match('js/{lib,modules}/**.js', {
  isMod: true,
  packTo: 'js/app.js'
})

fis.match('::package', {
  postpackager: 'loader'
})