import gulp from 'gulp';
import fileinclude from 'gulp-file-include';
import scss from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';

var src = {
    html : ['html/**/*.html','html/*.html'],
    js : ['js/*.js','js/**/*.js'],
    css : ['scss/*.scss','scss/**/*.scss'],
    imgs : ['images/**','images/**/**','images/**/**/*']
}
var paths = {
    html: '../build/html/',
    js : '../build/js/',
    css : '../build/css/',
    imgs : '../build/images/'
}

var scssOptions = {
    outputStyle : "expanded",
    indentType : "tab",
    indentWidth : 1,
    precision: 6,
    sourceComments: true
};



function htmlComplie() {
    return gulp.src(src.html)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(paths.html))
        .pipe(browserSync.reload({stream:true}));
};


function scssCompile() {
    return gulp.src(src.css)
        .pipe(sourcemaps.init())
        .pipe(scss(scssOptions).on('error', scss.logError))
        .pipe(sourcemaps.write())
        // .pipe(rename({
        //     extname: '.min.css',
        //     src: 'css/*.css' 
        // }))
        .pipe(gulp.dest(paths.css))
        .pipe(browserSync.reload({stream:true}));
};


function concatJs() {
    return gulp.src(src.js)
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js',
            src: 'js/*.js'
        }))
        // .pipe(rename('ui.min.js'))
        .pipe(gulp.dest(paths.js))
        .pipe(browserSync.reload({stream:true}));
}

function imgs() {
    return gulp.src(src.imgs)
        .pipe(gulp.dest(paths.imgs))
        .pipe(browserSync.reload({stream:true}));
}

function watchFiles(){
    gulp.watch(src.html).on('change',htmlComplie);
    gulp.watch(src.css, scssCompile);
    gulp.watch(src.js, concatJs);
    gulp.watch(src.imgs, imgs);

}

function brwSync(){
    browserSync.init({
        server:{
            baseDir:'../build/'
        }
    });
}

gulp.task('default', gulp.parallel(gulp.series(htmlComplie, scssCompile, concatJs, imgs),brwSync, watchFiles));