class MessageRepository {
  constructor() {
    this.message = [];
    this.id = 1;
  }

  create(sender, message) {
    this.message.push({
      id: this.id,
      message,
      sender,
    });
  }

  read(id) {
    const idMessage = this.message.find((message) => message.id === id);

    if (!idMessage) {
      return 'this message dont exists';
    }

    return idMessage;
  }

  delete(id) {
    const idMessage = this.message.find((message) => message.id === id);

    if (!idMessage) {
      return 'this message dont exists';
    }

    this.message.splice(id, 1);
    return 'success';
  }
}

const message = new MessageRepository();

module.exports = message;
