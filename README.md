### A simpler Python & Nodejs communication module.

```javascript
let PythonController = require("node-python-communication").Process;

let process = new PythonController();

process.configure(`${__dirname}\\main.py`, [true, 30, 10000000]); 
// random test data can be all data types.

// Start the python script
process.start();

// listen for more data
process.listen.on("data", (data) => console.log(data.toString())); // convert buffer to a string

//listen and handle errors
process.listen.on("error", (err) => console.log(err))

// listen for the script to finish
process.listen.on("close", () => console.log('closed'))


```

In your python script the only requirements are you import the sys module for getting the args passed from js.

```python

```





