// esta capa es la unica que toca al mundo real
export class BrowserAdapter {

    // método para determinar tamaño del elemento
    getContainerDimensions(elementId) {
        const element = document.getElementById(elementId);

        return {
            width: element.clientWidth,
            height: element.clientHeight
        };
    }

    // metodo para obtener tamaño del boton
    getElementDimensions(elementId) {
        const element = document.getElementById(elementId);

        return {
            width: element.offsetWidth,
            height: element.offsetHeight
        };
    }

    // metodo para modificar el dom (inyectar la frase en el html)
    updateTextContent(elementId, text) {
        const element = document.getElementById(elementId);
        element.textContent = text;
    }

    // metodo para transformar los corazones (cambios de color)
    toggleBrokenHearts(isBroken) {
        const hearts = document.querySelectorAll('.heart-icon');
        const paths = document.querySelectorAll('.heart-path');

        hearts.forEach(heart => {
            if (isBroken) {
                heart.classList.add('heart-broken-mode');
            } else {
                heart.classList.remove('heart-broken-mode');
            }
        });

        paths.forEach(path => {
            if (isBroken) {
                path.setAttribute('d', 'M228.3 469.1L47.6 300.4c-30.4-28.3-47.6-68-47.6-109.5v-5.8c0-69.9 50.5-129.5 119.4-141C165 36.5 211.4 51.4 244 84l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9 68.9 11.5 119.4 71.1 119.4 141v5.8c0 41.5-17.2 81.2-47.6 109.5L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9zm103.2-212l74.1-74.1c6-6 6-15 0-21s-15-6-21 0l-74.1 74.1-19-19c-6-6-15-6-21 0s-6 15 0 21l30 30c6 6 15 6 21 0l10-10z')
            } else {
                path.setAttribute('d', 'M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z');
            }
        })
    }

    toggleButtonHighlight(elementId, isHighlighting) {
        const element = document.getElementById(elementId);

        if (isHighlighting) {
            element.classList.add('pulse-animation');
        } else {
            element.classList.remove('pulse-animation');
        }
    }
}