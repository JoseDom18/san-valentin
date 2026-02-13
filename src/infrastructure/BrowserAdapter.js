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
                path.setAttribute('d', 'M197.1 96C214.4 96 231.3 99.4 247 105.7L301.8 190.9L226.4 266.3C224.9 267.8 224 269.9 224.1 272.1C224.2 274.3 225.1 276.3 226.7 277.8L338.7 381.8C341.6 384.5 346.1 384.7 349.2 382.1C352.3 379.5 353 375.1 350.9 371.7L290.5 273.6L381.2 198C383.8 195.9 384.7 192.3 383.6 189.2L360.4 124.6C383.6 106.3 412.6 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96z')
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

    changeImageDudu(elementId, fileNameSad, fileNameHappy, isChanging) {
        const element = document.getElementById(elementId);

        if (isChanging) {
            element.setAttribute('src', `src/presentation/image/${fileNameSad}`);
        } else {
            element.setAttribute('src', `src/presentation/image/${fileNameHappy}`);
        }
    }
}