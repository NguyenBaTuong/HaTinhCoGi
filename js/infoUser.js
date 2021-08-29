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
