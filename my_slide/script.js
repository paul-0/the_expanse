const mars = document.getElementById('mars');
const spaceship = document.getElementById('spaceship');

Reveal.initialize({
    controls: false,
    slideNumber: true,
    hash: true,
    margin: 0,
    transition: 'none',

    // Learn about plugins: https://revealjs.com/plugins/
    plugins: [ RevealNotes ],
}).then(() => {
    const trailSpan = document.querySelector('#spaceship .trail');
    for (let i = 0; i < 9; i++) {
        const span = document.createElement('span');
        span.classList.add('little-trail');
        span.style.right = `${5+ (Math.random() * 17)}%`;
        span.style.top = `${Math.random() * 15}%`;
        span.style.animationDelay = `${Math.random()*1.5}s`;
        span.style.animationDuration = `${0.45 + Math.random()}s`;
        trailSpan.appendChild(span);
    }
})

let marsPos = 0;
mars.onanimationend = () => {
    if (marsPos === 2) mars.hidden = true;
}
function updateObjects(pos) {
    marsPos = pos;
    switch (pos) {
        case 0:
            mars.hidden = false;
            mars.classList.remove('pos-1', 'pos-2', 'pos-3', 'pos-end');
            mars.classList.add('pos-0');
            spaceship.hidden = false;
            spaceship.classList.remove('pos-1');
            spaceship.classList.add('pos-0');
            break;
        case 1:
            mars.hidden = false;
            mars.classList.remove('pos-0', 'pos-2', 'pos-3', 'pos-end');
            mars.classList.add('pos-1');
            spaceship.hidden = false;
            spaceship.classList.remove('pos-0');
            spaceship.classList.add('pos-1');
            break;
        case 2:
            mars.hidden = false;
            mars.classList.remove('pos-0', 'pos-1', 'pos-3', 'pos-end');
            mars.classList.add('pos-2');
            spaceship.hidden = true;
            break;
        default:
            mars.hidden = true;
            spaceship.hidden = true;
            mars.classList.remove('pos-0', 'pos-1', 'pos-2', 'pos-end');
            mars.classList.add('pos-3');
    }
}
Reveal.on('ready', (event) => {
    updateObjects(event.indexh);
});
Reveal.on('slidechanged', (event) => {
    if (event.indexh === Reveal.getTotalSlides() - 1) {
        mars.hidden = false;
        mars.classList.remove('pos-0', 'pos-1', 'pos-2');
        mars.classList.add('pos-end');
    } else updateObjects(event.indexh);
});