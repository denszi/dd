/*let data = {
    photo: './images/home.png',
    title: 'Home',
    description: 'the house, apartment, etc. where you live, especially with your family'
}
$('#photo').attr('src',data.photo);
$('#title').append(data.title);
$('#description').append(data.description);*/

let currentPhoto = 0;
let imagesData = [
    {
        "photo": './images/home.png',
        "title": 'Home',
        "description": 'the house, apartment, etc. where you live, especially with your family'
    },
    {
        "photo": './images/lightbulb.jfif',
        "title": 'Light bulb',
        "description": 'a rounded glass container with a thin thread of metal inside that produces light when an electric current goes through it'
    },
    {
        "photo":' ./images/moon.jfif',
        "title": 'Moon',
        "description": 'the round object that moves in the sky around the earth and can be seen at night'
    },
    {
        "photo": './images/palm.jfif',
        "title": 'Palm tree',
        "description": 'a tree growing in warm regions and having a tall, straight trunk, no branches, and a mass of long, pointed leaves at the top'
    }
];

/*$('#photo').attr('src',imagesData[currentPhoto].photo);
$('#title').append(imagesData[currentPhoto].title);
$('#description').append(imagesData[currentPhoto].description);*/

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src',imagesData[photoNumber].photo);
    $('#title').text(imagesData[photoNumber].title);
    $('#description').text(imagesData[photoNumber].description);
}
loadPhoto(currentPhoto);

$('#left').click(() => {
    if(currentPhoto>0) {
        currentPhoto--;
    }
    loadPhoto(currentPhoto)
});

$('#right').click(() => {
    if(currentPhoto<3) {
        currentPhoto++;
    }
    loadPhoto(currentPhoto)
});




/*imagesData.forEach((item, index) => {
    $('#thumbnails').append(`<div class="box" data-index="${index}">
        <img class="thumbnail" src=${imagesData[index].photo}>${index}
    </div>`);
   });
});*/

imagesData.forEach((item, index) => {
    $('#thumbnails').append(
    `<div class="box">
        <img src=${imagesData[index].photo} class='thumbnail' data-index="${index}">
        <div class="hidden bubble">` + imagesData[index].title + `</div>
    </div>`);
    $('.thumbnail').css('border','5px dotted blue');
    $('.thumbnail').click(function(event) {
        let doIt = $(event.target).attr('data-index');
        $('#photo').attr('src',imagesData[doIt].photo);
        $('#title').text(imagesData[doIt].title);
        $('#description').text(imagesData[doIt].description);
    });
});

/*denszi.github.io*/