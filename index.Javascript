function updateText() {
    const text = document.getElementById('textArea').value;
    const color = document.getElementById('colorPicker').value;
    const outputArea = document.getElementById('outputArea');
    outputArea.textContent = text;
    outputArea.style.color = color;
}
