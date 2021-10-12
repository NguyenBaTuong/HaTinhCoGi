
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
// post__tab();

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
  var alls = document.querySelectorAll('.adUser__addxshop-page');
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
      alls[cur - 2].classList.remove('active');
      alls[cur -1].classList.add('active');
  }); 

  next1.addEventListener('click', function(){
      silder.style.marginLeft = '-50%';
      con[cur - 1].classList.add('active');
      cur += 1;
      alls[cur - 2].classList.remove('active');
      alls[cur -1].classList.add('active');
  }); 

  next2.addEventListener('click', function(){
      silder.style.marginLeft = '-75%';
      con[cur - 1].classList.add('active');
      cur += 1;
      alls[cur - 2].classList.remove('active');
      alls[cur -1].classList.add('active');
  }); 

  submit.addEventListener('click', function(){
      con[cur - 1].classList.add('active');
      cur += 1;
  }); 

  prev.addEventListener('click', function(){
      silder.style.marginLeft = '0%';
      con[cur - 2].classList.remove('active');
      cur -= 1;
      alls[cur].classList.remove('active');
      alls[cur - 1].classList.add('active');
  }); 

  prev1.addEventListener('click', function(){
      silder.style.marginLeft = '-25%';
      con[cur - 2].classList.remove('active');
      cur -= 1;
      alls[cur].classList.remove('active');
      alls[cur - 1].classList.add('active');
  }); 

  prev2.addEventListener('click', function(){
      silder.style.marginLeft = '-50%';
      con[cur - 2].classList.remove('active');
      cur -= 1;
      alls[cur].classList.remove('active');
      alls[cur - 1].classList.add('active');
  }); 
}
step__ad();

function step__ad__post() {
  var silder = document.querySelector('.adUser__addxshop-page.post');
  var alls = document.querySelectorAll('.adUser__addxshop-page.post');
  var next = document.querySelector('.post__ad__next');
  var prev = document.querySelector('.post__ac__prev1');
  var next1 = document.querySelector('.post__ac__next1');
  var prev1 = document.querySelector('.post__ac__prev2');
  var next2 = document.querySelector('.post__ac__next2');
  var prev2 = document.querySelector('.post__ac__prev3');
  var submit = document.querySelector('.post__ac__submit');
  var con = document.querySelectorAll('.adUser__addxshop-bar-step.post');
  let cur = 1;


  next.addEventListener('click', function(){
      silder.style.marginLeft = '-25%';
      con[cur - 1].classList.add('active');
      cur += 1;
      console.log(cur)
      alls[cur - 2].classList.remove('active');
      alls[cur -1].classList.add('active');
  }); 

  next1.addEventListener('click', function(){
      silder.style.marginLeft = '-50%';
      con[cur - 1].classList.add('active');
      cur += 1;
      alls[cur - 2].classList.remove('active');
      alls[cur -1].classList.add('active');
  }); 

  next2.addEventListener('click', function(){
      silder.style.marginLeft = '-75%';
      con[cur - 1].classList.add('active');
      cur += 1;
      alls[cur - 2].classList.remove('active');
      alls[cur -1].classList.add('active');
  }); 

  submit.addEventListener('click', function(){
      con[cur - 1].classList.add('active');
      cur += 1;
  }); 

  prev.addEventListener('click', function(){
      silder.style.marginLeft = '0%';
      con[cur - 2].classList.remove('active');
      cur -= 1;
      alls[cur].classList.remove('active');
      alls[cur - 1].classList.add('active');
  }); 

  prev1.addEventListener('click', function(){
      silder.style.marginLeft = '-25%';
      con[cur - 2].classList.remove('active');
      cur -= 1;
      alls[cur].classList.remove('active');
      alls[cur - 1].classList.add('active');
  }); 

  prev2.addEventListener('click', function(){
      silder.style.marginLeft = '-50%';
      con[cur - 2].classList.remove('active');
      cur -= 1;
      alls[cur].classList.remove('active');
      alls[cur - 1].classList.add('active');
  }); 
}
step__ad__post();

// 10/12
function convertslug(e){
  var id = e.id;
  var Text = document.getElementById(id).value;
  //Đổi chữ hoa thành chữ thường
  slug = Text.toLowerCase();

  //Đổi ký tự có dấu thành không dấu
  slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
  slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
  slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
  slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
  slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
  slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
  slug = slug.replace(/đ/gi, 'd');
  //Xóa các ký tự đặt biệt
  slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
  //Đổi khoảng trắng thành ký tự gạch ngang
  slug = slug.replace(/ /gi, "-");
  //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
  //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
  slug = slug.replace(/\-\-\-\-\-/gi, '-');
  slug = slug.replace(/\-\-\-\-/gi, '-');
  slug = slug.replace(/\-\-\-/gi, '-');
  slug = slug.replace(/\-\-/gi, '-');
  //Xóa các ký tự gạch ngang ở đầu và cuối
  slug = '@' + slug + '@';
  slug = slug.replace(/\@\-|\-\@|\@/gi, '');

  document.getElementById('slug__an').innerHTML = slug;
}

function update__link(){
  var element = document.getElementById('slug__an');
  // var id = e.id;
  // var idtd = id.split('__');
  // var element = document.getElementById(idtd[1])
  var OriginalContent = element.innerHTML.trim();

  element.innerHTML= '<input class="input__mt" type="text" value="'+OriginalContent+'"/>';
  var childinput = element.getElementsByClassName('input__mt')[0];
  childinput.focus();

  childinput.onkeydown = function (e) {
      if (e.keyCode == 13) {
          var newContent = childinput.value;
          element.innerHTML= newContent;
      } 
  }
  
  childinput.onblur = function(){
      var newContent = childinput.value;
      element.innerHTML= newContent;
  }                       
}

function add__new__shop() {
  var control = document.getElementById('shop__tab__list');
  var input = document.getElementById('shop__add__name');

  control.onclick = function() {
    input.focus();
  }
}
add__new__shop();