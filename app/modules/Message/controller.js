const { MessageRepository } = require('./message.js');

const message = new MessageRepository();

function remove(req, res) {
  const id = parseInt(req.body.id, 10);

  res.send(message.delete(id));
}

function readMessage(req, res) {
  const id = parseInt(req.body.id, 10);

  res.send(message.read(id));
}

module.exports = {
  remove,
  readMessage,
};
