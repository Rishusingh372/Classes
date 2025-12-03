
// const os = require('os');
// console.log(os.cpus().length); // Number of CPU cores

const cluster = require("cluster");
const http = require("http");
const os = require("os");
if (cluster.isMaster) {
    // Master process
    console.log(`Master process ${process.pid} is running`);
    // Get number of CPU cores
    const numCPUs = os.cpus().length;
    // Fork workers
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    // Listen for worker exit
    cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        console.log("Starting a new worker...");
        cluster.fork(); // Restart a new worker if one dies
    });
} else {
    // Worker processes
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`Hello from Worker ${process.pid}\n`);
    }).listen(3000);
    console.log(`Worker ${process.pid} started`);
}

