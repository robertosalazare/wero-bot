const evaluateCommand = require('./commands');
const evaluateResponse = require('./message-responses');

function Pipeline() {
  this.pipelineArray = [
    evaluateCommand,
    evaluateResponse,
  ];

  this.evaluateMessage = (message) => {
    this.pipelineArray.forEach(handler => handler(message));
  }
}

const pipeline = new Pipeline();

module.exports = pipeline;