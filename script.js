let fontSize = 16;

// Funções de Zoom
function increaseZoom() {
    fontSize += 2;
    document.body.style.fontSize = fontSize + 'px';
}

function decreaseZoom() {
    if (fontSize > 12) {
        fontSize -= 2;
        document.body.style.fontSize = fontSize + 'px';
    }
}

function resetZoom() {
    fontSize = 16;
    document.body.style.fontSize = fontSize + 'px';
}

// Adicionar Botões no Body
const zoomControls = document.createElement('div');
zoomControls.innerHTML = `
    <button onclick="increaseZoom()">A+</button>
    <button onclick="decreaseZoom()">A-</button>
    <button onclick="resetZoom()">Resetar</button>
`;
zoomControls.style.position = 'fixed';
zoomControls.style.bottom = '20px';
zoomControls.style.right = '20px';
zoomControls.style.backgroundColor = '#fff';
zoomControls.style.padding = '10px';
zoomControls.style.border = '1px solid #ccc';
zoomControls.style.borderRadius = '5px';
document.body.appendChild(zoomControls);
