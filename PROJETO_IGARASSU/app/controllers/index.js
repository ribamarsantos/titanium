// OBJECTS
var link = "http://api.openweathermap.org/data/2.5/weather?id=3398352&appid=68988c96250c1d2068f922c26a917810&units=metric&lang=pt";
var xhr = Ti.Network.createHTTPClient(
  {
    onload: getTemperatureInfo,
    onerror: function (e) {
      Ti.API.debug(e.message);
      //alert(e);
    },
    timeout: 5000
  }
);

function getTemperatureInfo() {
    var temperature = JSON.parse(this.responseText);
    if ( temperature.cod == 200) {
      $.imgviewTemperature.image = "http://openweathermap.org/img/w/" +
                                    temperature.weather[0].icon + ".png";
      $.lblTemperature.text      = temperature.main.temp + "º";
    }
}

// MENU Options click

// LIST PLACE
function showListPlace(e){
  Alloy.createController('listPlace').
      getView().
      open();
}

// FAVORITE PLACE
function showFavoritePlace(e){
  Alloy.createController('favoritePlace').getView().open();
}

// info
function showInfo() {
  Alloy.createController('listinfoPlace').getView().open();
}
$.index.open();
$.index.addEventListener('focus',callTemperature);

function callTemperature(e){
  if ( Ti.Network.online){
    Ti.API.info('teste');
    xhr.open('GET', link);
    xhr.send();
  }else{
    Ti.API.info('Sem internet!');
  }
}
