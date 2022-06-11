let mouseMove = document.querySelector("body");
let xy = document.querySelector("#xy");
let x = document.querySelector("#x");
let y = document.querySelector("#y");
let h1 = document.querySelector("h1");
let header = document.querySelector(".header");

mouseMove.addEventListener("mousemove", (e) => {
    console.log(e);
    x.innerText = e.pageX;
    y.innerText = e.pageY;

    if (e.pageX > (document.body.clientWidth - 140)) {
        xy.style.left = (e.pageX - 140) + 'px';
    }
    else {
        xy.style.left = e.pageX + 'px';
    }

    if (e.pageY < 100) {
        xy.style.top = (e.pageY + 100) + 'px';
    }
    else {
        xy.style.top = e.pageY + 'px';
    }


    if (e.pageX % 50 === 0 || e.pageY % 50 === 0) {
        xy.style.color = "rgb("
            + Math.random(e.pageX) * 255
            + ",0,"
            + Math.random(e.pageY) * 255 + ")";
    }

    if(e.pageX % 50 === 0 || e.pageY % 50 === 0) {
    h1.style.color = "rgb("
        + Math.random(e.pageX) * 255
        + ",0,"
        + Math.random(e.pageY) * 255 + ")";
    }
});

header.addEventListener("mouseenter", (e) => {
    h1.style.visibility = 'hidden';
});

header.addEventListener("mouseleave", (e) => {
    h1.style.visibility = 'visible';
});