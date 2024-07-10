const {fork} =require('child_process');

let child=fork('./child.js');

child.send(0);


console.log(this)
child.on('message', (data)=>{
    if(data<=10){
        child.send(data)
    }else{
        console.log('data recived to be '+data +' whih is not less than equals to 10')
    }
})