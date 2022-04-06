let bu = document.querySelector("section.changer"),
    se = document.querySelector("section.container"),
    img = document.querySelector(".img");
bu.addEventListener("click", function () {
    if (se.style.transform != "rotateY(180deg)") {
        se.style.transform = "rotateY(180deg)";
        img.style.transform = "translateX(150px) rotate(-270deg)";
    } else {
        se.style.transform = "rotateY(0deg)";
        img.style.transform = "translateX(0px) rotate(0deg)";
    }
});
let pass = document.getElementById("pass"),
    bi1 = document.getElementById("bi1"),
    bi2 = document.getElementById("bi2");
bi1.onclick = function () {
    pass.setAttribute("type", "text");
    this.style.display = "none";
    bi2.style.display = "block";
};
bi2.onclick = function () {
    pass.setAttribute("type", "password");
    this.style.display = "none";
    bi1.style.display = "block";
};
let em = document.getElementById("em");
em.onblur = function () {
    if (this.value !== "") {
        document.getElementById("es").style.transform =
            "translate3d(0, -136px, 50px)";
        // document.getElementById("es").style.color = "#1E2022";
        document.getElementById("es").style.fontSize = "12px";
    } else {
        document.getElementById("es").style.transform =
            "translate3d(35px, -111px, 50px)";
        // document.getElementById("es").style.color = "#52616B";
        document.getElementById("es").style.fontSize = "16px";
    }
};
pass.onblur = function () {
    if (this.value !== "") {
        document.getElementById("ps").style.transform =
            "translate3d(0, -18px, 50px)";
        // document.getElementById("ps").style.color = "#1E2022";
        document.getElementById("ps").style.fontSize = "12px";
    } else {
        document.getElementById("ps").style.transform =
            "translate3d(35px, 7px, 50px)";
        // document.getElementById("ps").style.color = "#52616B";
        document.getElementById("ps").style.fontSize = "16px";
    }
};
let pass2 = document.getElementById("pass2"),
    bi3 = document.getElementById("bi3"),
    bi4 = document.getElementById("bi4");
bi3.onclick = function () {
    pass2.setAttribute("type", "text");
    this.style.display = "none";
    bi4.style.display = "block";
};
bi4.onclick = function () {
    pass2.setAttribute("type", "password");
    this.style.display = "none";
    bi3.style.display = "block";
};
let fullName = document.getElementById("fullName");
fullName.onblur = function () {
    if (this.value !== "") {
        document.getElementById("fns").style.transform = "translate3d(0, -164px, 50px)";
        // document.getElementById("fns").style.color = "#1E2022";
        document.getElementById("fns").style.fontSize = "12px";
    } else {
        document.getElementById("fns").style.transform =
            "translate3d(35px, -139px, 50px)";
        // document.getElementById("fns").style.color = "#52616B";
        document.getElementById("fns").style.fontSize = "16px";
    }
};
let em2 = document.getElementById("em2");
em2.onblur = function () {
    if (this.value !== "") {
        document.getElementById("es2").style.transform =
            "translate3d(0, -78px, 50px)";
        // document.getElementById("es2").style.color = "#1E2022";
        document.getElementById("es2").style.fontSize = "12px";
    } else {
        document.getElementById("es2").style.transform =
            "translate3d(35px, -53px, 50px)";
        // document.getElementById("es2").style.color = "#52616B";
        document.getElementById("es2").style.fontSize = "16px";
    }
};
let rem = document.getElementById("rem");
rem.onblur = function () {
    if (this.value !== "") {
        document.getElementById("res").style.transform =
            "translate3d(0, 8px, 50px)";
        // document.getElementById("res").style.color = "#1E2022";
        document.getElementById("res").style.fontSize = "12px";
    } else {
        document.getElementById("res").style.transform =
            "translate3d(35px, 33px, 50px)";
        // document.getElementById("res").style.color = "#52616B";
        document.getElementById("res").style.fontSize = "16px";
    }
};
pass2.onblur = function () {
    if (this.value !== "") {
        document.getElementById("ps2").style.transform =
            "translate3d(0, 93px, 50px)";
        // document.getElementById("ps2").style.color = "#1E2022";
        document.getElementById("ps2").style.fontSize = "12px";
    } else {
        document.getElementById("ps2").style.transform =
            "translate3d(35px, 118px, 50px)";
        // document.getElementById("ps2").style.color = "#52616B";
        document.getElementById("ps2").style.fontSize = "16px";
    }
};
function validate() {
    const email = document.getElementById("em2").value;
    const ind = document.getElementById("ind");
    const pa = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.match(pa)) {
        ind.classList.add("valid");
        ind.classList.remove("invalid");
    } else {
        ind.classList.remove("valid");
        ind.classList.add("invalid");
    }
    if (email == "") {
        ind.classList.remove("valid");
        ind.classList.remove("invalid");
    }
}
function validate2() {
    const email = document.getElementById("em2").value;
    const email2 = document.getElementById("rem").value;
    const ind2 = document.getElementById("ind2");
    if (email2 == email) {
        ind2.classList.add("valid");
        ind2.classList.remove("invalid");
    } else {
        ind2.classList.remove("valid");
        ind2.classList.add("invalid");
    }
    if (email2 == "") {
        ind2.classList.remove("valid");
        ind2.classList.remove("invalid");
    }
}
document.getElementById("buf").onclick = function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }
    this.style.display = "none";
    document.getElementById("buf2").style.display = "block";
};
document.getElementById("buf2").onclick = function exitFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
    this.style.display = "none";
    document.getElementById("buf").style.display = "block";
};
document.querySelector("section.dark-switcher .bi-moon-stars").addEventListener("click", function () {
    document.body.classList.add("dark");
    this.style.display = "none";
    document.querySelector("section.dark-switcher .bi-sun").style.display = "block";
},false);
document.querySelector("section.dark-switcher .bi-sun").addEventListener("click", function () {
    document.body.classList.remove("dark");
    this.style.display = "none";
    document.querySelector("section.dark-switcher .bi-moon-stars").style.display = "block";
},false);