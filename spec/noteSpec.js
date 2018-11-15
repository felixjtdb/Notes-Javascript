
function can_add_note() {
  note = new Note("I love tea!")
  expect(note.text).toEqual("I love tea!")
}

function can_see_preview() {
  note2 = new Note("Success is not final, failure is not fatal: It is the courage to continue that counts.")
  expect(note2.preview()).toEqual("Success is not final...")
}
