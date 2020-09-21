const body = document.querySelector('body');
let eraser;
const vw = window.innerWidth;
function randomNum() {
    return (Math.floor(Math.random() * 6))
}
const num = randomNum();
$('body').on('mousemove', function (event) {
    eraser = document.createElement('span');
    console.log(num);
    if (num == 0) {
        $('span').addClass('class0');
    }
    if (num == 1) {
        $('span').addClass('class1');
    }
    if (num == 2) {
        $('span').addClass('class2');
    }
    if (num == 3) {
        $('span').addClass('class3');
    }
    if (num == 4) {
        $('span').addClass('class4');
    } 
    if (num == 5) {
        $('span').addClass('class5');
    }
    eraser.style.left = event.clientX - vw * 4 / 100 + 'px';
    eraser.style.top = event.clientY - vw * 4 / 100 + 'px';
    body.appendChild(eraser);
    setTimeout(function () {
        document.querySelector('span').remove();
    }, 5000);
});



