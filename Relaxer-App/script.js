const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = (totalTime / 5);

function breatheAnimation() {
    text.innerText = 'Breathe In!';
    container.classList.add('grow');

    setTimeout(() => {
        text.innerText = 'Hold';
        
        setTimeout(() => {
            text.innerText = 'Breathe Out!';
            container.classList.add('shrink');

        }, holdTime);

    }, breatheTime);
}

setInterval(breatheAnimation, totalTime);

breatheAnimation()

