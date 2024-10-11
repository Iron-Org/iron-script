import { IScriptReachable } from ".";

/**
 * Classe que representa posição no quarto.
 * @hideconstructor
 * @category Tipos
 * @author Arthur L
 * @author Gabriel T
 */
declare class ScriptPosition implements IScriptReachable {
	/**
	 * Retorna posição X
	 * @readonly
	 */
	getX (): number

	/**
	 * Retorna posição Y
	 * @readonly
	 */
	getY (): number

	/**
	 * Retorna posição Z
	 * @readonly
	*/
	getZ (): number

  /**
   * Retorna se a posição X e Y é igual a posição fornecida.
   * @param {Position} position - Posição a ser comparada
	*/
  equals (position: ScriptPosition): boolean
}

export { ScriptPosition };
