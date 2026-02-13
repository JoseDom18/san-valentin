/*
esta capa es la que define las entidades y logica de negocio,
no conoce el mundo exterior ni por quien sera usada es java puro
 */
export class Proposal {

    // propiedades privadas
    #status;
    #attempts;
    #messages;
    #sadDuduImages;
    #happyDuduImages;

    constructor() {
        this.#status = "PENDING"; // determina si fue aceptado o no
        this.#attempts = 0; // contador de veces que huyo

        // arrays de frases
        this.#messages = [
            "¿Piénsalo bien, no?",
            "¡Por favor, di que sí!",
            "¡Tú sabes que te conviene!",
            "¿Estás segura? 🥺",
            "¡No me hagas esto!",
            "Te invito un pozol 😔"
        ];

        this.#sadDuduImages = [
            'dudu-crying.gif',
            'dudu-triste.gif'
        ];

        this.#happyDuduImages = [
            'dudu-bubu.gif',
            'dudu-dancing.gif',
            'dudu-bubu-dudu-love.gif',
        ]
    }

    get status() {
        return this.#status;
    }


    get messages() {
        return this.#messages;
    }


    get attempts() {
        return this.#attempts;
    }

// método que se ejecuta tras aceptar
    accept() {
        this.#status = "ACCEPTED"
    }

    // método para obtener frase aleatoria
    getRandomMessage() {
        this.#attempts++; // se incrementa en uno cada que se pide una frase
        const randomIndex = Math.floor(Math.random() * this.messages.length);
        return this.#messages[randomIndex];
    }

    getSadDuduImages() {
        const index= Math.floor(Math.random() * this.#sadDuduImages.length);

        return this.#sadDuduImages[index];
    }

    getHappyDuduImages() {
        const index = Math.floor(Math.random() * this.#happyDuduImages.length);

        return this.#happyDuduImages[index];
    }
}