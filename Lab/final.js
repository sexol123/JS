var imgWidth = 433; //img size
var margin = 0; //
var timer;
var delay = 3000; //timer
var currentPosition = 0;
var clickedImg = false;
// var listImg = document.querySelectorAll('slider > img');
var listImg = document.getElementsByClassName('img');
document.getElementById('prev').onclick = function() {
    sprev();
    clearInterval(timer);
    timer = setInterval(sprev, delay);
}

function sprev() {
    var slider = document.getElementById('slider');
    slider.style.position = 'relative';
    margin = margin - imgWidth;
    if (currentPosition == listImg.length - 1) {
        currentPosition = 0;
        margin = 0;
    } else {
        currentPosition++;
    }
    borderMini();
    slider.style.left = margin + 'px';
}
document.getElementById('next').onclick = function() {
    snext();
    clearInterval(timer);
    timer = setInterval(snext, delay);
};

function snext() {
    var slider = document.getElementById('slider');
    slider.style.position = 'relative';
    if (currentPosition <= 0) {
        currentPosition = listImg.length - 1;
        margin = -(currentPosition * imgWidth);
    } else {
        margin = margin + imgWidth;
        currentPosition--;
    }
    borderMini();
    slider.style.left = margin + 'px';
}


(function() {
    timer = setInterval(sprev, delay);
})();
var carusel = document.getElementById('carusel');
document.getElementById('slider').onclick = function cli() {
    if (clickedImg == false) {
        clearInterval(timer);
        document.body.style.backgroundColor = 'black';
        carusel.style.width = 700 + 'px';
        var img = document.querySelectorAll("#slider > img");
        img[currentPosition].style.width = 700 + 'px';
        clickedImg = true;
        document.getElementById('prev').style.display = 'none';
        document.getElementById('next').style.display = 'none';
    } else {
        document.body.style.backgroundColor = 'white';
        carusel.style.width = imgWidth + 'px';
        var img = document.querySelectorAll("#slider > img");
        img[currentPosition].style.width = imgWidth + 'px';
        clickedImg = false;
        document.getElementById('prev').style.display = 'block';
        document.getElementById('next').style.display = 'block';
        timer = setInterval(sprev, delay);
    }
    minidisplay(clickedImg);

}

function minidisplay(see) {
    document.getElementById('slider2').style.display = 'block';
    if (see) {
        document.getElementById('slider2').style.display = 'none';
    }
}

function borderMini() {
    var img = document.querySelectorAll("#slider2 > img");
    for (var i = 0; i < img.length; i++) {
        // img[i].style.width = 40 + 'px';
        img[i].style.opacity = 0.3;
    }
    // img[currentPosition].style.width = 80 + 'px';
    img[currentPosition].style.opacity = 1.0;
}