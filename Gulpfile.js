//===========================================================
//INSTALAR
//npm install -g gulp
//npm install gulp gulp-sass browser-sync -save-dev

//EXECUTAR
//TERMINAL: gulp watch

//===========================================================
var gulp = require('gulp');  
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var paths = {
    scss: '*.scss'
};
gulp.task('sass', function () {  
    gulp.src('*.scss')
        .pipe(sass({
            includePaths: ['scss']
        }))
        .pipe(gulp.dest('css'));
});
gulp.task('browser-sync', function() {  
    browserSync.init(["*.css", "*.js"], {
        server: {
            baseDir: "./"
        }
    });
});
gulp.task('watch', ['sass', 'browser-sync'], function () {  
    gulp.watch(["*.scss"], ['sass']);
});
