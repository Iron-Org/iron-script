/// <reference path="types/ScriptTrade.js"/>

/**
 * Constante responsável por gerenciar trocas.
 * @namespace Trade
 * @author Gabriel T
 */
const Trade = {
	/**
	 * Cria uma troca entre o manager e o usuário
	 * @param {FakeEntity} manager - Player Fake que irá representar a troca.
	 * @param {ScriptEntity} player - Usuário que irá efetuar a troca.
   * @returns {ScriptTrade}
	*/
	createTrade (manager, player) {},
	/**
	 * Retorna a troca que o usuário estiver efetuando com o script
	 * @param {number | ScriptEntity} player - Id ou entidade do Usuário que esta na troca.
   * @returns {ScriptTrade}
	*/
	get (manager, player) {}
}
