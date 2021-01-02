### A simpler Python & Nodejs communication module.

```javascript
let pyPackage = require("python-script-helper");
// This is the declaration of a new process.
let process = new pyPackage.pythonProcess ();


process.configure(options); // configure new options for the script
process.start(); // actually runs the scripts;

process.on("started", (data) => console.log(data));
process.on("data", (data) => console.log(data));
process.on("error", (err) => console.log(err));
process.on("closed", (data) => console.log(data));

process.kill()
// will stop listening for events and will get rid of the process object

// later having multiple processes available to control at once could be nice as well.
let processes = pyPackage.setMultipleProcesses();

let scripts = ["script.py", "script2.py"];
let script_args = [
  [12, 578, 4.4, true], 
  ["https://systr.tech/about", true, "scrape"]
]
processes.config(scripts, script_args);

```

The Module should produce a object that can be interacted with and allow event handlers to be set by the user.



