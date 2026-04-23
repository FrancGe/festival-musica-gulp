// Importando y uniendo Gulp y SASS
import { src, dest, watch } from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass);

// Generando la carpeta build con el css
export function css(done) { 
    src('src/scss/app.scss')
        .pipe( sass() )
        .pipe( dest('build/css') )

    done()
}

export function dev() { // una vez que mando a llamar la funcion de dev, va a estar observando el archivo puesto entre watch()
    watch('src/scss/app.scss', css)
}