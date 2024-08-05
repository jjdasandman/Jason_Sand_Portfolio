// Matrix effect JS code
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, window.innerHeight);

var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
letters = letters.split('');

var fontSize = 10,
    columns = canvas.width / fontSize;

var drops = [];
for (var i = 0; i < columns; i++) {
    drops[i] = 1;
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, .1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#0f0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
            drops[i] = 0;
        }
    }
}

setInterval(draw, 33);

// Resize canvas on window resize
window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, window.innerHeight);
    columns = canvas.width / fontSize;
    drops = [];
    for (var i = 0; i < columns; i++) {
        drops[i] = 1;
    }
});

// Script to handle navigation and show/hide content sections
const navLinks = document.querySelectorAll('.navbar a');
const contentSections = document.querySelectorAll('.content');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);

        contentSections.forEach(section => {
            if (section.id === targetId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
});
