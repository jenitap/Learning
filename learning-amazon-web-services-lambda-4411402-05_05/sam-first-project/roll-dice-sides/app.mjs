export const lambdaHandler = async (event) => {
	console.log('Roll dice with sides run');
	 
	var dSides = Math.floor(Math.random() * 121);

	if (event.queryStringParameters && event.queryStringParameters.dSides) {
		sides = event.queryStringParameters.dSides;
	}

	var sides = getDice(dSides);
	const result = rollDice(sides);

	const message = `The result is ${result}, you rolled a dice of ${sides} sides.`;

	try {
		return {
			statusCode: 200,
			body: JSON.stringify({
				message: message,
			}),
		};
	} catch (err) {
		console.log(err);
		return err;
	}
};

function getDice (dSides) {
	var diceSides = dSides;
	var questionAsked = "How many sides are on the dice? ";
	
	var stdin = process.stdin;
	var stdout = process.stdout;

	stdin.resume();
	stdout.write(questionAsked);

	stdin.once('data', function(data) {
		diceSides(data.toString().trim());
	});
	

	if (dSides > 0) {
		console.log(questionAsked, diceSides);
		} else {
		console.log('By default the number of dice sides is 6.');
		diceSides = 6;
	}
	console.log(questionAsked, diceSides);

	return diceSides;

}


function rollDice(sides) {
	const randomNumber = Math.floor(Math.random() * sides) + 1;

	return randomNumber;
}
