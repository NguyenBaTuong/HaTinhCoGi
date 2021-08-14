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


// shop select 
var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);


// shop show img 
const add__img__cover = document.getElementById('add__img__cover');
const cancel__img__cover = document.getElementById('cancel__img__cover')

add__img__cover.onchange = evt => {
  const [file] = add__img__cover.files
  if (file) {
    shop__img__cover__show.src = URL.createObjectURL(file)
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
