// casos de uso se aplica la lógica de lo que se quiere hacer

export class MoveButtonUseCase {

    #proposal;
    #browserAdapter;

    constructor(proposal, browserAdapter) {
        this.#proposal = proposal;
        this.#browserAdapter = browserAdapter;
    }

    execute(containerId, buttonId) {
        const containerDimension = this.#browserAdapter.getContainerDimensions(containerId)
        const buttonDimension = this.#browserAdapter.getElementDimensions(buttonId);

        const limitSpace = {
            x: containerDimension.width - buttonDimension.width,
            y: containerDimension.height - buttonDimension.height
        };

        const x = Math.floor(Math.random() * limitSpace.x);
        const y = Math.floor(Math.random() * limitSpace.y);

        const message = this.#proposal.getRandomMessage();
        const sadDuduImg = this.#proposal.getSadDuduImages();
        const happyDuduImg = this.#proposal.getHappyDuduImages();

        return {
            x: x,
            y: y,
            message: message,
            sadImg: sadDuduImg,
            happyImg: happyDuduImg,
        };
    }

    // OPTIMIZE create a new method than return an image


}