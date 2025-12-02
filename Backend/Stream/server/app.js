const fs = require('fs');

// // create a readable stream from a file
// const readStream = fs.createReadStream('input.txt', 'utf8');

// // create a writable stream to log data to a file
// const logStream = fs.createWriteStream('output.txt');

// // pipe the readable stream to the writable stream
// readStream.pipe(logStream);

// // handle stream events
// readStream.on('error', (err) => {
//     console.error('Error reading the file:', err);
// });
// logStream.on('error', (err) => {
//     console.error('Error writing to the file:', err);
// });
// logStream.on('finish', () => {
//     console.log('file cope to output.txt');
// });



// create a readable stream from a file
const readableStream = fs.createReadStream('input.txt', {
    encoding: 'utf8',
    highWaterMark: 64 * 1024 // 64KB chunk size
});

// event for readable stream
readableStream.on('data', (chunk) => {
    console.log(`Received ${chunk.length} bytes of data.`);
    console.log(chunk);
});
readableStream.on('end', () => {
    console.log('No more data to read.');
});
readableStream.on('error', (err) => {
    console.error('Error reading the file:', err);
});
