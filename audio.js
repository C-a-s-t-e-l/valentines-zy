document.addEventListener("DOMContentLoaded", () => {
    let audio;

    
    if (!window.persistedAudio) {
        audio = new Audio("/audio/Space Date..mp3");
        audio.loop = true; 
        audio.volume = 0.5; 

        
        window.persistedAudio = audio;

        
        const savedTime = sessionStorage.getItem("audioTime");
        if (savedTime) {
            audio.currentTime = parseFloat(savedTime); 
        }

        
        const isPaused = sessionStorage.getItem("audioPaused") === "true";
        if (!isPaused) {
            audio.play().catch(error => console.log("Autoplay blocked:", error));
        }
    } else {
        audio = window.persistedAudio;
    }

    
    setInterval(() => {
        if (!audio.paused) {
            sessionStorage.setItem("audioTime", audio.currentTime);
        }
    }, 1000); 

    
    window.addEventListener("beforeunload", () => {
        sessionStorage.setItem("audioPaused", audio.paused ? "true" : "false");
    });

    
    document.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
        }
    });
});
