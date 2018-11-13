function testNoteCreate() {
  var note = new Note();
  var created_note = note.create("This is a new note");
  expect(created_note).isEqual("<p>Rubbish</p>");
};

testNoteCreate();


function testNoteCreate3() {
  var note = new Note();
  var created_note = note.create("This is a new note");
  expect("").isTrue(created_note === "<p>This is a new note</p>");
};

testNoteCreate3();

function testNoteCreate4() {
  var note = new Note();
  var created_note = note.create("This is a new note");
  expect("").isTrue(created_note === "<p>This is a new note</p>");
};

testNoteCreate4();

function testNoteCreate5() {
  var note = new Note();
  var created_note = note.create("This is a new note");
  expect("").isTrue(created_note === "<p>This is a new note</p>");
};

testNoteCreate5();


function testNoteCreate6() {
  var note = new Note();
  var created_note = note.create("This is a new note");
  expect(created_note).isEqual("<p>This is a new note</p>");
};

testNoteCreate6();

