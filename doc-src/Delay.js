const Delay = {
    /** 
    * @param {Runnable} runnable
    * @param {number} ticks
    * @returns {DelayTask} 
    */
    wait: (runnable, ticks) => {}, 
    /** 
    * @param {Runnable} runnable
    * @param {number} ticks
    * @returns {DelayTask} 
    */
    interval: (runnable, ticks) => {}, 
    /** 
    * @param {DelayTask} task
    */
    cancel: (task) => {}, 
    /** 
    * @param {number} sec
    * @returns {number} 
    */
    seconds: (sec) => {}, 

}