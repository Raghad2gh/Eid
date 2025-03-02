// الانتقال من الشاشة 1 إلى 2
function goToScreen2() {
    document.getElementById("screen1").classList.add("hidden");
    document.getElementById("screen2").classList.remove("hidden");
}

// تشغيل تأثير الانفجار ثم الانتقال للتهنئة
function explode() {
    let button = document.querySelector("#screen2 button");
    button.classList.add("explode");

    setTimeout(() => {
        document.getElementById("screen2").classList.add("hidden");
        document.getElementById("screen3").classList.remove("hidden");

        // تكبير الخط عند الانفجار
        document.getElementById("greeting").style.fontSize = "50px";
    }, 1000);
}
