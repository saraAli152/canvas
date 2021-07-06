var mycan = document.querySelector("canvas");
mycan.width = window.innerWidth;
mycan.height = window.innerHeight;
var ctx = mycan.getContext("2d");
//get element
var inc = document.querySelector('[value="+"]');
var dec = document.querySelector('[value="-"]');
var save = document.querySelector('[value="save"]');
var color = document.querySelector('[type="color"]');
var radius = document.querySelector('[disabled]');
var del = document.querySelector('[value="delete"]');

var paint = document.querySelector('[value="paint"]');

window.addEventListener('load', function() {
    if (localStorage.color && localStorage.radius) {
        radius.value = localStorage.radius;
        color.value = localStorage.color;
    }

})

inc.addEventListener('click', function() {
    if (radius.value < 30)
        radius.value++;
})

dec.addEventListener('click', function() {
    if (radius.value > 10)
        radius.value--;
})
save.addEventListener('click', function() {
    localStorage.setItem('color', color.value);
    localStorage.setItem('raduis', radius.value);
})

function drowpoint(x, y, r, color) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
var flage = false;

mycan.addEventListener('mousedown', function() {
    flage = true;

})

mycan.addEventListener('mouseup', function() {
    flage = false;
})
mycan.addEventListener('mousemove', function(e) {
    if (flage) {
        drowpoint(e.x, e.y, radius.value, color.value);
    }

})
del.addEventListener('click', function(e) {

    color.value = "#ffffff";
})
paint.addEventListener("click", function() {
    color.value = localStorage.color;
})




















//var x = y = 40;
//var dx = 1,
//    dy = 5; 
//
//function drowpoint(x, y, r, color) {
//    ctx.beginPath();
//    ctx.arc(x, y, r, 0, 2 * Math.PI)
//    ctx.fillStyle = color;
//    ctx.fill();
//    ctx.closePath()
//}
//setInterval(() => {
//    ctx.clearRect(0, 0, 500, 400);
//drowpoint(x, y, 20, "#121212");
//x += dx;
//y += dy;
//if (y > mycan.height - 20 || y < 20) {
//    dy = -dy;
//
//}
//
//if (x > mycan.width - 20 || x < 20) {
//    dx = -dx;
//
//}
//}, 25);