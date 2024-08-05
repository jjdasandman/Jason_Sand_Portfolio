document.addEventListener('DOMContentLoaded', function() {
    const typewriter = document.querySelector('.typewriter');
    const words = JSON.parse(typewriter.getAttribute('data-text'));
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = '';
    let currentLetters = '';

    function type() {
        if (letterIndex < words[wordIndex].length) {
            currentLetters = words[wordIndex].substring(0, ++letterIndex);
            typewriter.innerHTML = currentLetters;
            setTimeout(type, 200);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (letterIndex > 0) {
            currentLetters = words[wordIndex].substring(0, --letterIndex);
            typewriter.innerHTML = currentLetters;
            setTimeout(erase, 100);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 200);
        }
    }

    type();
});
