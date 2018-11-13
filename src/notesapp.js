class NotesApp {
  constructor() {
    this.notes = [];
  };

  addnote(str) {
    this.notes.push(new Note(str))
  }
}
