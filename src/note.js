class Note {
  constructor(text, id) {
    this.text = text
    this.id = id
  }

  preview() {
    return this.text.slice(0,20) + "...";
  }

  generate_list_item() {
    var anchor = document.createElement("a")
    var text = document.createTextNode(this.preview())
    anchor.setAttribute("href", `#note_id=${this.id}`)
    anchor.setAttribute("id", this.id)
    anchor.appendChild(text)
    return anchor
  }
}
