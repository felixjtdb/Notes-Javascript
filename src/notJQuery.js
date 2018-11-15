var submit = document.getElementById('submit')
var textarea = document.getElementById('textbox')
var meaty_note = document.getElementById('meaty_note')
var back_button = document.getElementById('back_button')
var notes_list = document.getElementById('notes_list')

submit.addEventListener('click', function() {
  App.addnote(document.getElementById('textbox').value);
  textarea.value = "";
})

back_button.addEventListener('click', function(event) {
  event.preventDefault()
  App.clear_note()
  toggle_note_view(false)
})

notes_list.addEventListener('click', function(event) {
  event.preventDefault()
  App.generate_note_view(event.target.attributes.id.value)
  toggle_note_view(true)
  textarea.value = "";
})
