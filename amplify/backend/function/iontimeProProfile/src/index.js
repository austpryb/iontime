const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');

const server = awsServerlessExpress.createServer(app);
exports.handler = function (event, context) {
  console.log('event: ', event)
  const body = {
    message: "Hello world!"
  }
  const response = {
    statusCode: 200,
    body
  }
  context.done(null, response);
}