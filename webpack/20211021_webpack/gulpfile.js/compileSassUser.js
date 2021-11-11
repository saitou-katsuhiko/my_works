const { series } = require('gulp'),
      sass = require("gulp-sass"),
      autoprefixer = require("gulp-autoprefixer"),
      plumber = require("gulp-plumber"),
      crLfReplace = require("gulp-cr-lf-replace"),
      notify = require('gulp-notify');

const compileSass