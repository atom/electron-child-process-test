// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const sourceToEval = `
  console.log('starting child process 1')
  process.on('message', m => console.log('child 1 got message', m))
  console.log('waiting for messages in child process 1...')
`

const {fork} = require('child_process')

console.log('forking child process 1 (using --eval)')
const child1  = fork('--eval', [sourceToEval])
console.log('done forking child 1, sending message')
child1.send('hello from your parent')

console.log('forking child process 1 (using module path)')
const child2  = fork('./child')
console.log('done forking child r, sending message')
child2.send('hello from your parent')
