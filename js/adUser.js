
const tab__adUser$ = document.querySelector.bind(document);
const tab__adUser$$ = document.querySelectorAll.bind(document);

const tab__adUsers = tab__adUser$$(".adUser__sliderbar-item");
const panel__ifmtos = tab__adUser$$(".adUser__content-panel");
 
const tab__adUserActive = tab__adUser$(".adUser__sliderbar-item.active");


tab__adUsers.forEach((tab__adUser, index__tab__adUser) => {
  const panel__ifmto = panel__ifmtos[index__tab__adUser];

  tab__adUser.onclick = function () {
    tab__adUser$(".adUser__sliderbar-item.active").classList.remove("active");
    tab__adUser$(".adUser__content-panel.active").classList.remove("active");

    this.classList.add("active");
    panel__ifmto.classList.add("active");
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

// show nav 

function show__control(e) {
  var adUser__control = document.getElementById('adUser__control');
  var adUser__navson = document.getElementById('adUser__navson');

  if (adUser__control.checked == true) {
    adUser__navson.style.display = 'block';
    adUser__control.style.display = 'none';
  } else {
    adUser__navson.style.display = 'none';
    adUser__control.style.display = 'block';
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
shop__tab();

function shop__list() {
  var shop__tab__list = document.getElementById('shop__tab__list');
  var shop__list = document.getElementById('shop__list');
  var shop__add = document.getElementById('shop__add');

  shop__tab__list.onclick = function() {
    shop__list.style.display = 'none';
    shop__add.style.display = 'block';
  }
}
shop__list();

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
 

