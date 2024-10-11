/**
 * Classe que representa um valor dentro do Storage.
 * @hideconstructor
 * @category Tipos
 */
declare class StorageValue {
	/**
	* Retorna a chave
	*/
	getKey (): string

  /**
	* Retorna o valor
	*/
	getValue (): string
}

export { StorageValue };
