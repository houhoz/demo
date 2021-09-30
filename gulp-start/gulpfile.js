var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var useref = require('gulp-useref'); //html里零碎的这些引入合并成一个文件，但是它不负责代码压缩。
var uglify = require('gulp-uglify'); //使用gulp-uglify压缩js文件
var gulpIf = require('gulp-if'); //条件判断
var cssnano = require('gulp-cssnano'); //css的压缩
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant'); //使用pngquant深度压缩png图片的imagemin插件
var cache = require('gulp-cache'); //使用”gulp-cache”只压缩修改的图片
var del = require('del');
var base64 = require('gulp-base64');
var runSequence = require('run-sequence');
var babel = require("gulp-babel");
var autoprefixer = require('gulp-autoprefixer');

// Basic Gulp task syntax
// gulp.task('hello', function() {
//     console.log('Hello Zell!');
// })

// Development Tasks 
// -----------------

// Start browserSync server
gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        }
    })
})

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            remove: true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(base64())
        .pipe(gulp.dest('app/css')) // Outputs it in the css folder
        .pipe(browserSync.reload({ // Reloading with Browser Sync
            stream: true
        }));
})
gulp.task('convertJS', function() {
    return gulp.src('app/ES6/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('app/js'))
})

// Watchers
gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
})

// Optimization Tasks 
// ------------------

// Optimizing CSS and JavaScript 
gulp.task('useref', function() {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'));
});

// Optimizing Images 
gulp.task('images', function() {
    return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
        // Caching images that ran through imagemin
        .pipe(cache(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true, //类型：Boolean 默认：false 多次优化svg直到完全优化
            use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        })))
        .pipe(gulp.dest('dist/images'))
});


// Copying fonts 
gulp.task('fonts', function() {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
})

// Cleaning 
gulp.task('clean', function() {
    return del.sync('dist').then(function(cb) {
        return cache.clearAll(cb);
    });
})

gulp.task('clean:dist', function() {
    return del.sync(['dist/**/*', '!dist/images', '!dist/images/**/*']);
});

// Build Sequences
// ---------------

gulp.task('default', function(callback) {
    runSequence(['sass', 'convertJS', 'browserSync'], 'watch',
        callback
    )
})

gulp.task('build', function(callback) {
    runSequence(
        'clean:dist',
        'sass', ['useref', 'convertJS', 'images', 'fonts'],
        callback
    )
})