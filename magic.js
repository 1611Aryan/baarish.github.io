const body = document.querySelector('body');
let eraser;
const vw = window.innerWidth;

    $('body').on('mousemove', function (event) {
        eraser = document.createElement('span');
        eraser.style.left = event.clientX - vw * 4 / 100 + 'px';
        eraser.style.top = event.clientY - vw * 4 / 100 + 'px';
        body.appendChild(eraser);
        setTimeout(function () {
            document.querySelector('span').remove();
        }, 1000);

    $('body').on('mouseup', function (event) {

        $('span').remove();

    });
});

