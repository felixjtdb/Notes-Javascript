function testNoteCreate() {
  var note = new Notes();
  assert.isTrue(note.create("This is a new note") === "<p>This is a new note</p>");
};

testNoteCreate();

function testNoteCreate2() {
  var note = new Notes();
  assert.isEqual(note.create("This is a new note"), "<p>This is a new note</p>");
};

testNoteCreate2();
