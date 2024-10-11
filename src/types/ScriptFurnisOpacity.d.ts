/**
 * Classe que representa os dados de opacidade de um conjunto de mobis.
 * @hideconstructor
 * @category Tipos
 * @author Gabriel T
 */
declare class ScriptFurnisOpacity {
	/**
	 * Adiciona um novo mobi ao conjunto
	 * @param {number} furniId - ID do mobi
	 * @param {number} alpha - Valor da opacidade (1 a 255)
	 */
	addFurniOpacity (furniId: number, alpha: number): void

	/**
	 * Remove um mobi adicionado anteriormente ao conjunto
	 * @param {number} furniId - ID do mobi
	 */
	removeFurniOpacity (furniId: number): void
}

export { ScriptFurnisOpacity };
