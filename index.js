var util = require('util');
var Transform = require('stream').Transform;

module.exports = PipeLines = function (options) {
  if(!(this instanceof PipeLines)) return new PipeLines(options);
  Transform.call(this, options);
  this.lastLine = '';
};
util.inherits(PipeLines, Transform);

PipeLines.prototype._transform = function(chunk, encoding, done) {
  chunk = this.lastLine + chunk.toString();
  var lines = chunk.split('\n');
  this.lastLine = lines.pop();
  for(var i in lines) {
    this.push(lines[i]);
  }
  done();
};

PipeLines.prototype._flush = function(done) {
   if(this.lastLine) this.push(this.lastLine);
   this.lastLine = null;
   done();
};
