/* scripts.js */
const typewriter = document.querySelector('.typewriter');
const roles = ["Cybersecurity Specialist", "Penetration Tester", "Network Engineer"];
let index = 0;
let charIndex = 0;
let currentRole = '';
let isDeleting = false;

function type() {
    if (isDeleting) {
        currentRole = roles[index].substring(0, charIndex--);
    } else {
        currentRole = roles[index].substring(0, charIndex++);
    }

    typewriter.textContent = currentRole;

    if (!isDeleting && charIndex === roles[index].length) {
        setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % roles.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

document.addEventListener('DOMContentLoaded', type);
