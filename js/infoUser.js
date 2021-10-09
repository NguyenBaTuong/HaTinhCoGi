const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const info__tabs = $$(".info__nav-list-item");
const info__panels = $$(".info__nav-pane");

const info__Active = $(".info__nav-list-item.active");
const info__line = $(".info__nav-list .line");

info__line.style.left = info__Active.offsetLeft + "px";
info__line.style.width = info__Active.offsetWidth + "px";

info__tabs.forEach((tab, index) => {
  const info__panel = info__panels[index];

  tab.onclick = function () {
    $(".info__nav-list-item.active").classList.remove("active");
    $(".info__nav-pane.active").classList.remove("active");

    info__line.style.left = this.offsetLeft + "px";
    info__line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    info__panel.classList.add("active");
  };
});

var avt__block = document.getElementById('avt__block');

avt__block.onclick = function () {
  var avt__origin = document.getElementById('avt__origin');
  var avt__other =  document.getElementById('avt__other');

  if(avt__other.src === 'https://anhdep123.com/wp-content/uploads/2021/05/avatar-trang-dep.jpg') {
    avt__other.src = avt__origin.src
  }
}

const avt__up = document.getElementById('avt__up');
const avt__other = document.getElementById('avt__other')
const cancel__avt = document.getElementById('cancel__avt')
const avt__save = document.getElementById('avt__save');
const avt__origin = document.getElementById('avt__origin');
const link__avt = avt__origin.src;

avt__up.onchange = evt => {
  const [file] = avt__up.files
  if (file) {
    avt__other.src = URL.createObjectURL(file)
    avt__save.onclick =  function () {
      avt__origin.src = URL.createObjectURL(file);
      alert('Cập nhật ảnh thành công')
    }
  } 
}

cancel__avt.onclick = evt => {
  const [file] = avt__up.files
  if (file) {
    avt__origin.src = link__avt;
  }
}


const tab__ifson$ = document.querySelector.bind(document);
const tab__ifson$$ = document.querySelectorAll.bind(document);

const tab__ifsons = tab__ifson$$(".imformation__details-exten-item");
const panel__jfsons = tab__ifson$$(".imformation__details-content-panel");
 
const tab__ifsonActive = tab__ifson$(".imformation__details-exten-item.active");

const nav = document.getElementById('imformation__nav');
const input = document.getElementById('imformation__nav__input');

tab__ifsons.forEach((tab__ifson, index__tab__ifson) => {
  const panel__jfson = panel__jfsons[index__tab__ifson];

  tab__ifson.onclick = function () {
    tab__ifson$(".imformation__details-exten-item.active").classList.remove("active");
    tab__ifson$(".imformation__details-content-panel.active").classList.remove("active");

    this.classList.add("active");
    panel__jfson.classList.add("active");
    nav.classList.add('none__tl');
    panel__jfson.classList.add("active");
    input.checked = false
  };
});

//update table 
function okb(e){
  var id = e.id;
  var idtd = id.split('__');
  console.log('idtd', idtd)
  var element = document.getElementById(idtd[1])
  console.log('elemaent', element)
  var OriginalContent = element.innerHTML.trim();

  element.innerHTML= '<input class="input__mt" type="text" value="'+OriginalContent+'"/>';
  var childinput = document.getElementById(idtd[1]).getElementsByClassName('input__mt')[0];
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

//show pass
const togglePassword1 = document.querySelector('#togglePassword1');
const password1 = document.querySelector('#up__passs__old');

togglePassword1.addEventListener('click', function (e) {

  const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';

  password1.setAttribute('type', type);
  
  this.classList.toggle('fa-eye-slash');
})

const togglePassword2 = document.querySelector('#togglePassword2');
const password2 = document.querySelector('#up__passs__new');

togglePassword2.addEventListener('click', function (e) {

  const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';

  password2.setAttribute('type', type);
  
  this.classList.toggle('fa-eye-slash');
})

const togglePassword3 = document.querySelector('#togglePassword3');
const password3 = document.querySelector('#up__passs__repeat');

togglePassword3.addEventListener('click', function (e) {

  const type = password3.getAttribute('type') === 'password' ? 'text' : 'password';

  password3.setAttribute('type', type);
  
  this.classList.toggle('fa-eye-slash');
})

// select tab
const tab__select$ = document.querySelector.bind(document);
const tab__select$$ = document.querySelectorAll.bind(document);

const tab__selects = tab__select$$(".imformation__place-edit-select-item");
const panel__selects = tab__select$$(".imformation__place-edit-select-panel");
 
const tab__selectActive = tab__select$(".imformation__place-edit-select-item.active");

tab__selects.forEach((tab__select, index__tab__select) => {
  const panel__select = panel__selects[index__tab__select];

  tab__select.onclick = function () {
    tab__select$(".imformation__place-edit-select-item.active").classList.remove("active");
    tab__select$(".imformation__place-edit-select-panel.active").classList.remove("active");

    this.classList.add("active");
    panel__select.classList.add("active");
  };
});

// focus input select
function focus__input() {
  var input = document.getElementById('show__select');
  var content = document.getElementById('content__select');
  var check = document.getElementById('select__input');

  input.onfocus = function() {
    content.style.display = 'block';
  }

  document.addEventListener('click', (evt) => {
    var bo1 = input.contains(evt.target);
    var bo2 = content.contains(evt.target);

    if(!bo1 && !bo2) {
      content.style.display = 'none';
    }
  })
}
focus__input();

function check__con(e) {
  var id__get = document.getElementById(e.id);

  if(!id__get.classList.contains('active')) {
    reset__con();
    id__get.classList.add('active');
  };
}

function reset__con() {
  var list = document.getElementsByClassName('imformation__place-edit-select-con-item');

  for(var i = 0; i < list.length; i++) {
    list[i].classList.remove('active')
  }
}

function check__dis(e) {
  var id__get = document.getElementById(e.id);

  if(!id__get.classList.contains('active')) {
    reset__dis();
    id__get.classList.add('active');
  };
}

function reset__dis() {
  var list = document.getElementsByClassName('imformation__place-edit-select-dis-item');

  for(var i = 0; i < list.length; i++) {
    list[i].classList.remove('active')
  }
}

function check__com(e) {
  var id__get = document.getElementById(e.id);

  if(!id__get.classList.contains('active')) {
    reset__com();
    id__get.classList.add('active');
  };
}

function reset__com() {
  var list = document.getElementsByClassName('imformation__place-edit-select-com-item');

  for(var i = 0; i < list.length; i++) {
    list[i].classList.remove('active')
  }
}

function ac__btn(e) {
  var get = document.getElementById(e.id);
  var id = e.id;
  var id__sp = id.split('__');

  if(!get.classList.contains('active')) {
    ac__reset();
    get.classList.add('active');
  }

} 
function ac__reset() {
  var list = document.getElementsByClassName('imformation__place-detail-item-ac-set');

  for(var i = 0; i < list.length; i++) {
    list[i].classList.remove('active')
  }
}

//fillter
function fillter__all() {
  var list = document.getElementsByClassName('info__nav-pane-active-fillter-box-item-input');
  var id = document.getElementById('active__fill');
  id.onclick =  function() {
    if(id.checked == true) {
      for(var i = 0; i < list.length; i++) {
        list[i].checked = true;
      }
    } else {
      for(var i = 0; i < list.length; i++) {
        list[i].checked = false;
      }
    }
  }
}
fillter__all();

function imformation__nav() {
  var input = document.getElementById('imformation__nav__input');
  var nav = document.getElementById('imformation__nav');
  var w = screen.availWidth;
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

//love shop
function shop__love(e) {
  var get = document.getElementById(e.id);
  var id = e.id;
  var id__sp = id.split('__');
  var ip = document.getElementById(`${id__sp[0]}__${id__sp[1]}__ip`);
  
  if(ip.checked == false) {
    get.classList.add('love')
  } else {
    get.classList.remove('love')
  }
}