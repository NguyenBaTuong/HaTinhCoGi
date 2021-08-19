const loginRes$ = document.querySelector.bind(document);
const loginRes$$ = document.querySelectorAll.bind(document);

const loginRess__tabs = loginRes$$(".loginxres__content-nav-item");
const loginRess__panels = loginRes$$(".loginxres__content-panel");

const loginRess__tabActive = loginRes$(".loginxres__content-nav-item.active");
const loginRess__line = loginRes$(".active__tab-nav .line");

loginRess__line.style.left = loginRess__tabActive.offsetLeft + "px";
loginRess__line.style.width = loginRess__tabActive.offsetWidth + "px";

loginRess__tabs.forEach((loginRess__tab, loginRess__index) => {
  const loginRess__panel = loginRess__panels[loginRess__index];

  loginRess__tab.onclick = function () {
    loginRes$(".loginxres__content-nav-item.active").classList.remove("active");
    loginRes$(".loginxres__content-panel.active").classList.remove("active");

    loginRess__line.style.left = this.offsetLeft + "px";
    loginRess__line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    loginRess__panel.classList.add("active");
  };
});


// show pass 
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#id_password');

togglePassword.addEventListener('click', function (e) {

  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';

  password.setAttribute('type', type);
  
  this.classList.toggle('fa-eye-slash');
});

const togglePassword2 = document.querySelector('#togglePassword2');
const password2 = document.querySelector('#id_password2');

togglePassword2.addEventListener('click', function (e) {

  const type2 = password2.getAttribute('type') === 'password' ? 'text' : 'password';

  password2.setAttribute('type', type2);
  
  this.classList.toggle('fa-eye-slash');
});