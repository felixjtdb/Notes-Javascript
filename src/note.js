class Note {
  constructor(str) {
    this.value = str
  }

  create() {
    return "<p>"+ this.value +"</p>"
  }
}
