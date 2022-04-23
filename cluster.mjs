import cluster from "cluster";
import os from "os";
import process from "process";
import http from "http";

if (cluster.isPrimary || cluster.isMaster) {
    // run worker: fork()
    console.info(`primary : ${process.pid}`);
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }
    // turn on worker again if worker exit
    cluster.addListener("exit", (worker) => {
        console.info(`Worker-${worker.id} is exit`);
        cluster.fork();
    })
}

if (cluster.isWorker) {
    console.info(`worker : ${process.pid}`);

    const server = http.createServer((request, response) => {
        response.write(`Response from process ${process.pid}`);
        response.end();
        process.exit(); // simulate when process worker is exit(), will trigger cluster to fork() or create new worker fork()
    });

    server.listen(3000);
}