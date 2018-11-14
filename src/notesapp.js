class NotesApp {
  constructor() {
    this.notes = [];
    this.notes_count = 0
  };

  addnote(str) {
    this.notes.push(new Note(str, this.notes_count))
    this.notes_count += 1
    this.generateHTMLlist()
  }

  generateHTMLlist() {
    var html = "<ul>"
    for (var i = 0; i < this.notes.length; i++) {
      html += `<li> ${this.notes[i].generatehtml()} </li>`
    }
    html += "</ul>"
    document.getElementById("notes_list").innerHTML = html
  }
}
