function goToScreen2() {
    let name = document.getElementById("username").value;
    if (name.trim() === "") {
        alert("يرجى إدخال اسمك!");
        return;
    }
    localStorage.setItem("username", name);
    gsap.to("#screen1", { opacity: 0, duration: 0.5, onComplete: () => {
        document.getElementById("screen1").classList.add("hidden");
        document.getElementById("screen2").classList.remove("hidden");
        gsap.from("#screen2", { opacity: 0, duration: 0.5 });
    }});
}

function startLoading() {
    let progressBar = document.getElementById("progress-bar");
    gsap.to(progressBar, { width: "100%", duration: 2, onComplete: explodeEffect });
}

function explodeEffect() {
    let explosion = document.getElementById("explosion");
    explosion.classList.remove("hidden");

    gsap.to(explosion, { scale: 3, opacity: 1, duration: 0.5, onComplete: () => {
        gsap.to(explosion, { opacity: 0, duration: 0.3, onComplete: showFinalScreen });
    }});
}

function showFinalScreen() {
    document.getElementById("screen2").classList.add("hidden");
    document.getElementById("screen3").classList.remove("hidden");

    let name = localStorage.getItem("username");
    document.getElementById("final-message").innerHTML = `✨ عيد مبارك يا ${name}! ✨`;

    gsap.from("#final-message", { scale: 0, duration: 0.5, ease: "bounce.out" });
}
