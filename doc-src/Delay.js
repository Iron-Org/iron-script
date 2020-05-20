
/**
 * @namespace Delay
 */
const Delay = {
    /** 
    * @param {Runnable} runnable
    * @param {Number} ticks
    * @returns {DelayTask} 
    */
    wait: (runnable, ticks) => {}, 
    /** 
    * @param {Runnable} runnable
    * @param {Number} ticks
    * @returns {DelayTask}
    */
    interval: (runnable, ticks) => {}, 
    /** 
    * @param {DelayTask} task
    */
    cancel: (task) => {}, 
    /** 
    * @param {Number} sec
    * @returns {Number} 
    */
    seconds: (sec) => {},

}