function Note(text) {
  this.text = text;
}

Note.prototype.getText = function() {
  return this.text;
}

Note.prototype.preview = function() {
  return this.text.slice(0,20) + "...";
}
