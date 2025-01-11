/**
 * Gerenciador de armazenamento por quarto. 
 * Armazena valores que podem ser consultados com uma chave de indentificação, somente no quarto em que foi definido.
 * @category Classes
 * @author Arthur L
 * @author Gabriel T
 */

/* Em manutenção, use no lugar GlobalStorage */
declare namespace RoomStorage {
  /**
  * @param {string} key - Chave da propriedade a ser buscada
  */
  function get(key: string): string

  /**
  * @param {string} key - Chave da propriedade a definir.
  * @param {*} value - Novo valor a ser definido.
  */
  function set(key: string, value: any): void

  /**
  * @param {string} key - Chave da propriedade a ser deletada.
  */
  function _delete(key: string): void

  /**
   * Consulta todos os valores que se iniciam com a chave buscada.
   * _Necessário escopo de Utilidades do Banco de Dados._
   * @param {string} key - Chave da propriedade a ser buscada.
   * @param {number} offset - Valor do deslocamento, quantas entradas devem ser puladas.
   * @returns {StorageValue}
   */
  function startsWith(key: string): StorageValue[]
}
