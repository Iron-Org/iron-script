/// <reference path="IScriptReachable.js"/>
/// <reference path="ScriptEntity.js"/>

/**
 * Classe que representa mobilia de quarto.
 * @class
 * @hideconstructor
 * @implements {IScriptReachable}
 * @author Arthur L
 * @author Gabriel T
 */
class ScriptFurni {
	/**
	 * Retorna o ID do Furni.
	 * @returns {Number}
	 */
	getId () {}
	/**
	 * Move o furni até a posição fornecida.
	 * @param {Number} x - Posição X para onde o furni será movido.
	 * @param {Number} y - Posição y para onde o furni será movido.
	 * @param {Number} z - Posição Z para onde o furni será movido.
	 * @param {Number} rot - Rotação definida ao furni ao ser movido.
	 */
	move (x, y, z, rot) {}
	/**
	 * Move o furni até a posição fornecida.
	 * @param {IScriptReachable} object - Onde o furni será movido.
	 * @param {Number} rot - Rotação
	 */
	move (object, rot) {}
	/**
	 * Retorna se a entidades a cima do furni.
	 * @returns {Boolean}
	 */
	hasEntities () {}
	/**
	 * Esconde o furni.
	 */
	hide () {}
	/**
	 * Retorna a posição Y atual do Furni.
	 * @returns {Number}
	 */
	getY () {}
	/**
	 * Ativa a interação do furni.
	 */
	toggleState () {}
	/**
	 * Mostra o furni
	 */
	show () {}
	/**
	 * Retorna a posição Z (altura) atual do Furni.
	 * @returns {Number}
	 */
	getZ () {}
	/**
	 * Retorna a posição X atual do Furni.
	 * @returns {Number}
	 */
	getX () {}
	/**
	 * Altera o estado do Furni.
	 * @param {*} value - Valor do estado em que o furni será definido.
	 */
	setState (value) {}
	/**
	 * Retorna todas as entidades que estão sobre o furni.
	 * @returns {ScriptEntity[]}
	 */
	getEntities () {}
	/**
	 * Retorna o ID do sprite do furni.
	 * @returns {Number}
	 */
	getSprite () {}
	/**
	 * Retorna o nome do furni.
	 * @returns {String}
	 */
	getName () {}
	/**
	 * Retorna se o furni é sentável por uma entidade.
	 * @returns {Boolean}
	 */
	canSit () {}
	/**
	 * Retorna se entidades podem andar sobre o furni.
	 * * @returns {Boolean}
	 */
	canWalk () {}
	/**
	 * Retorna o tipo da interação do furni.
	 * @returns {String}
	 */
	getInteractionType () {}
	/**
	 * Retorna quantidade de interações que o furni possui.
	 * @returns {Number}
	 */
	getInteractionModesCount () {}
	/**
	 * Retorna altura empilhável do furni.
	 * @returns {Number}
	 */
	getStackHeight () {}
	/**
	 * Retorna atual estado do furni.
	 * @returns {String}
	 */
	getState () {}
}