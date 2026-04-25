// Importando y uniendo Gulp y SASS
import { src, dest, watch, series } from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass);

export function js(done) {
    src('src/js/app.js')
    .pipe(dest('build/js'))

    done()
}

// Generando la carpeta build con el css
export function css(done) { 
    src('src/scss/app.scss', {sourcemaps: true})
        .pipe( sass().on('error', sass.logError) )
        .pipe( dest('build/css',{sorcemaps: true}) )

    done()
}

export function dev() { // generando el wacth con gulp
    watch('src/scss/**/*.scss', css)
    watch('src/js/**/*.js', js)
}

export default series(js, css, dev);