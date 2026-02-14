import { Proposal } from '../domain/Proposal.js';
import { BrowserAdapter } from '../infrastructure/BrowserAdapter.js';
import { MoveButtonUseCase } from '../application/MoveButtonUseCase.js';

// 1. Inicialización (Composition Root)
const proposal = new Proposal();
const browserAdapter = new BrowserAdapter();
const moveButtonUseCase = new MoveButtonUseCase(proposal, browserAdapter);

// 2. Referencias al DOM (Presentación pura)
const btnNo = document.getElementById('no');
const btnSi = document.getElementById('si');
const messageBox = 'feedback-message';
const duduImg = 'dudu-img';

const handleReject = (event) => {
    if (event === 'touchstart') event.preventDefault();

    // A. Aspectos visuales inmediatos
    btnNo.style.position = 'absolute'; // Ahora sí permitimos que vuele

    // B. EJECUTAR CASO DE USO (El cerebro)
    const result = moveButtonUseCase.executeNo('card', 'no');

    // C. Aplicar los resultados del caso de uso al mundo real
    btnNo.style.left = result.x + 'px'; // Importante el 'px'
    btnNo.style.top = result.y + 'px';

    // Mostrar la frase que nos dio el dominio
    browserAdapter.updateTextContent(messageBox, result.message);

    // Efectos visuales extra (Infraestructura)
    browserAdapter.toggleBrokenHearts(true);     // Romper corazones
    browserAdapter.toggleButtonHighlight('si', true); // Hacer que el SÍ palpite
    browserAdapter.changeImageDudu(duduImg, result.sadImg);
}

btnNo.addEventListener('mouseover', handleReject);
btnNo.addEventListener('touchstart', handleReject, {passive: false});

// 4. EL FINAL FELIZ: Evento Click en Sí
btnSi.addEventListener('click', () => {
    // A. Actualizar Dominio
    proposal.accept();

    const result = moveButtonUseCase.executeYes();

    // B. Actualizar Visuales
    browserAdapter.toggleBrokenHearts(false); // Reparar corazones
    browserAdapter.toggleButtonHighlight('si', false); // Apagar el palpitar

    // Ocultar el botón NO para siempre
    btnNo.style.display = 'none';
    btnSi.style.display = 'none';

    // Mensaje final
    browserAdapter.updateTextContent('title-question', result.message);
    browserAdapter.updateTextContent(messageBox, result.reward);

    // Fiesta de corazones
    // OPTIMIZE create a function in infrastructure cap for active the heart-party
    browserAdapter.activeHeartParty();

    // Cambiar imagen (Opcional, si tienes el gif feliz)
    browserAdapter.changeImageDudu(duduImg, result.img)
});