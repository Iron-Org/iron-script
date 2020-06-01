/// <reference path="types/IScriptReachable.js"/>
/// <reference path="types/ScriptEntity.js"/>
/// <reference path="types/ScriptFurni.js"/>

/**
 * Pathfinder
 * @author Arthur L
 * @author Gabriel T
 */
interface Pathfinder {
	/**
	 * Gera um caminho para entidade
	 * @param {ScriptEntity} entity - Entidade
	 * @param {IScriptReachable} position - Destino
	 * @returns {IScriptReachable[]}
	 */
	public makeEntityPath (entity:ScriptEntity, position:IScriptReachable) : IScriptReachable[]
	/**
	 * Gera um caminho para o furni
	 * @param {ScriptFurni} furni - Mobilia
	 * @param {IScriptReachable} position - Destino
	 * @returns {IScriptReachable[]} 
	 */
	public makeFurniPath (furni:ScriptFurni, position:IScriptReachable) : IScriptReachable[]
	/**
	 * Gera um caminho para entidade
	 * @param {ScriptEntity} entity - Entidade
	 * @param {Number} x - Posição X do Destino
	 * @param {Number} y - Posição Y do Destino
	 * @returns {IScriptReachable[]}
	 */
	public makeEntityPath (entity:ScriptEntity, x:Number, y:Number) : IScriptReachable[]
	/**
	 * Gera um caminho para o furni
	 * @param {ScriptFurni} furni - Mobilia
	 * @param {Number} x - Posição X do Destino
	 * @param {Number} y - Posição Y do Destino
	 * @returns {IScriptReachable[]} 
	 */
	public makeFurniPath (furni:ScriptFurni, x:Number, y:Number) : IScriptReachable[]
}

declare const Pathfinder : Pathfinder