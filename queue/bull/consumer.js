var Queue = require('bull');

var testQueue = new Queue('test Queue', 'redis://127.0.0.1:6379');


testQueue.add({ image: 'http://example.com/image1.tiff' });