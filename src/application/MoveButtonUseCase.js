// casos de uso se aplica la lógica de lo que se quiere hacer

export class MoveButtonUseCase {

    #proposal;
    #browserAdapter;

    constructor(proposal, browserAdapter) {
        this.#proposal = proposal;
        this.#browserAdapter = browserAdapter;
    }

    executeNo(containerId, buttonId) {
        const containerDimension = this.#browserAdapter.getContainerDimensions(containerId)
        const buttonDimension = this.#browserAdapter.getElementDimensions(buttonId);

        const limitSpace = {
            x: containerDimension.width - buttonDimension.width,
            y: containerDimension.height - buttonDimension.height
        };

        const x = Math.floor(Math.random() * limitSpace.x);
        const y = Math.floor(Math.random() * limitSpace.y);

        const message = this.#proposal.getRandomNoMessage();
        const sadDuduImg = this.#proposal.getSadDuduImages();

        return {
            x: x,
            y: y,
            message: message,
            sadImg: sadDuduImg,
        };
    }

    executeYes() {
        const message = this.#proposal.getRandomYesMessage();
        const reward = this.#proposal.getRandomRewardMessage();
        const img = this.#proposal.getHappyDuduImages();

        return {
            message: message,
            reward: reward,
            img: img
        };
    }

}