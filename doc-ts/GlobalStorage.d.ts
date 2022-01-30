/**
 * Gerenciador de armazenamento global. 
 * Armazena valores que podem ser consultados com uma chave de indentificação, em qualquer quarto do usuário
 * @author Arthur L
 * @author Gabriel T
 */
interface GlobalStorage {
	/**
	 * Consulta um valor correspondente a chave buscada.
	* @param {String} key - Chave da propriedade a ser buscada.
	* @returns {String|null}
	*/
	public get (key):String | null
	/** 
	 * Defini/Atualiza valor correspondente a chave buscada.
	* @param {String} key - Chave da propriedade a definir.
	* @param {*} value - Novo valor a ser definido.
	*/
	public set (key:String, value:String):void,
	/**
	 * Deleta valor correspondente a chave buscada.
	* @param {String} key - Chave da propriedade a ser deletada.
	*/
	public delete (key:String):void
}

declare const GlobalStorage : GlobalStorage