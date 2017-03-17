console.log('starting child process 2')
process.on('message', m => console.log('child 2 got message', m))
console.log('waiting for messages in child process 2...')
