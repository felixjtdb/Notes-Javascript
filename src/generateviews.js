class GenerateViwes {
  constructor() {
  }
  generate_note_view(note_id) {
    var meaty_note = document.getElementById("meaty_note")
    var note_text = document.createTextNode(this.notes[note_id].text)
    var btn = document.createElement("BUTTON")
    var t = document.createTextNode("Back");
    btn.appendChild(t)

    meaty_note.innerHTML.replace(note_text)
    meaty_note.appendChild(btn)
  }

  readingnoteView() {
  }
}
