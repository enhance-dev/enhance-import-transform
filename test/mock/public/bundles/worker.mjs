function Worker() {
  this.onmessage = function(e) {
    this.postMessage(e.data);
  }
}