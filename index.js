document.getElementById("no-btn").addEventListener("click", function () {
    const noBtn = this;
    const containerSize = 200; 
    const btnRect = noBtn.getBoundingClientRect();

    
    const viewportWidth = Math.min(window.innerWidth, containerSize);
    const viewportHeight = Math.min(window.innerHeight, containerSize);

    
    const maxX = viewportWidth - btnRect.width;
    const maxY = viewportHeight - btnRect.height;

    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    
    noBtn.style.transition = "transform 0.3s ease-in-out";
    noBtn.style.transform = `translate(${randomX - btnRect.left}px, ${randomY - btnRect.top}px)`;

    
    const audioFiles = [
        "/audio/office-no.mp3",
        "/audio/no-x5-95904.mp3",
        "/audio/no-no-no-no-no-katt16-102131.mp3",
        "/audio/oh-no-125748.mp3"
    ];

    let currentAudio = document.querySelector("audio");
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio.remove();
    }

    const newAudio = new Audio(audioFiles[Math.floor(Math.random() * audioFiles.length)]);
    newAudio.play();
    document.body.appendChild(newAudio);

    
    let dialog = document.querySelector(".dialog");
    if (!dialog) {
        dialog = document.createElement("div");
        dialog.classList.add("dialog");
        document.body.appendChild(dialog);
    }

    const messages = [
        "Bebi...",
        "Why naman ayaw mo? 😢",
        "Really?",
        "Isa, Iiyak 'ko 😭",
        "Please say yes 🥺",
        "I love you :'<",
        "Please lang 😭",
        "Bebi naman ehh"
    ];
    dialog.textContent = messages[Math.floor(Math.random() * messages.length)];

    function updateDialogPosition() {
        const newBtnRect = noBtn.getBoundingClientRect();
        dialog.style.left = `${newBtnRect.left + window.scrollX + newBtnRect.width / 2 - dialog.offsetWidth / 2}px`;
        dialog.style.top = `${newBtnRect.top + window.scrollY - dialog.offsetHeight - 10}px`;
    }

    let followInterval = setInterval(updateDialogPosition, 10);

    setTimeout(() => {
        clearInterval(followInterval);
        setTimeout(() => {
            dialog.remove();
        }, 500);
    }, 1500);
});
