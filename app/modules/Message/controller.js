const { message } = require('./message');

function remove(req, res) {
  const id = parseInt(req.body.id, 10);

  res.send(message.delete(id));
}

function read(req, res) {
  const id = parseInt(req.body.id, 10);

  res.send(message.read(id));
}

function sendMessage(req, res) {
  message.create(req.body.sender, req.body.msg);

  res.sendStatus(200);
}

module.exports = {
  remove,
  read,
  sendMessage,
};
