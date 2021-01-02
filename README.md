### A simpler Python & Nodejs communication module.

```javascript
let PythonController = require("node-python-communication").Process;

let process = new PythonController();

process.configure(`${__dirname}\\main.py`, [true, "Hello World", 10.5]); // random test data can be all data types.

// run the script
process.start();

// listen for more data
process.listen.on("data", (data) => console.log(data.toString())); // convert buffer to a string

//listen and handle errors
process.listen.on("error", (err) => console.log(err))

// listen for the script to finish
process.listen.on("close", () => console.log('closed event fired'))



```

In your python script the only requirements are you import the sys module for getting the args passed from js.

```python
import sys, time

# to access arg1 then simply select
arg_one = sys.argv[1] # true

# arg 2
arg_two = sys.argv[2] # "Hello World"

arg_three = sys.argv[3] # 10.5 It may need to be converted to a float before it can be used in python 

print(f"hello from the python process this is some random data: {10 * float(arg_three)}")
sys.stdout.flush() # flush the file when you are ready to send back data
# flushing will fire the on("data") event in the javascript file


# Wait 10 seconds for close event to fire after script ends
time.sleep(10)
print("waited 10 seconds now I will fire the closed event")
sys.stdout.flush()



```





