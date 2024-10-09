/**
 * Classe que representa posição no quarto.
 * @class
 * @hideconstructor
 * @implements {IScriptReachable}
 * @author Arthur L
 * @author Gabriel T
 */
class ScriptPosition {
	/**
	 * Retorna posição X
	 * @readonly
	 * @returns {Number} x
	 */
	getX () {}
	/**
	 * Retorna posição Y
	 * @readonly
	 * @returns {Number} y
	 */
	getY () {}
	/**
	 * Retorna posição Z
	 * @readonly
	 * @returns {Number} z
	*/
	getZ () {}
  /**
   * Retorna se a posição X e Y é igual a posição fornecida.
	 * @returns {Boolean}
	*/
  equals (position) {}
}
