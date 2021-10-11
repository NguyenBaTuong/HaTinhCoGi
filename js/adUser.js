
const tab__adUser$ = document.querySelector.bind(document);
const tab__adUser$$ = document.querySelectorAll.bind(document);

const tab__adUsers = tab__adUser$$(".adUser__sliderbar-item");
const panel__ifmtos = tab__adUser$$(".adUser__content-panel");
 
const tab__adUserActive = tab__adUser$(".adUser__sliderbar-item.active");

const nav = document.getElementById('adUser__navson');
const input = document.getElementById('adUser__input');

tab__adUsers.forEach((tab__adUser, index__tab__adUser) => {
  const panel__ifmto = panel__ifmtos[index__tab__adUser];

  tab__adUser.onclick = function () {
    tab__adUser$(".adUser__sliderbar-item.active").classList.remove("active");
    tab__adUser$(".adUser__content-panel.active").classList.remove("active");

    this.classList.add("active");
    panel__ifmto.classList.add("active");
    nav.classList.add('none__tl');
    input.checked = false
  };
});

function addaddress(){
  var num = Number($('#shop__place').val()) + 1;
  $('#shop__place').val(num);
  $('#place__box').append('<div class="adUser__form-input-block" id="address'+num+'"><input class="adUser__form-input form-control mb--adUser" id="address" type="text" name="" placeholder="Địa chỉ"><div class="adUser__form-input-close" onclick="return deleteaddress('+num+')"><i class="fal fa-times"></i></div></div><div class="form-message"></div>');
}

function deleteaddress(idaddress){
  $('#address'+idaddress).remove();
}

function add__service() {
  var add__sv__group = document.getElementById('add__sv__group');
  var show__add__sv = document.getElementById('show__add__sv');
  if (show__add__sv.checked == 0) {
    add__sv__group.style.display = 'flex';
  } else {
    add__sv__group.style.display = 'none';
  }
}

function show__nav() {
  var input = document.getElementById('adUser__input');
  var nav = document.getElementById('adUser__navson');
  var w = $(window).width();
  if (w > 1024) {
    if( input.checked == 0) {
      nav.classList.add('none__tl');
      nav.classList.add('none');
    } else {
      nav.classList.remove('none__tl');
      nav.classList.remove('none');
    };
  }

  if (w < 1024) {
    if( input.checked == true) {
      nav.classList.add('none__tl');
      nav.classList.add('none');
    } else {
      nav.classList.remove('none__tl');
      nav.classList.remove('none');
    };
  }
};

function post__tab() {
  var post__tab__add = document.getElementById('post__tab__add');
  var post__list = document.getElementById('post__list');
  var post__add = document.getElementById('post__add');

  post__tab__add.onclick = function() {
    post__list.style.display = 'block';
    post__add.style.display = 'none';
  }
}
post__tab();

function shop__tab() {
  var shop__tab__add = document.getElementById('shop__tab__add');
  var shop__list = document.getElementById('shop__list');
  var shop__add = document.getElementById('shop__add');

  shop__tab__add.onclick = function() {
    shop__list.style.display = 'block';
    shop__add.style.display = 'none';
  }
}
// shop__tab();

function shop__list() {
  var shop__tab__list = document.getElementById('shop__tab__list');
  var shop__list = document.getElementById('shop__list');
  var shop__add = document.getElementById('shop__add');

  shop__tab__list.onclick = function() {
    shop__list.style.display = 'none';
    shop__add.style.display = 'block';
  }
}
// shop__list();

function post__list() {
  var post__tab__list = document.getElementById('post__tab__list');
  var post__list = document.getElementById('post__list');
  var post__add = document.getElementById('post__add');

  post__tab__list.onclick = function() {
    post__list.style.display = 'none';
    post__add.style.display = 'block';
  }
}
post__list();


function post__input() {
  if($('#td__input1').is(":checked") == false) {
      $('.adUser__list-content-td-input').each(function(){ this.checked = false; });
  } else {
      $('.adUser__list-content-td-input').each(function(){ this.checked = true; });
  }
};

function shop__input() {
  if($('#shop__input1').is(":checked") == false) {
      $('.adUser__list-content-td-input--shop').each(function(){ this.checked = false; });
  } else {
      $('.adUser__list-content-td-input--shop').each(function(){ this.checked = true; });
  }
};
 
//10/09/2021
function step__ad() {
  var silder = document.querySelector('.adUser__addxshop-page');
  var next = document.querySelector('.ad__next');
  var prev = document.querySelector('.ac__prev1');
  var next1 = document.querySelector('.ac__next1');
  var prev1 = document.querySelector('.ac__prev2');
  var next2 = document.querySelector('.ac__next2');
  var prev2 = document.querySelector('.ac__prev3');
  var submit = document.querySelector('.ac__submit');
  var check = document.querySelectorAll('.adUser__addxshop-bar-step-check');
  var con = document.querySelectorAll('.adUser__addxshop-bar-step');
  var border = document.querySelectorAll('adUser__addxshop-bar-step-stt');
  let max = 4;
  let cur = 1;


  next.addEventListener('click', function(){
      silder.style.marginLeft = '-25%';
      con[cur - 1].classList.add('active');
      cur += 1;
  }); 

  next1.addEventListener('click', function(){
      silder.style.marginLeft = '-50%';
      con[cur - 1].classList.add('active');
      cur += 1;
  }); 

  next2.addEventListener('click', function(){
      silder.style.marginLeft = '-75%';
      con[cur - 1].classList.add('active');
      cur += 1;
  }); 

  submit.addEventListener('click', function(){
      con[cur - 1].classList.add('active');
      cur += 1;
      // location.reload();
  }); 

  prev.addEventListener('click', function(){
      silder.style.marginLeft = '0%';
       con[cur - 2].classList.remove('active');
      cur -= 1;

  }); 

  prev1.addEventListener('click', function(){
      silder.style.marginLeft = '-25%';
       con[cur - 2].classList.remove('active');
      cur -= 1;
  }); 

  prev2.addEventListener('click', function(){
      silder.style.marginLeft = '-50%';
       con[cur - 2].classList.remove('active');
      cur -= 1;
  }); 
}
step__ad();


