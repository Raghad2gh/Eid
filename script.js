function goToScreen2() {
    let username = document.getElementById("username").value;
    if (username.trim() === "") {
        alert("الرجاء إدخال اسمك");
        return;
    }
    localStorage.setItem("username", username); // حفظ الاسم
    document.getElementById("screen1").style.display = "none";
    document.getElementById("screen2").style.display = "flex";
}

function explode() {
    document.getElementById("screen2").style.display = "none";
    document.getElementById("screen3").style.display = "flex";

    let username = localStorage.getItem("username");
    document.getElementById("greeting").innerHTML = `عيدك سعيد يا ${username}! 🎉🎊`;

    let explosion = document.getElementById("explosion");
    explosion.style.display = "block";

    setTimeout(() => {
        explosion.style.display = "none";
    }, 1000);
}
