document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById('counter');
    const target = +counter.getAttribute('data-target');
    const speed = 200; // velocidade da animação, quanto menor o número, mais rápido

    const updateCount = () => {
        const currentCount = +counter.innerText;
        const increment = target / speed;

        if (currentCount < target) {
            counter.innerText = Math.ceil(currentCount + increment);
            setTimeout(updateCount, 10);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});
