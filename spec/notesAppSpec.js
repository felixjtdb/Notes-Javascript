var app = new NotesApp()

function app_has_array() {
  expect(app.notes.length).toEqual(0);
};

app_has_array()


function creating_note_saves_to_array() {
  app.addnote("Marius cant code")
  expect(app.notes[0].getText()).toEqual("Marius cant code");
}

creating_note_saves_to_array()

function adding_note_changes_page() {
  app.addnote("please contain me")
  page = window.document.body.innerHTML
  expect(page).toContain("please contain me")
}
