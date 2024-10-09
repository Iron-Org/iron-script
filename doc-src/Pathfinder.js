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
	 * @param {Number} x - Posição X do Destino
	 * @param {Number} y - Posição Y do Destino
   * @param {Boolean} enableDiagonal - Se diagonal é permitida
   * @param {Boolean} overrideLastStep - Se deve atravessar a entidade que estiver no ultimo piso do caminho
   * @param {Boolean} onlyLastStep - Se deve retornar apenas o primeiro piso mais próximo
	 * @returns {IScriptReachable[]}
	 */
	makeEntityPath (entity, x, y, enableDiagonal, overrideLastStep, onlyLastStep) {},
  /**
	 * Gera um caminho para entidade
	 * @param {ScriptEntity} entity - Entidade
	 * @param {Number} x - Posição X do Destino
	 * @param {Number} y - Posição Y do Destino
	 * @returns {IScriptReachable}
	 */
	makeEntityPath (entity, x, y) {},
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
	 * @param {Number} x - Posição X do Destino
	 * @param {Number} y - Posição Y do Destino
   * @param {Boolean} enableDiagonal - Se diagonal é permitida
   * @param {Boolean} overrideLastStep - Se deve atravessar a entidade que estiver no ultimo piso do caminho
   * @param {Boolean} onlyLastStep - Se deve retornar apenas o primeiro piso mais próximo
	 * @returns {IScriptReachable[]}
	 */
	makeFurniPath (furni, x, y, enableDiagonal, overrideLastStep, onlyLastStep) {},
	/**
	 * Gera um caminho para o furni
	 * @param {ScriptFurni} furni - Mobilia
	 * @param {IScriptReachable} position - Destino
	 * @returns {IScriptReachable[]}
	 */
	makeFurniPath (furni, position) {},
	/**
	 * Gera um caminho para o furni
	 * @param {ScriptFurni} furni - Mobilia
	 * @param {IScriptReachable} x - Posição X do Destino
	 * @param {IScriptReachable} y - Posição Y do Destino
	 * @returns {IScriptReachable[]}
	 */
	makeFurniPath (furni, x, y) {}
}
