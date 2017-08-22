
//POPULATING THE DROPDOWN OF OPTIONS

// Create an array with city values
var cities = ['NYC', 'SF', 'LA', 'ATX', 'SYD']

// Create a for loop to print each city on its own line
var counter;
for (counter = 0; counter < cities.length; counter++){
	console.log("i love: ", cities[counter]);
	var dog = "Sadie";
	// Append each city to the drop down menu in #city-type
		$("#city-type").append("<option>"+cities[counter]+"</option>")
	
}


//DETECT USER-INTERACTION
// .change()
$("select").change(getInput);

// User selects value and clicks
function getInput() {
	event.preventDefault();
	var input_city = $("select").val();
	changeBackground(input_city);
	$("#city-type").val("");
	// console.log(city);
}
// Change body background to the coordinating city "value" chosen
function changeBackground(city) {
	console.log(city);

// conditionals like with assignment #6
// When user chooses city, change background to selected city
// If user selects NYC, change background to .nyc
	if (city == "NYC")	{
		$("body").attr("class", "nyc");
	}
	 // If user selects SF, change background to .sf	
	else if (city == "SF")	{
		$("body").attr("class", "sf");
	}
	// If user selects LA, change background to .la
	else if (city == "LA") {	
		$("body").attr("class", "la");
	}
	// If user selects Austin, change background to .austin
	else if (city == "ATX")	{
		$("body").attr("class", "austin");
	}
	// If user selects Sydney, change background to .sydney
	else if (city == "SYD")	{
		$("body").attr("class", "sydney");
	}

}
	