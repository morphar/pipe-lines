var PipeLines = require('./index');

var pipeLines = new PipeLines();
pipeLines.on('data', function(data) {
  console.log('|'+data+'|');
});

var readStream = process.stdin;
readStream.pipe(pipeLines);
