function generate(note) {
  document.getElementById("notes_list").innerHTML = html
}

function toggle_note_view(boolean) {
  if (boolean) {
    var style1 = "none"
    var style2 = "inline"
  } else {
    var style2 = "none"
    var style1 = "inline"
  }
  document.getElementById("textbox").style.display = style1
  document.getElementById("submit").style.display = style1
  document.getElementById("notes_list").style.display = style1
  document.getElementById("meaty_note").style.display = style2
  document.getElementById("back_button").style.display = style2
}

function generate_note_html(note) {
  toggle_note_view(true)
  document.getElementById("meaty_note").innerHTML = note
}
