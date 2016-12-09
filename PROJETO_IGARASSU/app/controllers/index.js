// OBJECTS
var xhr = Ti.Network.createHTTPClient();
var link = "http://api.openweathermap.org/data/2.5/weather?id=3398352&appid=68988c96250c1d2068f922c26a917810&units=metric&lang=pt";

// FUNCTIONS
function showListPlace(e){
  Alloy.createController('listPlace').
      getView().
      open();
}

function getTemperatureInfo() {
    var temperature = JSON.parse(this.responseText);
    if ( temperature.cod == 200) {
      $.imgviewTemperature.image = "http://openweathermap.org/img/w/" +
                                    temperature.weather[0].icon + ".png";
      $.lblTemperature.text      = temperature.main.temp + "º";
    }
}

// EVENTS

$.index.open();

xhr.open('GET', link);
xhr.send();

xhr.onload = getTemperatureInfo;

xhr.onerror = function (e) {
  alert(e);
};
