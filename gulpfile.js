/* Genéricas */
const gulp = require("gulp");
const plumber = require("gulp-plumber");
const del = require("del");
/*Para tareas html */
const pug = require("gulp-pug");
const htmlmin = require("gulp-htmlmin");
/*Para tareas  css */
const sass = require("gulp-dart-sass");
const autoprefixer = require ("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const rename = require("gulp-rename");
const sassdoc = require("sassdoc");
/* Para tareas js*/
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const terser = require("gulp-terser");
/* Para assets*/
const imagemin = require("gulp-imagemin");
/* Para tareas json*/
const jsonminify = require('gulp-jsonminify');


// HTML
gulp.task("html", () => {
    return gulp.src("./index.pug")
    .pipe(plumber())
    .pipe(pug({
        doctype: "html",
        pretty: true
    })) // Compila a HTML
    .pipe(htmlmin({ //Minimiza HTML
        collapseWhitespace: true 
    }))
    .pipe(gulp.dest("dist"));//Mueve index.html a la carpeta dist
});

// CSS
gulp.task("css", () => {
    return gulp.src("app/scss/**/*.scss")
        .pipe(plumber())
        .pipe(sass()) // Compila Sass a CSS
        .pipe(autoprefixer({ //Autoprefija CSS
            cascade: false
        }))
        .pipe(cssnano()) // Minimiza CSS
        .pipe(rename({ // Renombra el fichero CSS
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(gulp.dest("dist/css")); //Mueve el CSS a la carpeta dist
});

// JAVASCRIPT
gulp.task("js", function (){ 
    return gulp.src("app/js/*.js")
    .pipe(plumber())
    .pipe(concat("app.js")) // Concatena los archivos en un único archivo
    .pipe(babel()) // Transforma ES6
    .pipe(terser()) // Minimiza JavaScript
    .pipe(gulp.dest("dist/js")); // Mueve el JavaScript a la carpeta dist
});


// JSON
gulp.task("json", function() {
    return gulp.src("app/js/*.json")
    .pipe(plumber())
    .pipe(jsonminify()) // Minimiza JSON
    .pipe(gulp.dest('dist/js')); // Mueve el JSON a la carpeta dist
})


// IMÁGENES
gulp.task("images", () =>
    gulp.src("app/images/**/*")
    .pipe(plumber())
    .pipe(imagemin()) //Optimiza las imágenes
    .pipe(gulp.dest("dist/images"))//Mueve las imágenes a la carpeta dist
);


// DOCUMENTAR
var save= {
    dest : "dist/docs"
  }
gulp.task("docs", function(){
    return gulp.src("scss/**/*.scss")
    .pipe(sassdoc(save));//Documenta con SassDoc e incorpora la documentación en la carpeta dist
});

//Borrar ficheros no definitivos de la carpeta dist
gulp.task("clean", function(){
    return del("dist/css/*.css");
});


// PROCESO COMPLETO AUTOMATIZADO
gulp.task("package", 
    gulp.series("clean", 
    gulp.parallel("css", "docs"), 
    gulp.parallel ("html", "js", "json"), 
    "images"));