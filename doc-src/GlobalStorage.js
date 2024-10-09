/**
 * Gerenciador de armazenamento global.
 * Armazena valores que podem ser consultados com uma chave de indentificação, em qualquer quarto do usuário
 * @namespace GlobalStorage
 * @author Arthur L
 * @author Gabriel T
 */
const GlobalStorage = {
	/**
	 * Consulta um valor correspondente a chave buscada.
	 * @param {String} key - Chave da propriedade a ser buscada.
	 * @returns {String}
	 */
	get (key) {},
	/**
	 * Defini/Atualiza valor correspondente a chave buscada.
	 * @param {String} key - Chave da propriedade a definir.
	 * @param {*} value - Novo valor a ser definido.
	 */
	set (key, value) {},
	/**
	 * Deleta valor correspondente a chave buscada.
	 * @param {String} key - Chave da propriedade a ser deletada.
	 */
	delete (key) {},
  /**
	 * Consulta todos os valores que se iniciam com a chave buscada.
   * @param {String} key - Chave da propriedade a ser buscada.
   * @returns {StorageValue}
   */
	startsWith (key) {},
}
