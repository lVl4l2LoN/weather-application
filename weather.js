window.onload = init;
var appid= "7614c50c2009cf50a4580f2e6e4031cd";

function init(){
	var button = document.getElementById("submit")
	button.onclick=buttonHandler;
}

function buttonHandler(){
	var cityID =document.getElementById("city");
	var stateID =document.getElementById("state");
	var city = cityID.value;
	var state= stateID.value;
	console.log("city: "+city+" state: "+state);

	var url="http://api.openweathermap.org/data/2.5/weather?callback=weatherInfo&q=" + city + "," + state + "," +"us&units=imperial&appid="+appid;
	
	var newScriptElement = document.createElement("script");
	newScriptElement.setAttribute("src",url);
	newScriptElement.setAttribute("id","jsonp");

	var head = document.getElementsByTagName("head")[0];
	head.appendChild(newScriptElement);

}

function weatherInfo(weather){
	var temp = weather.main.temp;
	console.log("temp: "+temp);

	var div = document.getElementById("result");
	var p = document.createElement("p");
	p.innerHTML="Temperature: "+temp;
	div.appendChild(p);

	var icon = weather.weather[0].icon;
	var wdiscription = weather.weather[0].description;
	var url = "http://openweathermap.org/img/w/"+icon+ ".png"
	var img = document.createElement("img");
	img.setAttribute("src",url);
	img.setAttribute("alt",wdiscription);
	/*img.setAttribute("height","100%");
	img.setAttribute("width","100%");*/
	div.appendChild(img);

	var p2 = document.createElement("p");
	p2.innerHTML = wdiscription;
	div.appendChild(p2);

	
}