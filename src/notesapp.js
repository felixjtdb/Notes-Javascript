class NotesApp {
  constructor() {
    this.notes = [];
  };

  addnote(str) {
    this.notes.push(new Note(str))
    this.generateHTMLlist()
  }

  generateHTMLlist() {
    var html = "<ul>"
    for (var i = 0; i < this.notes.length; i++) {
      html += this.notes[i].generatehtml()
    }
    html += "</ul>"
    document.getElementById("notes_list").innerHTML = html
  }
}
