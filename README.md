Running this with `electron@1.6.3`, I see the following on stdout:

```
Nathans-MBP:electron-quick-start nathan$ electron .
starting child process 1
waiting for messages in child process 1...
starting child process 2
waiting for messages in child process 2...
child 2 got message hello from your parent
2017-03-16 18:01:48.476 Electron Helper[72093:2041200] Couldn't set selectedTextBackgroundColor from default ()
```

This would seem to indicate that the child process forked with `--eval` as its first option is either not receiving messages or not listening to them properly, even though it does start correctly and use `console.log` to write to `stdout` of the parent process.
