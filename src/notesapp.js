class NotesApp {
  constructor() {
    this.notes = [];
    this.notes_count = 0
  }

  addnote(str) {
    this.notes.push(new Note(str, this.notes_count))
    this.notes_count += 1
    this.addnote_toList(this.lastnoteadded())
  }

  lastnoteadded() {
    return this.notes[this.notes.length - 1];
  }
  
  addnote_toList(note) {
    var list_item = document.createElement("li");
    list_item.appendChild(note.generate_list_item());
    document.getElementById("notes_list").appendChild(list_item)
  }

  generate_note_view(note_id) {
    var meaty_note = document.getElementById("meaty_note")
    var p = document.createElement("p")
    var note_text = document.createTextNode(this.notes[note_id].text)
    p.appendChild(note_text)
    meaty_note.insertBefore(p, meaty_note.childNodes[0])
  }

  clear_note() {
    var meaty_note = document.getElementById("meaty_note")
    var node_to_remove = meaty_note.childNodes[0]
    meaty_note.removeChild(node_to_remove)
  }
}

App = new NotesApp
