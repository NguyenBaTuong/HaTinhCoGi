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

// function active() {
//   var active__content = document.getElementById('active__content');

//   if (active__content.style.display === 'none') {
//     active__content.style.display = 'flex';
//   } else {
//     active__content.style.display = 'none';  
//   }
// } 

// document.addEventListener("click", function(evt) {
//   // var active__content = document.getElementById('active__content');
//   // var active = document.getElementById('active');
//   //     targetElement = evt.target;  
//   var active__content = document.getElementsByClassName('info__nav-pane-active-item-btn-mess');
//   var active = document.getElementsByClassName('info__nav-pane-active-item-btn');
//       targetElement = evt.target;  
  
//   do {
//       if (targetElement == active) {
//           active__content.style.display = 'flex';
//           return;
//       }
//       targetElement = targetElement.parentNode;
//   } while (targetElement);

//   active__content.style.display = 'none';

// });

//show avt and update

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
    // avt__other.src = link__avt;
  }
}


const tab__ifmto$ = document.querySelector.bind(document);
const tab__ifmto$$ = document.querySelectorAll.bind(document);

const tab__ifmtos = tab__ifmto$$(".imformation__details-exten-item");
const panel__ifmtos = tab__ifmto$$(".imformation__details-content-panel");
 
const tab__ifmtoActive = tab__ifmto$(".imformation__details-exten-item.active");


tab__ifmtos.forEach((tab__ifmto, index__tab__ifmto) => {
  const panel__ifmto = panel__ifmtos[index__tab__ifmto];

  tab__ifmto.onclick = function () {
    tab__ifmto$(".imformation__details-exten-item.active").classList.remove("active");
    tab__ifmto$(".imformation__details-content-panel.active").classList.remove("active");

    this.classList.add("active");
    panel__ifmto.classList.add("active");
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