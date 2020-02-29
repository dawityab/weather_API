
// //Adding click and key press  event listner for Click function

document.querySelector('.submit-btn').addEventListener("click",weatherInfo);

document.addEventListener('keypress', function(event){
	if(event.keyCode === 13 || event.which === 13){
		weatherInfo();


	}
});
	//Adding click event listner for Click function
document.querySelector('.submit-btn').addEventListener("click",Clicking);

	//Adding click event listner for backToInit function
document.querySelector('.back-btn').addEventListener("click",backTOinput);
function Clicking(){
	var city= document.querySelector('.input-type').value;
	if(!city)
	{
		
		var message = "* Please fill the require input before you click";
		
		//console.log(message);
		//alert('* Please fill the require input.');
		$('#notify').append(message);
		if(message){
			$('.submit-btn').hide();
			$('.back-btn').show();
			$('.input-type').hide();

			//$('.input-type').focus();


		}
		return -1;
	}


}

Clicking();

function weatherInfo(){
	//Initalizing a row
	var row = 1;
	$('.input-type').show();
	$('.input-type').focus();
	// $('.submit-btnn').hide();
	//Geting an input value
	var city= document.querySelector('.input-type').value;


	
	if (city)
	{
		//Geting data form the API
		$.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=b7cc5077d2f29668e2d6976ed0b44f8f",function(data){
			
			var temp= data.main.temp;
			var wind = data.wind.speed;
			var humidity = data.main.humidity;
			var description = data.weather[0].description;
			var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

			//consoling the data 
			console.log(data);
			//Inserting row and celles in a table
			var table = document.querySelector('.table-name');
			
			var header = table.createTHead(0);
		
		var head_row = header.insertRow(0);
		
		var head_cell1 = head_row.insertCell(0);
		var head_cell2 = head_row.insertCell(1);
		var head_cell3 = head_row.insertCell(2);
		var head_cell4 = head_row.insertCell(3);
		var head_cell5 = head_row.insertCell(4);
		var head_cell6 = head_row.insertCell(5);
		

		head_cell1.innerHTML = "City";
		head_cell1.id = 'table-head';
		head_cell2.innerHTML = "Image Info";
		head_cell2.id = 'table-head';
		head_cell3.innerHTML = "Temprature";
		head_cell3.id = 'table-head';
		head_cell4.innerHTML = "Wind";
		head_cell4.id = 'table-head';
		head_cell5.innerHTML = "Humdity";
		head_cell5.id = 'table-head';
		head_cell6.innerHTML = "Description";
		head_cell6.id = 'table-head';
		
	
			var tableRow = table.insertRow(row);
			var cell1 = tableRow.insertCell(0);
			var cell2 = tableRow.insertCell(1);
			var cell3 = tableRow.insertCell(2);
			var cell4 = tableRow.insertCell(3);
			var cell5 = tableRow.insertCell(4);
			var cell6 = tableRow.insertCell(5);
			var cell7 = tableRow.insertCell(6);
			




			//Printing a data on the browser
			cell1.append(city);
			var image = new Image();
			image.src = icon;
			cell2.appendChild(image);
			cell3.append((Math.round (temp)) + '.°C' );
			cell4.append((Math.round (wind)) + ".km/h");
			cell5.append((Math.round (humidity)) + ".g/m3");
			cell6.append(description);
			var delete_btn = document.createElement('button');
			delete_btn.innerHTML="Close";
			delete_btn.id = 'delete_btnn';
			// delete_btn.style.background = '#ff6666';
			// delete_btn.style.color = '#cce6ff';
			// delete_btn.style.border = '0px solid ';
			tableRow = cell7.appendChild(delete_btn);
			$('#delete_btnn').on( 'click ',function(){
				(head_row).remove();
			 $(this).closest ('tr').remove();
				
			
			});
			
			//Increment new row 
			row ++;
			// Calling the init function
			init();
			

			
			});

		
	}


}


// To make the input field empty
function init(){
	document.querySelector('.input-type').value = "";
	
}

// To go back to the input 
function backTOinput(){
	$('.back-btn').hide();
	$('#notify').empty();
	$('.submit-btn').show();
	
	$('.input-type').show();
	$('.input-type').focus();
	

}
backTOinput();












