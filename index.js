
/**
 * Object for Easier Comminucation between one or multiple Python process's.
 */
class NodePy {

    constructor () {
        let ev = require('events');
        this.eventListener = new ev.EventEmitter();
         // Main Defines 
        this.spawn = require("child_process").spawn;
            
         // used for processes
        this.options =  []
    
        const onError = function (e) { 
            return e
         }
     
        const onData = function (d) { 
            return d.toString();
        }
     
        const onClose = function (d) { 
            return d.toString();
        }
    
        const onStart = function (p) {
            return p;
        };
    
        this.eventListener.on("start", onStart);
        this.eventListener.on('error', onError);
        this.eventListener.on('data', onData);
        this.eventListener.on('close', onClose);
    
        this.listen = this.eventListener;
    }
    
    /**
     * Set the options for each python process
     * @param {*} script The path to the python script
     * @param {*} args Aray containing args passed to each python process.
     */
    configure (script, args) {
        this.options = [];
        this.options[0] = script;

        args.forEach(arg => {
           this.options.push(arg);
        })
    }

    /**
     * Clear the events and clear the options. This will disable all events
     */
    close () {
        this.eventListener.removeAllListeners();
        this.options = [];
    }

    /**
     * Creates the Python spawn and if multiple files are present in the scripts array then one for each sccript will be created. 
     *@param scripts Array of type string that contains the script location for the python process.
     *@param args Array containing args for the python script to use as data. If multiple scripts are selected then each arg must be an array of args for the certaion script.
     */
    start () {
        
        this.pyProcess = this.spawn('python', this.options);
        this.pyProcess.stdout.on('data', (data) => {
            this.eventListener.emit("data", data);
        });

        this.pyProcess.stdout.on("close", (data) => {
            this.eventListener.emit("close", data);
        });

        this.pyProcess.stdout.on("error", (error) => {
            this.eventListener.emit("error", error);
        });
       
    }

}



module.exports = {Process: NodePy};
