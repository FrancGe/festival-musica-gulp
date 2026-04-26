document.addEventListener('DOMContentLoaded', function() {
    navegacionFija()
    crearGaleria()
    resaltarEnlace()
    scrollNav()
})

function navegacionFija() {
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')

    window.addEventListener('scroll', function(){
        if(sobreFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed')
        } else {
            header.classList.remove('fixed')
        }
    })
}

function crearGaleria() {

    const cantidad_imagenes = 16;
    const galeria = document.querySelector('.galeria-imagenes')

    for(let i = 1; i <= cantidad_imagenes; i++) {
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg`;
        imagen.alt = 'Imagen galeria';

        // Event Handler
        imagen.onclick = function() {
            mostrarImagen(i)
        }

        galeria.appendChild(imagen);

    }
}

function mostrarImagen(i) {

    const imagen = document.createElement('IMG')
    imagen.src = `src/img/gallery/full/${i}.jpg`;
    imagen.alt = 'Imagen galeria';

    // Generar modal
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal
    modal.appendChild(imagen)
   

    // Boton cerrar modal
    const cerrarModalBtn = document.createElement('BUTTON')
    cerrarModalBtn.textContent = 'X'
    cerrarModalBtn.classList.add('btn-cerrar')
    cerrarModalBtn.onclick = cerrarModal
    modal.appendChild(cerrarModalBtn)

    // Agregandolo al HTML
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)
    
}

function cerrarModal() {
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out')

    setTimeout(() => {
        modal?.remove()

        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')
    }, 300);
    
}

function resaltarEnlace() {
    document.addEventListener('scroll', function() {
        const section = document.querySelectorAll('section')
        const enlacesNavegacion = document.querySelectorAll('.navegacion-principal a')

        let actual = '';
        section.forEach(section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight
            if(window.scrollY >= (sectionTop - sectionHeight / 3)) {
                actual = section.id
            }
        })

        enlacesNavegacion.forEach(link => {
            link.classList.remove('active')
            if(link.getAttribute('href') == '#' + actual) {
                link.classList.add('active')
            }
        })
    })
}

function scrollNav() {
    const enlacesNavegacion = document.querySelectorAll('.navegacion-principal a')

    enlacesNavegacion.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)

            section.scrollIntoView( {behavior: 'smooth'} )
        })
    })
}