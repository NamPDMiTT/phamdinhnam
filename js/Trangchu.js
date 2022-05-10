var slide = document.getElementById('slide');
var picture = [
    'anh1.jpeg',
    'anh2.jpg',
    'anh3.jpg',
    'anh4.jpg',
    'anh5.jpg',
    'anh6.jpeg',
    'anh7.jpg'
];
var len = picture.length;
var count = 0;
var number = document.getElementById('number');

function next() {
    if (count >= len - 1) {
        count = 0;
        slide.src = 'img/' + picture[count];
        number.innerText = 1;
    } else {
        count++;
        slide.src = 'img/' + picture[count];
        number.innerText++;
    }
}

function previous() {
    if (count == 0) {
        count = len - 1;
        slide.src = 'img/' + picture[count];
        number.innerText = 7;
    } else {
        count--;
        slide.src = 'img/' + picture[count];
        number.innerText--;
    }
}