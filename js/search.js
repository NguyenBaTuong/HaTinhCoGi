//new
const tab__search$ = document.querySelector.bind(document);
const tab__search$$ = document.querySelectorAll.bind(document);

const tab__searchs = tab__search$$(".search__fillter-grid-item");
const panel__ifmtos = tab__search$$(".search__details-pannel");
 
const tab__searchActive = tab__search$(".search__fillter-grid-item.active");

tab__searchs.forEach((tab__search, index__tab__search) => {
  const panel__ifmto = panel__ifmtos[index__tab__search];

  tab__search.onclick = function () {
    tab__search$(".search__fillter-grid-item.active").classList.remove("active");
    tab__search$(".search__details-pannel.active").classList.remove("active");

    this.classList.add("active");
    panel__ifmto.classList.add("active");
  };
});

function search__chart__on(e) {
    var id = e.id;
    var id__get = document.getElementById(id);
    var input1 = document.getElementById('search__fillter__input1');
    var input2 = document.getElementById('search__fillter__input2');

    id__get.classList.add('active');
    input1.value = '500K';
    input2.value = '999K';
}

function search__chart__off(e) {
    var id = e.id;
    var id__get = document.getElementById(id);
    var input1 = document.getElementById('search__fillter__input1');
    var input2 = document.getElementById('search__fillter__input2');

    id__get.classList.remove('active');
    input1.value = '';
    input2.value = '';
}

function focus__input() {
  var input1 = document.getElementById('search__fillter__input1');
  var input2 = document.getElementById('search__fillter__input2');
  var btn = document.getElementById('search__fillter__btn');
  if (!input1.value == '' || !input2.value == '') {
    btn.classList.add('active');
  } else {
    btn.classList.remove('active');
  };
};



