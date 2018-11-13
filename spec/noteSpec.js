note = new Note("I love tea!")
console.log(expect(note.getText()).toEqual("I love tea!"))

note2 = new Note("Success is not final, failure is not fatal: It is the courage to continue that counts.")
console.log(expect(note2.preview()).toEqual("Success is not final..."))
