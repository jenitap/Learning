/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */


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




