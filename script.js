function countCharacters() {
    const textArea= document.getElementById("textArea");
    const charCount= document.getElementById("charCount");
    const text= textArea.value;
    charCount.textContent= text.length + " caracteres";
}