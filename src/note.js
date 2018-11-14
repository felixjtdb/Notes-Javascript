class Note {
  constructor(text, id) {
    this.text = text
    this.id = id
  }

  getText() {
    return this.text
  }
  preview() {
    return this.text.slice(0,20) + "...";
  }

  generatehtml() {
    return `<a onclick="generate_note_html('${this.text}')"> ${this.preview()}</a>`
  }
}
