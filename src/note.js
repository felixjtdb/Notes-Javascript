class Note {
  constructor(text) {
    this.text = text
  }

  getText() {
    return this.text
  }
  preview() {
    return this.text.slice(0,20) + "...";
  }
}
