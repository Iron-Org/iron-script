/// <reference path='types/ScriptEntity.js'/>

/**
 * Callback de execução de comandos.
 * 
 * @callback Commands~CommandCallback
 * @param {ScriptEntity} user - Usuário que o executou.
 * @param {String} message - Mensagem enviada pelo usuário.
 */

/**
 * Constante responsável por gerenciar os comandos.
 * @namespace Commands
 * @author Arthur L
 * @author Gabriel T
 */
const Commands = {
	/**
	 * Registra o comandos
	 * @example
	 * Commands.register(':comando', true, (entity, text) => {
	 *      //Comando é executado!
	 * })
	 * 
	 * @param {String} text - Comando a ser utilizado.
	 * @param {Boolean} needStartText - Define se a mensagem deverá ser iniciada com o comando.
	 * @param {Commands~CommandCallback} callback - Callback executado ao comando ser utilizado.
	*/
	register (text, needStartText, callback) {},

	/**
	 * Registra o comandos
	 * @example
	 * Commands.register(':comando', (entity, text) => {
	 *      //Comando é executado!
	 * })
	 * 
	 * @param {String} text - Comando a ser utilizado.
	 * @param {Commands~CommandCallback} callback - Callback executado ao comando ser utilizado.
	*/
	register (text, callback) {}
}
