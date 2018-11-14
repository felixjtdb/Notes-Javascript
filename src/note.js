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
    return `<a id="${this.id}" href="" onclick=""> ${this.preview()}</a>`
  }
}
