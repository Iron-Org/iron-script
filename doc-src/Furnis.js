/// <reference path="types/ScriptInventoryItem.js"/>
/// <reference path="types/ScriptGiftData.js"/>

/**
 * Constante responsável por gerenciar os mobis.
 * @namespace Furnis
 * @author Gabriel T
 */
const Furnis = {
  /**
	 * Retorna o item de dentro do inventário do usuário.
	 * @param {number} playerId - Id do usuário que possui o item.
	 * @param {number} itemId - Id do item a ser buscado.
   * @returns {ScriptInventoryItem}
	*/
	getItem (playerId, itemId) {},
	/**
	 * Cria um item dentro do inventário do usuário
	 * @param {number} playerId - Id do usuário que irá receber o item.
	 * @param {number} baseId - Id base do item.
	 * @param {string} extradata - Extradata do item.
   * @returns {ScriptInventoryItem}
	*/
	createItem (playerId, baseId, extradata) {},
  /**
   * Gera dados de um presente, usado posteriomente para cria-lo
   * @param {number} baseId - ID da base do item dentro do presente
   * @param {string} extradata - Extradata do item dentro do presente
   * @param {number} senderId - ID do remetente no presente
   * @param {string} receiver - Username do destinátario no presente
   * @returns {ScriptGiftData}
   */
  createGiftData (baseId, extradata, senderId, receiver) {},
  /**
   * Cria um presente dentro do inventário do usuário
   * Cores: red, white, darkOrange, pink, lightOrange, yellow, green, cyan, blue, gray
   * @param {number} playerId - ID da usuário que irá receber o item.
   * @param {string} giftColor - Cor da caixa do presente
   * @param {ScriptGiftData} giftData - Dados do presente
   * @returns {ScriptInventoryItem}
   */
  createGiftItem (playerId, giftColor, giftData) {},
	/**
	 * Transfere um item de dentro do inventário do usuário para outro.
	 * @param {number} fromPlayerId - Id do usuário que possui o item.
	 * @param {number} toPlayerId - Id do usuário que irá receber o item.
	 * @param {number} itemId - Id do item a ser transferido.
   * @returns {boolean}
	*/
	transferItem (fromPlayerId, toPlayerId, itemId) {},
  /**
	 * Deleta um item de dentro do inventário do usuário.
	 * @param {number} playerId - Id do usuário que possui o item.
	 * @param {number} itemId - Id do item a ser deletado.
   * @returns {boolean}
	*/
	deleteItem (playerId, itemId) {}
}
