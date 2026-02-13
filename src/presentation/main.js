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
const messageBox = document.getElementById('feedback-message');
const duduImg = document.getElementById('dudu-img');

// 3. EL "CUÁNDO": Evento Hover (Solo existe en web)
btnNo.addEventListener('mouseover', () => {
    // A. Aspectos visuales inmediatos
    btnNo.style.position = 'absolute'; // Ahora sí permitimos que vuele

    // B. EJECUTAR CASO DE USO (El cerebro)
    const result = moveButtonUseCase.execute('card', 'no');

    // C. Aplicar los resultados del caso de uso al mundo real
    btnNo.style.left = result.x + 'px'; // Importante el 'px'
    btnNo.style.top = result.y + 'px';

    // Mostrar la frase que nos dio el dominio
    messageBox.textContent = result.message;
    messageBox.style.opacity = "1";

    // Efectos visuales extra (Infraestructura)
    browserAdapter.toggleBrokenHearts(true);     // Romper corazones
    browserAdapter.toggleButtonHighlight('si', true); // Hacer que el SÍ palpite
    browserAdapter.changeImageDudu('dudu-img', result.sadImg, result.happyImg, true);
});

// 4. EL FINAL FELIZ: Evento Click en Sí
btnSi.addEventListener('click', () => {
    // A. Actualizar Dominio
    proposal.accept();

    // B. Actualizar Visuales
    browserAdapter.toggleBrokenHearts(false); // Reparar corazones
    browserAdapter.toggleButtonHighlight('si', false); // Apagar el palpitar

    // Ocultar el botón NO para siempre
    btnNo.style.display = 'none';

    // Mensaje final
    messageBox.textContent = "¡Sabía que dirías que sí! ❤️ Te amo";
    messageBox.style.color = "#ff4d4d";
    messageBox.style.fontSize = "1.2rem";

    // Fiesta de corazones
    const hearts = document.querySelectorAll('.heart-icon');
    hearts.forEach(icon => icon.classList.add('heart-party'));

    // Cambiar imagen (Opcional, si tienes el gif feliz)
    duduImg.src = "./src/presentation/image/dudu-bubu-dudu-love.gif";

    alert("¡Nos vemos el 14! 🌹");
});