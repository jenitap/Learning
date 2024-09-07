function rollDice(sides) {
    const randomNumber = Math.floor(Math.random() * sides) + 1;
  
    return randomNumber;
  }
  
  module.exports;
   const lambdaHandler = '';
    module.exports.lambdaHandler = async (event) => {
    console.log('Roll Dice Run!');
  
    const result = rollDice(6);
  
    try {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: result }),
      };
    } catch (err) {
      console.log(err);
      return err;
    }
  };
  //module.exports.lambdaHandler;




