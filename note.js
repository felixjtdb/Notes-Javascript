
(function(exports) {
  function Notes() {
    this.create = function (text) {
      return "<p>"+text+"</p>"
    };
  };

  exports.Notes = Notes;
})(this);
