/// <reference path="types/IScriptReachable.js"/>
/// <reference path="types/ScriptEntity.js"/>
/// <reference path="types/ScriptFurni.js"/>

/**
 * Pathfinder
 * @namespace Pathfinder
 * @author Arthur L
 * @author Gabriel T
 */
const Pathfinder = {
	/**
	 * Gera um caminho para entidade
	 * @param {ScriptEntity} entity - Entidade
	 * @param {IScriptReachable} position - Destino
	 * @returns {IScriptReachable[]}
	 */
	makeEntityPath (entity, position) {},
	/**
	 * Gera um caminho para o furni
	 * @param {ScriptFurni} furni - Mobilia
	 * @param {IScriptReachable} position - Destino
	 * @returns {IScriptReachable[]} 
	 */
	makeFurniPath (furni, position) {},
	/**
	 * Gera um caminho para entidade
	 * @param {ScriptEntity} entity - Entidade
	 * @param {IScriptReachable} x - Posição X do Destino
	 * @param {IScriptReachable} y - Posição Y do Destino
	 * @returns {IScriptReachable}
	 */
	makeEntityPath (entity, x, y) {},
	/**
	 * Gera um caminho para o furni
	 * @param {ScriptFurni} furni - Mobilia
	 * @param {IScriptReachable} x - Posição X do Destino
	 * @param {IScriptReachable} y - Posição Y do Destino
	 * @returns {IScriptReachable[]} 
	 */
	makeFurniPath (furni, x, y) {}
}