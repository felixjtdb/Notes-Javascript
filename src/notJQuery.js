var submit = document.getElementById('submit')
var textarea = document.getElementById('textbox')

submit.addEventListener('click', function() {
  App.addnote(document.getElementById('textbox').value);
  textarea.value = "";
})
