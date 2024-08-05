document.addEventListener('DOMContentLoaded', (event) => {
    const typewriter = document.querySelector('.typewriter');
    const words = ["Cybersecurity Specialist", "Penetration Tester", "Network Security Expert"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let wait = 2000;

    function type() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            typewriter.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, 50);
            }
        } else {
            typewriter.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, wait);
            } else {
                setTimeout(type, 100);
            }
        }
    }

    type();
});
