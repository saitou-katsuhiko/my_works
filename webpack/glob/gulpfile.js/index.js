/*風じゃ用*/
const gulp = require('gulp');
const { src, dest, watch, series, parallel, lastRun } = require('gulp');
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const plumber = require("gulp-plumber");
const crLfReplace = require("gulp-cr-lf-replace");
const notify = require('gulp-notify');
const uglify = require('gulp-uglify');
const paths = {
  'scssUserMain' : ["src/public/assets/scss/user/**/*.scss", "!src/public/assets/scss/user/**/_*.scss"],
  'scssUserParts': 'src/public/assets/scss/user/**/_*.scss',
  'scssUserAll': ["src/public/assets/scss/user/**/*.scss", "src/public/assets/scss/user/**/_*.scss"],
  'scssAgentMain' : ["src/public/assets/scss/agent/**/*.scss", "!src/public/assets/scss/agent/**/_*.scss"],
  'scssAgentParts': 'src/public/assets/scss/agent/**/_*.scss',
  'scssAgentAll': ["src/public/assets/scss/agent/**/*.scss", "src/public/assets/scss/agent/**/_*.scss"],
  'scssEntryMain' : ["src/public/assets/scss/entry/**/*.scss", "!src/public/assets/scss/entry/**/_*.scss"],
  'scssEntryParts': 'src/public/assets/scss/entry/**/_*.scss',
  'scssEntryAll': ["src/public/assets/scss/entry/**/*.scss", "src/public/assets/scss/entry/**/_*.scss"],
  'distUser' : 'src/public/assets/css/user',
  'distAgent' : 'src/public/assets/css/agent',
  'distEntry' : 'src/public/assets/css/entry',
  'js' : 'src/public/assets/js_origin/**/*.js',
  'distJs' : 'src/public/assets/js/',
  'originSourceDirectory' : 'src/public/assets/js/user/',
  'webpackSource' : 'dist/src/public/assets/js_origin/user/**/**/terminal.js',
}

//ユーザー用sassコンパイル
const compileSassUser = () => {
  return src(paths.scssUserMain, { since: lastRun(compileSassUser) })
    .pipe(plumber(notify.onError('Error: <%= error.message %>')))
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(crLfReplace({changeCode: 'CR+LF'}))
    .pipe(dest(paths.distUser))
}
const compileSassUserAll = () => {
  return src(paths.scssUserAll)
    .pipe(plumber(notify.onError('Error: <%= error.message %>')))
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(crLfReplace({changeCode: 'CR+LF'}))
    .pipe(dest(paths.distUser))
}

//全権用sassコンパイル
const compileSassAgent = () => {
  return src(paths.scssAgentMain, { since: lastRun(compileSassAgent) })
    .pipe(plumber(notify.onError('Error: <%= error.message %>')))
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(crLfReplace({changeCode: 'CR+LF'}))
    .pipe(dest(paths.distAgent))
}
const compileSassAgentAll = () => {
  return src(paths.scssAgentAll)
    .pipe(plumber(notify.onError('Error: <%= error.message %>')))
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(crLfReplace({changeCode: 'CR+LF'}))
    .pipe(dest(paths.distAgent))
}

//管理画面用sassコンパイル
const compileSassEntry = () => {
  return src(paths.scssEntryMain, { since: lastRun(compileSassEntry) })
    .pipe(plumber(notify.onError('Error: <%= error.message %>')))
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(crLfReplace({changeCode: 'CR+LF'}))
    .pipe(dest(paths.distEntry))
}
const compileSassEntryAll = () => {
  return src(paths.scssEntryAll)
    .pipe(plumber(notify.onError('Error: <%= error.message %>')))
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(crLfReplace({changeCode: 'CR+LF'}))
    .pipe(dest(paths.distEntry))
}

//jsファイル圧縮
const jsMinifi = () => {
  return src(paths.js, { since: lastRun(jsMinifi) })
    //.pipe(plumber(notify.onError('Error: <%= error.message %>')))
    .pipe(uglify())
    .pipe(dest(paths.distJs))
}

//sass監視
const watchSass = () => {
  watch(paths.scssUserMain, series(compileSassUser));
  watch(paths.scssUserParts, series(compileSassUserAll));
  watch(paths.scssAgentMain, series(compileSassAgent));
  watch(paths.scssAgentParts, series(compileSassAgentAll));
  watch(paths.scssEntryMain, series(compileSassEntry));
  watch(paths.scssEntryParts, series(compileSassEntryAll));
}

//webpack用js移動
const overwriteWebpack = () => {
  return src(paths.webpackSource, { since: lastRun(overwriteWebpack) })
    .pipe(gulp.dest(paths.originSourceDirectory));
}

//js監視
const watchJs = () => {
  watch(paths.webpackSource, series(overwriteWebpack));
  //watch(paths.js, series(jsMinifi));元記述
  watch([paths.js, '!src/public/assets/js_origin/user/**/modules/*.js', '!src/public/assets/js_origin/user/**/**/terminal.js'], series(jsMinifi));
}

//「gulp」のみでデフォルトタスクのscssファイル監視、「gulp jsMinifi」でjsファイルの監視
exports.default = series(watchSass);
exports.jsMinifi = series(watchJs);