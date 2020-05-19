/// <reference path="types/ScriptEntity.js"/>

/**
 * Callback
 * @callback commandCallback
 * @param {ScriptEntity} entity
 * @param {string} message
 */

const Commands = {
    /**
     * @param {string} text
     * @param {boolean} needStartText
     * @param {commandCallback} callback
     */
    register: (text, needStartText, callback) =>{},

}


Commands.register("sk", true, (e, s)=>{
    
})