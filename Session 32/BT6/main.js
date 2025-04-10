function changeFontSize(value) {
    let textElement = document.getElementById("text");
    let currentSize = parseInt(window.getComputedStyle(textElement).fontSize);
    textElement.style.fontSize = (currentSize + value) + "px";
}