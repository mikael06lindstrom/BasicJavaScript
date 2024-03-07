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
