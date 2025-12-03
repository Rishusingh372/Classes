// const buffer1 = Buffer.alloc(100);
// const buffer2 = new Buffer('cybrom');
// const buffer3=Buffer.from([1,2,3,4]);

// console.log(buffer1);
// console.log(buffer2);
// console.log(buffer3);


// // Writing data to Buffer
// buffer1.write('happy')
// console.log(buffer1)

// // Reading data from Buffer

// const a=buffer1.toString('utf-8')
// console.log(a);

// // check object is Buffer or not

// console.log(Buffer.isBuffer(buffer1));

// // check the length of Buffer
// console.log(buffer1.length)

// // copy buffer
// const bufferSrc=new Buffer('ABC')
// const bufferDest= Buffer.alloc(3);
// bufferSrc.copy(bufferDest);
// console.log(bufferDest);

// const Data = bufferDest.toString('utf-8')
// console.log(Data);

// // Slicing Data
// const bufferOld = new Buffer('welcom To cybrom');
// const bufferNew = bufferOld.slice(0,4);
// console.log(bufferNew.toString());

// // Concate Buffer
// const bufferone= new Buffer('cybrom');
// const buffertwo= new Buffer(' is a company');
// const bufferthree= Buffer.concat([bufferone, buffertwo]);
// console.log(bufferthree.toString());

// // Comparing Buffers
// const bufferA = new Buffer('cybrom');
// const bufferB = new Buffer('cybrom');
// const bufferC = new Buffer('cybrom1');
// console.log(bufferA.equals(bufferB)); // true
// console.log(bufferA.equals(bufferC)); // false  

// console.log(bufferA.compare(bufferB)); // 0
// console.log(bufferA.compare(bufferC)); // -1 (bufferA is less than bufferC)
// console.log(bufferC.compare(bufferA)); // 1 (bufferC is greater than bufferA)   
// console.log(bufferA.compare(bufferA)); // 0 (same buffer)

// // Fill Buffer
// const bufferFill = Buffer.alloc(10);
// bufferFill.fill('x');
// console.log(bufferFill.toString());


// // Buffer to JSON
// const bufferJson = Buffer.from('Hello, World!');
// const json = bufferJson.toJSON();
// console.log(json);

// // JSON to Buffer
// const jsonBuffer = Buffer.from(json.data);
// console.log(jsonBuffer.toString());

const os = require('os');

console.log(os.cpus().length); // Number of CPU cores
