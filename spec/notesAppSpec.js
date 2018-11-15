var dummy_container = document.getElementById("dummy")

dummy_container.innerHTML = `<div id="writing_view">
  <input type="text" id="textbox" class="textbox" placeholder="Enter your deepest darkest secrets"><br>
  <button type="button" id="submit">Submit</button>
  <ul id="notes_list"> </ul>
</div> <div id="meaty_note">
 <button type="button" id="back_button" href="/"> Back </button>
</div>`



function app_has_array() {
  expect(App.notes.length).toEqual(0);
};

function creating_note_saves_to_array() {
  App.addnote("Marius cant code, so he cried about being ill and didnt come in")
  expect(App.notes[0].text).toEqual("Marius cant code, so he cried about being ill and didnt come in");
}

function adding_note_changes_page() {
  App.addnote("please contain me")
  expect(dummy_container.innerHTML).toContain("please contain me")
}

function can_view_whole_note() {
  eventFire(document.getElementById(0), 'click')
  dummy_container = document.getElementById("dummy")
  expect(dummy_container.innerHTML).toContain("Marius cant code, so he cried about being ill and didnt come in")
  eventFire(document.getElementById("back_button"), 'click')
}
