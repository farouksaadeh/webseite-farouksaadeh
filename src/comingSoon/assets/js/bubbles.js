function createBubble() {
    const bubble = document.createElement("div");
    const size = Math.random() * 100 + 50;
    bubble.classList.add("bubble");
    bubble.style.left = `${Math.random() * window.innerWidth}px`;
    bubble.style.top = `${Math.random() * window.innerHeight}px`;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.backgroundColor = Math.random() > 0.5 ? '#21E8E6' : '#0558EE';

    document.body.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 5000);
}

setInterval(createBubble, 1000);
