
$('.new-search').hide();

document.querySelector('.submit-btn').addEventListener("click",weatherInfo);

document.addEventListener('keypress', function(event){
	if(event.keyCode === 13 || event.which === 13){
		weatherInfo();


	}
});

function weatherInfo(){
	$('.input-type').show();
	document.querySelector('.input-type').focus();
	
	var city= document.querySelector('.input-type').value;
	
	var empty = "";
	if (city)
	{

		$.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=b7cc5077d2f29668e2d6976ed0b44f8f",function(data){
			
			
			
			
			
			var temp= data.main.temp;
			var wind = data.wind.speed;
			var humidity = data.main.humidity;
			var description = data.weather[0].description;
			var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

			

			console.log(data);
			

			$(".city").append(city);
			$(".icon").attr("src",icon);
			$(".temp").unbind().append(" Temp " + (Math.round (temp)) + '.'+ '&deg;C');
			$(".wind").append("Wind  " + (Math.round (wind)) + ".km/h");
			$(".humdity").append("Humdity " + (Math.round (humidity)) + ".g/m3");
			$(".description").append(  description);
			$(".new-search").show();
			$('.input-type').hide();
			$('.submit-btn').hide();
			
			init();
			
			
			
		});

		
	}

	else if(city == empty)
	{
		
		 
alert('Please put the city and Click.');


}
}

function init(){
	document.querySelector('.input-type').value = "";

}

document.querySelector('.new-search').addEventListener("click",removeResult);


function removeResult(){
	$(".city").empty();
	$(".icon").attr('src','');
	$(".temp").empty();
	$(".wind").empty();
	$(".humdity").empty();
	$(".description").empty();
	$(".new-search").hide();
	$('.input-type').show();
	$('.submit-btn').show();
}

removeResult();

