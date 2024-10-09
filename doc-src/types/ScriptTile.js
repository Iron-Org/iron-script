/// <reference path="IScriptReachable.js"/>

/**
 * Classe que representa um piso no quarto.
 * @class
 * @hideconstructor
 * @implements {IScriptReachable}
 * @author Arthur L
 * @author Gabriel T
 */
class ScriptTile {
	/**
	 * Retorna posição X do piso.
	 * @returns {Number}
	 */
	getX () {}
	/**
	 * Retorna posição Y do piso.
	 * @returns {Number}
	 */
	getY () {}
	/**
	 * Retorna posição Z do piso.
	 * @returns {Number}
	 */
	getZ () {}
	/**
	 * Retorna todos os furnis que estão no piso.
	 * @returns {ScriptFurni[]}
	 */
	getFurnis () {}
	/**
	 * Retorna todas entidades que estão no piso.
	 * @returns {ScriptEntity[]}
	 */
	getEntities () {}
	/**
	 * Retorna o Furni que está mais alto no piso.
	 * @returns {ScriptFurni}
	 */
	getTopFurni () {}
	/**
	 * Retorna a altura andável no piso.
	 * @returns {Number}
	 */
	getWalkHeight () {}
	/**
	 * Retorna se a um furni com interação de porta no piso.
	 * @returns {Boolean}
	 */
	hasGate () {}
	/**
	 * Retorna se tem algum furni no piso.
	 * @returns {Boolean}
	 */
	hasFurni () {}
	/**
	 * Retorna se tem entidades no piso.
	 * @returns {Boolean}
	 */
	hasEntities () {}
	/**
	 * Retorna se o piso pode ser empilhável.
	 * @returns {Boolean}
	 */
	canStack () {}
	/**
	 * Retorna se pode criar/posicionar furnis no piso.
	 * @returns {Boolean}
	 */
	canPlaceItem () {}
}
