// tab shop control 
const tab__shop$ = document.querySelector.bind(document);
const tab__shop$$ = document.querySelectorAll.bind(document);

const tab__shops = tab__shop$$(".shop__details-tab-nav-item");
const panel__shops = tab__shop$$(".shop__details-tab-pane");
 
const tab__shop__active = tab__shop$(".shop__details-tab-nav-item.active");


tab__shops.forEach((tab__shop, index__tab__shop) => {
  const panel__shop = panel__shops[index__tab__shop];

  tab__shop.onclick = function () {
    tab__shop$(".shop__details-tab-nav-item.active").classList.remove("active");
    tab__shop$(".shop__details-tab-pane.active").classList.remove("active");

    this.classList.add("active");
    panel__shop.classList.add("active");
  };
});

// shop show img 
const add__img__cover = document.getElementById('add__img__cover');
const cancel__img__cover = document.getElementById('cancel__img__cover')


add__img__cover.onchange = evt => {
  const [file] = add__img__cover.files
  if (file) {
    shop__img__cover__show.src = URL.createObjectURL(file)
    shop__img__cover__show.style.display = "block"
  } 
}

cancel__img__cover.onclick = evt => {
  const [file] = add__img__cover.files
  if (file) {
    shop__img__cover__show.src = ""
    shop__img__cover__show.style.display = "none"
  }
}


// shop slide show modal full
let imgs = document.getElementsByClassName('modal__lib-content-nav-item-img');

let activeImg = document.getElementsByClassName('modal__lib-content-nav-item-img--active');

for (var i=0; i < imgs.length; i++) {     
        imgs[i].addEventListener('mouseover', function(){
            
            if (activeImg.length > 0) {
                activeImg[0].classList.remove('modal__lib-content-nav-item-img--active')
            }
    
            this.classList.add('modal__lib-content-nav-item-img--active')
            document.getElementById('imgShow').src = this.src
        })  
}

let imgWrap__next = document.getElementById('imgWrap__next');
let imgWrap__prev = document.getElementById('imgWrap__prev');

imgWrap__prev.addEventListener('click', function(){
    document.getElementById('imgWrap__img').scrollLeft -= 180
})

imgWrap__next.addEventListener('click', function(){
    document.getElementById('imgWrap__img').scrollLeft += 180
})

// copy link
function myFunction() {
  var copyText = document.getElementById("copy__link");
  copyText.select();
  document.execCommand("copy");
}

function myFunction2() {
  var copyText = document.getElementById("phone__copy");
  copyText.select();
  document.execCommand("copy");
}

// out form cmt





// document.addEventListener("click", function(evt) {
//   var label__id = document.getElementById('label__id');
//   var cmt =  document.getElementById('form__cmt');
//   var name = document.getElementById('form__name');
//   var email = document.getElementById('form__email');
//   var shop__vote__star = document.getElementById('shop__vote__star');
//   var active = document.getElementById('koko');
//   var control__cancel = document.getElementById('control__cancel');
//       targetElement = evt.target;  

//   do {
//       if (targetElement == active || cmt.value !== '' || name.value !== '' || email.value !== '') {
//         shop__vote__star.style.display = 'block';
//         // if(shop__vote__star.style.display === 'block') {
//         //   label__id.style.display = 'none';
//         // } else {
//         //   label__id.style.display = 'block';
//         // }
//         // alert('trong')
//           return;
//       }
//       targetElement = targetElement.parentNode;
//   } while (targetElement);

//   shop__vote__star.style.display = 'none';
//   label__id.style.display = 'block';

//   // alert('ngoai')
// });

document.addEventListener("click", function(evt) {
  var label__id = document.getElementById('label__id');
  var cmt =  document.getElementById('form__cmt');
  var name = document.getElementById('form__name');
  var email = document.getElementById('form__email');
  var shop__vote__star = document.getElementById('shop__vote__star');
  var active = document.getElementById('koko');
  var control__cancel = document.getElementById('control__cancel');
      targetElement = evt.target;  

  do {
      if (targetElement == active || cmt.value !== '' || name.value !== '' || email.value !== '') {
        shop__vote__star.style.display = 'block';
        label__id.style.display = 'none';
        // if(shop__vote__star.style.display === 'block') {
        //   label__id.style.display = 'none';
        // } else {
        //   label__id.style.display = 'block';
        // }
        return;
      }
      
      targetElement = targetElement.parentNode;
  } while (targetElement);
  
  shop__vote__star.style.display = 'none';
  label__id.style.display = 'block';
  
  // alert('ngoai')
});

control__cancel.onclick = function () {
          
  if(shop__vote__star.style.display === 'block') {
    alert('ẩn')
    shop__vote__star.style.display = 'none';
    label__id.style.display = 'block';
    label__id.style.background = 'red';
  } 
}


function show__form() {
  var label__id = document.getElementById('label__id');
  var shop__vote__star = document.getElementById('shop__vote__star');

  if(shop__vote__star.style.display === 'block') {
    shop__vote__star.style.display = 'none';
    label__id.style.display = 'block';
  } else {
    shop__vote__star.style.display = 'block';
    label__id.style.display = 'none';
  }
}

function show__form2() {
  var label__id = document.getElementById('label__id');
  var shop__vote__star = document.getElementById('shop__vote__star');
  alert('oke')
  if(shop__vote__star.style.display === 'block') {
    shop__vote__star.style.display = 'none';
    label__id.style.display = 'block';
  } else {
    shop__vote__star.style.display = 'block';
    label__id.style.display = 'none';
  }
}

function show__help() {
  var label__id = document.getElementById('label__id');
  var shop__vote__star = document.getElementById('shop__vote__star');
  var cmt =  document.getElementById('form__cmt');
  var name = document.getElementById('form__name');
  var email = document.getElementById('form__email');

  if(cmt.value === '' && name.value === '' && email.value === '') {
    shop__vote__star.style.display = 'none';
    label__id.style.display = 'block';
  };

  if(cmt.value !== '' || name.value !== '' || email.value !== '') {
    shop__vote__star.style.display = 'block';
    label__id.style.display = 'none';
  };

}
