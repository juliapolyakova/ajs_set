export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой объект уже существует в команде');
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    for (const player of characters) {
      this.members.add(player);
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}
