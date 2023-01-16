let circleEl1 = document.getElementById('circle1');
let circleEl2 = document.getElementById('circle2');
let circleEl3 = document.getElementById('circle3');
let circleEl4 = document.getElementById('circle4');

circleEl1.onclick = function() {
    arrowEL1.style.marginRight = "auto";
    console.log('clicked1');
    circleEl1.classList.add('grey-circle');
}
circleEl2.onclick = function() {
    arrowEL2.style.marginRight = "auto";
    console.log('clicked1');
    circleEl2.classList.add('grey-circle');
}
circleEl3.onclick = function() {
    arrowEL3.style.marginRight = "auto";
    console.log('clicked1');
    circleEl3.classList.add('grey-circle');
}
circleEl4.onclick = function() {
    arrowEL4.style.marginRight = "auto";
    console.log('clicked1');
    circleEl4.classList.add('grey-circle');
}

let arrowEL1 = document.getElementById('arrow1');
let ctx1 = arrowEL1.getContext("2d");
let arrowEL2 = document.getElementById('arrow2');
let ctx2 = arrowEL2.getContext("2d");
let arrowEL3 = document.getElementById('arrow3');
let ctx3 = arrowEL3.getContext("2d");
let arrowEL4 = document.getElementById('arrow4');
let ctx4 = arrowEL4.getContext("2d");
canvas_concArrow(ctx1);
canvas_concArrow(ctx2);
canvas_concArrow(ctx3);
canvas_concArrow(ctx4);

function canvas_concArrow(ctx) {
    let fromx = 200;
    let fromy = 70;
    let tox = 30;
    let toy = 70;
    let height = 50;
    let width = 30;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.moveTo(tox + width, toy - height / 2);
    ctx.lineTo(tox + width, toy + height / 2);
    ctx.lineTo(tox - width, toy);
    ctx.fill();

}

let resetBtnEL = document.getElementById('resetBtn');
resetBtnEL.onclick = function() {
    arrowEL1.style.marginRight = "0";
    circleEl1.classList.remove('grey-circle');
    arrowEL2.style.marginRight = "0";
    circleEl2.classList.remove('grey-circle');
    arrowEL3.style.marginRight = "0";
    circleEl3.classList.remove('grey-circle');
    arrowEL4.style.marginRight = "0";
    circleEl4.classList.remove('grey-circle');
}