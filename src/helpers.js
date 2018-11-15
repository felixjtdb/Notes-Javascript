function toggle_note_view(boolean) {
  if (boolean) {
    var style1 = "none"
    var style2 = "inline"
  } else {
    var style2 = "none"
    var style1 = "inline"
  }
  
  document.getElementById("writing_view").style.display = style1
  document.getElementById("meaty_note").style.display = style2
}
