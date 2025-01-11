import { StorageValue } from "./types"

/**
 * Gerenciador de armazenamento global. 
 * Armazena valores que podem ser consultados com uma chave de indentificação, em qualquer quarto do usuário
 * @category Classes
 * @author Arthur L
 * @author Gabriel T
 */
declare namespace GlobalStorage {
  /**
   * Consulta um valor correspondente a chave buscada.
   * @param {string} key - Chave da propriedade a ser buscada.
   * @returns {string}
   */
  function get(key: string): string

  /**
   * Defini/Atualiza valor correspondente a chave buscada.
   * @param {string} key - Chave da propriedade a definir.
   * @param {*} value - Novo valor a ser definido.
   */
  function set(key: string, value: any): void

  /**
   * Deleta valor correspondente a chave buscada.
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
