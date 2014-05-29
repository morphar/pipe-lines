### Pipe lines
A Stream pipe to split the stream into lines

--

Example:
```JavaScript
var PipeLines = require('pipe-lines');

var pipeLines = new PipeLines();
pipeLines.on('data', function(data) {
  console.log('|'+data+'|');
});

var readStream = process.stdin;
readStream.pipe(pipeLines);
```

You can run test with:
```
cat README.md | node example.js
```
