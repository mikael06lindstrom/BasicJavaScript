// JavaScript source code

// Animate a string
function animate_string(id)
{
	// Collect information about the element of has id as id
	let element = document.getElementById(id);
	let textNode = element.childNodes[0];

	// Collect information from elements textnode
	let text = textNode.data;

	// Create a time delay
	setInterval(function ()
	{
		// Move the last letter to first letter in the string
		text = text[text.length - 1] + text.substring(0, text.length - 1);

		// Set element content as the new string value
		textNode.data = text;
	}, 500);
}

// Guess integer
function guessInteger(guess)
{
	// Create a randomly integer between 1 and 10
	let rndvalue = Math.floor(Math.random() * 10) + 1;

	// Check if the user guess correct integer and show the result for the user
	if (guess == rndvalue)
		document.getElementById("guessresult").innerHTML = "Good work";
	else
		document.getElementById("guessresult").innerHTML = "Not matched";
}

// Calculate the days to chrismas day
function dayToChrismas()
{
	// Variables for dates
	let current_date, christmas_day;

	// Total milliseconds on a day
	let one_day_ms = 1000 * 60 * 60 * 24;

	// Set the current day
	current_date = new Date();

	// Set chrismas day
	christmas_day = new Date(current_date.getFullYear(), 11, 24);

	// Check if today are between 26 and 31 december and if is it choise next year
	if (current_date.getMonth() == 11 && current_date.getDate() > 25)
	{
		christmas_day.setFullYear(christmas_day.getFullYear + 1);
	}

	// Calculate first result in milliseconds then to days
	var res = Math.round((christmas_day.getTime() - current_date.getTime()) / (one_day_ms))

	var finalResult = res.toFixed(0);
	// Show the result in the web
	document.write("Today are " + finalResult + " day to chrismas day");
}

// Change a text in a string
function changeText(value)
{
	// Clear text in element for result
	document.getElementById("newtext").innerHTML = "";

	// Check if user write a text that begin by Py or py else add it then view result
	if (value.substring(0, 2) == "Py" || value.substring(0, 2) == "py")
		document.getElementById("newtext").innerHTML = value;
	else
		document.getElementById("newtext").innerHTML = "Py" + value;
}

// Check numbers
function checkInteger(int1, int2)
{
	// Variables for checking numbers
	let t1, t2;
	const chInt = 100;

	// Calculate difference between user number and 100
	t1 = int1 - 100;
	t2 = int2 - 100;

	// Check if difference are negative number
	if (t1 < 0)
		t1 *= -1;
	if (t2 < 0)
		t2 *= -1;

	// Check which number are closed 100 and show this number
	if (t1 < t2)
		document.getElementById("checkresult").innerHTML = "The number that are closed 100 are " + int1;
	else
		document.getElementById("checkresult").innerHTML = "The number that are closed 100 are " + int2;
}