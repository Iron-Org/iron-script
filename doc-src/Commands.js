/// <reference path="types/ScriptEntity.js"/>

/**
 * @namespace Commands
 */
const Commands = {
    /**
     * @param {String} text
     * @param {Boolean} needStartText
     * @param {Commands~CommandCallback} callback
    */
    register: (text, needStartText, callback) => {},
}

/**
 * Callback
 * @callback Commands~CommandCallback
 * @param {ScriptEntity} entity
 * @param {String} message
 */