const { room } = require('./room');

function remove(req, res) {
  const id = parseInt(req.body.id, 10);

  res.send(room.delete(id));
}

function read(req, res) {
  const id = parseInt(req.body.id, 10);

  res.send(room.read(id));
}

function openRoom(req, res) {
  room.create(req.body.user1, req.body.user2);
  res.sendStatus(200);
}

module.exports = {
  remove,
  read,
  openRoom,
};
