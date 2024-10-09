/// <reference path="IScriptReachable.js"/>
/// <reference path="../Faker.js"/>

/**
 * Classe que representa mobilias Fakes.
 * Criadas pela {@link Faker}
 * @class
 * @hideconstructor
 * @implements {IScriptReachable}
 * @author Arthur L
 * @author Gabriel T
 */

class FakeFloorItem {
	/**
	 * Retorna o ID do FakeFurni
	 * @returns {number}
	 */
	getId () {}
	/**
	 * Retorna a posição X atual do FakeFurni.
	 * @returns {number}
	 */
	getX () {}
	/**
	 * Retorna a posição Y atual do FakeFurni.
	 * @returns {number}
	 */
	getY () {}
	/**
	 * Retorna a posição Z (altura) atual do Furni.
	 * @returns {number}
	 */
	getZ () {}
	/**
	 * Retorna o atual estado do FakeFurni
	 * @returns {string}
	 */
	getState () {}
  /**
   * Retorna o sprite atual do FakeFurni
   * @returns {number}
   */
  getSprite () {}
	/**
	 * Retorna altura empilhável do FakeFurni.
	 * @returns {number}
	 */
	getStackHeight () {}
	/**
	 * Retorna o valor da opacidade atual do mobi.
	 * @returns {number}
	 */
	getAlpha () {}
	/**
	 * Altera o estado do FakeFurni.
	 * @param {string} state - Valor do estado em que o furni será definido.
	 */
	setState (state) {}
	/**
	 * Define altura empilhável do FakeFurni.
	 * @param {number} height - Altura empilhável que será definida no FakeFurni.
	 */
	setStackHeight (height) {}
	/**
	 * Define a opacidade do FakeFurni.
	 * @param {number} alpha - Valor da opacidade (1 a 255).
	 * @returns {boolean}
	 */
	setOpacity (height) {}
  /**
	 * Move o FakeFurni para posição fornecida.
	 * @param {number} x - Posição X para onde o FakeFurni será movido.
	 * @param {number} y - Posição Y para onde o FakeFurni será movido.
	 * @param {number} z - Posição Z para onde o FakeFurni será movido.
	 */
	move (x, y, z) {}
	/**
	 * Teletransporta o FakeFurni para posição fornecida.
	 * @param {number} x - Posição X para onde o FakeFurni será movido.
	 * @param {number} y - Posição Y para onde o FakeFurni será movido.
	 * @param {number} z - Posição Z para onde o FakeFurni será movido.
	 * @param {number=} r - Rotação definida ao FakeFurni ao ser movido.
	 */
	move (x, y, z, r) {}
  /**
	 * Teletransporta o FakeFurni para posição fornecida.
	 * @param {number} x - Posição X para onde o FakeFurni será movido.
	 * @param {number} y - Posição Y para onde o FakeFurni será movido.
	 * @param {number} z - Posição Z para onde o FakeFurni será movido.
	 */
	warp (x, y, z) {}
  /**
   * Esconde o Fake Furni para todos os usuários do quarto.
   */
  hide () {}
  /**
   * Mostra o Fake Furni para todos os usuários do quarto.
   */
  show () {}
}
