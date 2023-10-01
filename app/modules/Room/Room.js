class RoomRepository {
  constructor() {
    this.room = [];
    this.id = 1;
  }

  create(user1, user2) {
    this.room.push({
      id: this.id,
      user1,
      user2,
      createdAt: new Date(),
    });

    this.id += 1;
  }

  read(id) {
    const idRoom = this.room.find((post) => post.id === id);

    if (!idRoom) {
      return `room ${id} is not defined`;
    }

    return this.room[id];
  }

  delete(id) {
    const idRoom = this.room.find((post) => post.id === id);

    if (!idRoom) {
      return `room ${id} is not defined`;
    }

    this.room.splice(id, 1);

    return 'successful';
  }
}

const room = new RoomRepository();

module.exports = room;
