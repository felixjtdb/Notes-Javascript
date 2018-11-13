function testNoteCreate() {
  var note = new Note("This is a new note");

  console.log(expect(note.create()).toEqual("<p>This is a new note</p>"))
};

testNoteCreate();
