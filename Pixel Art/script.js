const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * 0.7;

let drawing = false;
let color = document.getElementById('colorPicker').value;
let brushSize = document.getElementById('brushSize').value;

document.getElementById('colorPicker').oninput = e => color = e.target.value;
document.getElementById('brushSize').oninput = e => brushSize = e.target.value;

canvas.addEventListener('pointerdown', e => { drawing = true; ctx.beginPath(); ctx.moveTo(e.offsetX,e.offsetY); });
canvas.addEventListener('pointerup', () => drawing = false);
canvas.addEventListener('pointermove', draw);

function draw(e){
    if(!drawing) return;
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.stroke();
}

document.getElementById('clearBtn').onclick = () => ctx.clearRect(0,0,canvas.width,canvas.height);
document.getElementById('saveBtn').onclick = () => {
    const link = document.createElement('a');
    link.download = 'pixelpad.png';
    link.href = canvas.toDataURL();
    link.click();
};
