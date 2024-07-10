const {isMaster, isWorker}=require('child_process');
const cluster =require('cluster')

process.on('message', (data)=>{
    console.log('lol')
    process.send(data+1);
})