// Importando y uniendo Gulp y SASS
import { src, dest, watch, series } from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
import cleanCss from 'gulp-clean-css'


const sass = gulpSass(dartSass);

import terser from 'gulp-terser'

export function js(done) {
    src('src/js/app.js')
    .pipe(terser())
    .pipe(dest('build/js'))

    done()
}

// Generando la carpeta build con el css
export function css(done) { 
    src('src/scss/app.scss', {sourcemaps: true})
        .pipe( sass({
            style: "compressed"
        }).on('error', sass.logError) )
        .pipe( dest('build/css',{sorcemaps: true}) )

    done()
}

export function dev() { // generando el wacth con gulp
    watch('src/scss/**/*.scss', css)
    watch('src/js/**/*.js', js)
}

export default series(js, css, dev);