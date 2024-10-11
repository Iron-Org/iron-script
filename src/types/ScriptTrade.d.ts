import { FakeEntity, ScriptInventoryItem } from '.';
import { ScriptEntity } from '.';

/**
 * Classe que representa uma troca do script.
 * @hideconstructor
 * @category Tipos
 * @author Gabriel T
 */
declare class ScriptTrade {
  /**
   * Retorna o usuário na troca
   */
  getUser (): ScriptEntity

  /**
   * Retorna o manager na troca
   */
  getManager (): FakeEntity

  /**
   * Retorna o estágio da troca
   */
  getStage (): number

  /**
   * Retorna os itens que o usuário inseriu na troca
   */
  getUserItems (): ScriptInventoryItem[]

  /**
   * Retorna os itens que o script inseriu na troca
   */
  getManagerItems (): ScriptInventoryItem[]

  /**
   * Retorna a quantidade de items oferecidos pelo usuário
   */
  getUserItemsQuantity (): number

  /**
   * Retorna a quantidade de items oferecidos pelo manager
   */
  getManagerItemsQuantity (): number

  /**
   * Retorna o usuário que recebera os itens após a conclusão da troca
   */
  getPlayerRemittee (): number

  /**
   * Define o usuário que recebera os itens após a conclusão da troca
   * @param {number} user - ID do usuário
   */
  setPlayerRemittee (user: number): void

  /**
   * Adiciona um novo item a troca
   * @param {number} baseId - ID base do item
   * @param {string} extradata - Extradata do item
   */
  addNewItem (baseId: number, extradata: string): boolean

  /**
   * Adiciona um novo item a troca
   * @param {number} playerId - ID do usuário
   * @param {number} itemId - ID do item
   */
  addUserItem (playerId: number, itemId: number): boolean

  /**
   * Remove um item da troca
   * @param {number} itemId - ID do item a ser removido
   */
  removeItem (itemId: number): boolean

  /**
   * Remove todos os items que o script colocou na troca
   */
  clearItems (): void

  /**
   * Verifica se o usuário fornecido é o usuário na troca
   * @param {ScriptEntity} user - Usuário a ser verificado
   */
  isUser (user: ScriptEntity): boolean

  /**
   * Retorna se o usuário aceitou a troca
   */
  userHasAccepted (): boolean

  /**
   * Retorna se o manager aceitou a troca
   */
  managerHasAccepted (): boolean

  /**
   * Retorna se nos items oferecidos pelo usuário há um item com id base igual ao fornecido
   * @param {number} baseId
   */
  hasEqualItemOnUser (baseId: number): boolean

  /**
   * Retorna se nos items oferecidos pelo manager há um item com id base igual ao fornecido
   * @param {number} baseId
   */
  hasEqualItemOnManager (baseId: number): boolean

  /**
   * Retorna se nos items oferecidos pelo usuário há um item com id base diferente do fornecido
   * @param {number} baseId
   */
  hasDifferentItemOnUser (baseId: number): boolean

  /**
   * Retorna se nos items oferecidos pelo manager há um item com id base diferente do fornecido
   * @param {number} baseId
   */
  hasDifferentItemOnManager (baseId: number): boolean

  /**
	 * Aceita a troca
	 */
  accept (): void

  /**
	 * Rejeita a troca
	 */
  unaccept (): void

  /**
	 * Confirma a troca
	 */
  confirm (): void

  /**
	 * Cancela a troca
	 */
	cancel (): void
}

export { ScriptTrade };
