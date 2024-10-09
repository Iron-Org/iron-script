/// <reference path="ScriptEntity.js"/>
/// <reference path="ScriptInventoryItem.js"/>

/**
 * Classe que representa uma troca do script.
 * @class
 * @hideconstructor
 * @author Gabriel T
 */
class ScriptTrade {
  /**
   * Retorna o usuário na troca
   * @returns {ScriptEntity}
   */
  getUser () {}
  /**
   * Retorna o manager na troca
   * @returns {FakeEntity}
   */
  getManager () {}
  /**
   * Retorna o estágio da troca
   * @returns {number}
   */
  getStage () {}
  /**
   * Retorna os itens que o usuário inseriu na troca
   * @returns {ScriptInventoryItem[]}
   */
  getUserItems () {}
  /**
   * Retorna os itens que o script inseriu na troca
   * @returns {ScriptInventoryItem[]}
   */
  getManagerItems () {}
  /**
   * Retorna a quantidade de items oferecidos pelo usuário
   * @returns {number}
   */
  getUserItemsQuantity () {}
  /**
   * Retorna a quantidade de items oferecidos pelo manager
   * @returns {number}
   */
  getManagerItemsQuantity () {}
  /**
   * Retorna o usuário que recebera os itens após a conclusão da troca
   * @returns {number}
   */
  getPlayerRemittee () {}
  /**
   * Define o usuário que recebera os itens após a conclusão da troca
   * @param {number} user - ID do usuário
   */
  setPlayerRemittee (user) {}
  /**
   * Adiciona um novo item a troca
   * @param {number} baseId - ID base do item
   * @param {string} extradata - Extradata do item
   * @returns {boolean}
   */
  addNewItem (baseId, extradata) {}
  /**
   * Adiciona um novo item a troca
   * @param {number} playerId - ID do usuário
   * @param {number} itemId - ID do item
   * @returns {boolean}
   */
  addUserItem (playerId, itemId) {}
  /**
   * Remove um item da troca
   * @param {number} itemId - ID do item a ser removido
   * @returns {boolean}
   */
  removeItem (itemId) {}
  /**
   * Remove todos os items que o script colocou na troca
   */
  clearItems () {}
  /**
   * Verifica se o usuário fornecido é o usuário na troca
   * @param {ScriptEntity} user - Usuário a ser verificado
   * @returns {boolean}
   */
  isUser (user) {}
  /**
   * Retorna se o usuário aceitou a troca
   * @returns {boolean}
   */
  userHasAccepted () {}
  /**
   * Retorna se o manager aceitou a troca
   * @returns {boolean}
   */
  managerHasAccepted () {}
  /**
   * Retorna se nos items oferecidos pelo usuário há um item com id base igual ao fornecido
   * @param {number} baseId
   * @returns {boolean}
   */
  hasEqualItemOnUser (baseId) {}
  /**
   * Retorna se nos items oferecidos pelo manager há um item com id base igual ao fornecido
   * @param {number} baseId
   * @returns {boolean}
   */
  hasEqualItemOnManager (baseId) {}
  /**
   * Retorna se nos items oferecidos pelo usuário há um item com id base diferente do fornecido
   * @param {number} baseId
   * @returns {boolean}
   */
  hasDifferentItemOnUser (baseId) {}
  /**
   * Retorna se nos items oferecidos pelo manager há um item com id base diferente do fornecido
   * @param {number} baseId
   * @returns {boolean}
   */
  hasDifferentItemOnManager (baseId) {}
  /**
	 * Aceita a troca
	 */
  accept () {}
  /**
	 * Rejeita a troca
	 */
  unaccept () {}
  /**
	 * Confirma a troca
	 */
  confirm () {}
  /**
	 * Cancela a troca
	 */
	cancel () {}
}
