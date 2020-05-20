/// <reference path='types/ScriptEntity.js'/>

/**
 * Callback de execução de comandos.
 * @callback CommandCallback
 * @param {ScriptEntity} player - Jogador que o executou.
 * @param {String} message - Mensagem enviada pelo jogador.
 */

/**
 * Constante responsável por gerenciar os comandos.
 * @namespace Commands
 */
const Commands = {

    /**
     * Registra o comandos
     * @example
     * Commands.register(':comando', true, (entity, text) => {
     *      //Comando é executado!
     * })
     * Commands.register(':comando', (entity, text) => {
     *      //Comando é executado!
     * })
     *
     * @param {String} text - Comando a ser utilizado.
     * @param {(CommandCallback|Boolean)=} needStartText - Define se a mensagem deverá ser iniciada com o comando.
     * @param {CommandCallback=} callback - Callback executado ao comando ser utilizado.
    */
    register: (text, needStartText, callback) => {},
}
