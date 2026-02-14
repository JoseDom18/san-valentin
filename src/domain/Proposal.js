/*
esta capa es la que define las entidades y logica de negocio,
no conoce el mundo exterior ni por quien sera usada es java puro
 */
export class Proposal {

    // propiedades privadas
    #status;
    #attempts;
    #noMessages;
    #sadDuduImages;
    #happyDuduImages;
    #yesMessages;
    #rewardMessages;

    constructor() {
        this.#status = "PENDING"; // determina si fue aceptado o no
        this.#attempts = 0; // contador de veces que huyo

        // arrays de frases
        this.#noMessages = [
            "¿Piénsalo bien, no?",
            "¡Por favor, di que sí!",
            "¡Tú sabes que te conviene!",
            "¿Estás segura? 🥺",
            "¡No me hagas esto!",
            "Te invito un pozol 😔"
        ];

        this.#yesMessages = [
            "Sabia que dirias que si, te amo osita 💗",
            "Somos el uno para el otro 🥰",
            "Te amare el resto de mi vida 💖",
            "Eres mi gran tesoro 🌞",
            "Gracias por tanto amor ✨",
            "Tu amor me hace mejor 😘"
        ]

        this.#rewardMessages = [
            "Te has ganado un sushi este 14 🍣",
            "Tenemos una cita este 14 💃🕺"
        ]

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


    get noMessages() {
        return this.#noMessages;
    }

    get sadDuduImages() {
        return this.#sadDuduImages;
    }

    get happyDuduImages() {
        return this.#happyDuduImages;
    }

    get yesMessages() {
        return this.#yesMessages;
    }

    get rewardMessages() {
        return this.#rewardMessages;
    }

    get attempts() {
        return this.#attempts;
    }

// método que se ejecuta tras aceptar
    accept() {
        this.#status = "ACCEPTED"
    }

    // método para obtener frase aleatoria
    getRandomNoMessage() {
        this.#attempts++; // se incrementa en uno cada que se pide una frase
        const randomIndex = Math.floor(Math.random() * this.#noMessages.length);
        return this.#noMessages[randomIndex];
    }

    getRandomYesMessage() {
        this.#attempts++; // se incrementa en uno cada que se pide una frase
        const randomIndex = Math.floor(Math.random() * this.#yesMessages.length);
        return this.#yesMessages[randomIndex];
    }

    getRandomRewardMessage() {
        this.#attempts++;
        const randomIndex = Math.floor(Math.random() * this.#rewardMessages.length);
        return this.#rewardMessages[randomIndex];
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