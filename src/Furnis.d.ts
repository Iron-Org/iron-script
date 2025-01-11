import { ScriptInventoryItem, ScriptGiftData } from './types';

/**
 * Constante responsável por gerenciar os mobis.
 * _Necessário escopo de Furnis._
 * _Necessário escopo de Raros para manipulação de furnis raros._
 * @category Classes
 * @author Gabriel T
 */
declare namespace Furnis {
  /**
   * Retorna o item de dentro do inventário do usuário.
   * @param {number} playerId - Id do usuário que possui o item.
   * @param {number} itemId - Id do item a ser buscado.
  */
  function getItem(playerId: number, itemId: number): ScriptInventoryItem

  /**
   * Retorna os itens de dentro do inventário do usuário pelo id base.
   * @param {number} playerId - Id do usuário que possui o item.
   * @param {number} baseId - Id base do item a ser buscado.
  */
  function getItemsByBaseId(playerId: number, baseId: number): ScriptInventoryItem[]

  /**
   * Retorna a quantidade de itens dentro do inventário do usuário pelo id base.
   * @param {number} playerId - Id do usuário que possui o item.
   * @param {number} baseId - Id base do item a ser buscado.
  */
  function getInventoryItemsQuantityByBaseId(playerId: number, baseId: number): number

  /**
   * Cria um item dentro do inventário do usuário
   * @param {number} playerId - Id do usuário que irá receber o item.
   * @param {number} baseId - Id base do item.
   * @param {string} extradata - Extradata do item.
  */
  function createItem(playerId: number, baseId: number, extradata: string): ScriptInventoryItem

  /**
   * Gera dados de um presente, usado posteriomente para cria-lo
   * @param {number} baseId - ID da base do item dentro do presente
   * @param {string} extradata - Extradata do item dentro do presente
   * @param {number} senderId - ID do remetente no presente
   * @param {string} receiver - Username do destinátario no presente
   */
  function createGiftData(baseId: number, extradata: string, senderId: number, receiver: string): ScriptGiftData

  /**
   * Cria um presente dentro do inventário do usuário
   * Cores: red, white, darkOrange, pink, lightOrange, yellow, green, cyan, blue, gray
   * @param {number} playerId - ID da usuário que irá receber o item.
   * @param {string} giftColor - Cor da caixa do presente
   * @param {ScriptGiftData} giftData - Dados do presente
   */
  function createGiftItem(playerId: number, giftColor: string, giftData: ScriptGiftData): ScriptInventoryItem

  /**
   * Transfere um item de dentro do inventário do usuário para outro.
   * @param {number} fromPlayerId - Id do usuário que possui o item.
   * @param {number} toPlayerId - Id do usuário que irá receber o item.
   * @param {number} itemId - Id do item a ser transferido.
  */
  function transferItem(fromPlayerId: number, toPlayerId: number, itemId: number): boolean

  /**
   * Deleta um item de dentro do inventário do usuário.
   * @param {number} playerId - Id do usuário que possui o item.
   * @param {number} itemId - Id do item a ser deletado.
  */
  function deleteItem(playerId: number, itemId: number): boolean

  /**
   * Deleta a quantidade de itens de dentro do inventário do usuário pelo id base.
   * @param {number} playerId - Id do usuário que possui o item.
   * @param {number} baseId - Id base do item a ser deletado.
   * @param {number} amount - Quantidade de itens a serem deletados.
  */
  function deleteItemsByBaseId(playerId: number, baseId: number, amount: number): boolean
}
