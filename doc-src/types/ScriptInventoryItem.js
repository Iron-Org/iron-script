/// <reference path="ScriptGiftData.js"/>

/**
 * Classe que representa um item dentro inventário de um usuário.
 * @class
 * @hideconstructor
 * @author Gabriel T
 */
class ScriptInventoryItem {
  /**
	 * Retorna o ID do item
	 * @returns {number}
	 */
	getId () {}
  /**
	 * Retorna o ID base do item
	 * @returns {number}
	 */
	getBaseId () {}
  /**
	 * Retorna o Sprite do item
	 * @returns {number}
	 */
	getSprite () {}
  /**
	 * Retorna o nome do item
	 * @returns {string}
	 */
	getName () {}
  /**
	 * Retorna o nome público do item
	 * @returns {number}
	 */
	getPublicName () {}
  /**
	 * Retorna se o mobi é sentável
	 * @returns {boolean}
	 */
	canSit () {}
  /**
	 * Retorna se o mobi é andável
	 * @returns {boolean}
	 */
	canWalk () {}
  /**
	 * Retorna a interação do item
	 * @returns {string}
	 */
	getInteractionType () {}
  /**
	 * Retorna a quantidade de interações do item
	 * @returns {number}
	 */
	getInteractionModesCount () {}
  /**
	 * Retorna a altura estacavel do mobi
	 * @returns {number}
	 */
	getStackHeight () {}
  /**
	 * Retorna o estado do mobi
	 * @returns {string}
	 */
	getState () {}
  /**
	 * Retorna a largura do mobi
	 * @returns {number}
	 */
	getItemWidth () {}
  /**
	 * Retorna o comprimento do mobi
	 * @returns {number}
	 */
  getItemLength () {}
  /**
	 * Retorna o LTD do mobi
	 * @returns {number}
	 */
  getLimitedUnit () {}
  /**
	 * Retorna o LTD máx do mobi
	 * @returns {number}
	 */
  getLimitedTotal () {}
  /**
   * Retorna os dados do presente
   * @returns {ScriptGiftData}
   */
  getGiftData () {}
}
