
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".home__tab-eat-item");
const panes = $$(".home__tab-eat-pane");

const tabActive = $(".home__tab-eat-item.active");
const line = $(".home__tab-eat-nav .line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".home__tab-eat-item.active").classList.remove("active");
    $(".home__tab-eat-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});



const tabs2 = $$(".home__tab-rest-item");
const panes2 = $$(".home__tab-rest-pane");

const tabActive2 = $(".home__tab-rest-item.active");
const line2 = $(".home__tab-rest-nav .line");

line2.style.left = tabActive2.offsetLeft + "px";
line2.style.width = tabActive2.offsetWidth + "px";

tabs2.forEach((tab2, index2) => {
  const pane2 = panes2[index2];

  tab2.onclick = function () {
    $(".home__tab-rest-item.active").classList.remove("active");
    $(".home__tab-rest-pane.active").classList.remove("active");

    line2.style.left = this.offsetLeft + "px";
    line2.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane2.classList.add("active");
  };
});




const tabs3 = $$(".home__tab-post-item");
const panes3 = $$(".home__tab-post-pane");

const tabActive3 = $(".home__tab-post-item.active");
const line3 = $(".home__tab-post-nav .line");

line3.style.left = tabActive3.offsetLeft + "px";
line3.style.width = tabActive3.offsetWidth + "px";

tabs3.forEach((tab3, index3) => {
  const pane3 = panes3[index3];

  tab3.onclick = function () {
    $(".home__tab-post-item.active").classList.remove("active");
    $(".home__tab-post-pane.active").classList.remove("active");

    line3.style.left = this.offsetLeft + "px";
    line3.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane3.classList.add("active");
  };
});
