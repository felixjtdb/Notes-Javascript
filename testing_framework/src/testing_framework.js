function Expect(thing) {
  this.thing = thing
}

Expect.prototype.toEqual = function(anotherThing) {
  if (this.thing === anotherThing) {
    return "PASS"
  } else {
    return "FAIL"
  }
}

Expect.prototype.toContain = function(something) {
  if (this.thing.includes(something)) {
    return "PASS"
  } else {
    return "FAIL"
  }
}

expect = function(thing) {
  obj = new Expect(thing)
  return obj
}

var page = window.document.body.innerHTML;
