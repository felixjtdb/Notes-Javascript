var app = new NotesApp()

function app_has_array() {
  console.log(expect(app.notes.length).toEqual(0));
};

app_has_array()


function creating_note_saves_to_array() {
  app.addnote("Marius cant code")
  console.log(expect(app.notes[0].getText()).toEqual("Marius cant code"))
}

creating_note_saves_to_array()
