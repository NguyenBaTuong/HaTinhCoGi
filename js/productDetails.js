function sizea(e) {
    var id = e.id;
    var id__get = document.getElementById(id);

    if(!id__get.classList.contains('active')) {
        size__reset();
        id__get.classList.add('active');
    } else {
        id__get.classList.remove('active');
    }
}
function size__reset() {
    var active = document.getElementsByClassName('productDetail__content-size-item');

    for(var i = 0; i < active.length; i++) {
        active[i].classList.remove('active');
    } 
}

function nav__img(e) {
    var id = e.id;
    var show = document.getElementById('nav__img');
    var id__sp = id.split('__');
    var img = document.getElementById(`${id__sp[0]}__${id__sp[1]}__avt`);
    var img__src = img.src;
    
    show.src = img__src;
}
