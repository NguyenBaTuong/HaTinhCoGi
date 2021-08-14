
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
