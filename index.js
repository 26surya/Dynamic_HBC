
document.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById("bgMusic");
    let playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("Autoplay prevented. Waiting for user interaction.");
        });
    }
});

