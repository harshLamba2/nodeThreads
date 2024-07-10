const { fork, isMaster, isWorker, Worker } = require('cluster');
const cluster = require('cluster');

console.log(this)

if (cluster.isMaster) {
    // Master process
    const worker = cluster.fork('./child');

    worker.send(0);

    worker.on('message', (data) => {
        console.log(data)
        if (data <= 10) {
            worker.send(data);
        } else {
            console.log('data received to be ' + data + ' which is not less than or equal to 10');
        }
    });
} else {
    // Worker process
    process.on('message', (data) => {
        process.exit(1);
        console.log(data)
        process.send(data + 1);
    });
}
