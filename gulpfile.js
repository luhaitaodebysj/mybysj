var gulp = require("gulp");
var nodemon = require("gulp-nodemon");


gulp.task('default', function () {
  nodemon({
    script: 'build/dev-server.js', 
    ext: 'js html'
  })
})