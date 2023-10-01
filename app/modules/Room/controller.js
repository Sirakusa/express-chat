const { RoomRepository } = require('./room.js');

const room = new RoomRepository();

function remove(req, res) {
  const id = parseInt(req.body.id, 10);

  res.send(room.delete(id));
}

function readRoom(req, res) {
  const id = parseInt(req.body.id, 10);

  res.send(room.read(id));
}

module.exports = {
  remove,
  readRoom,
};
