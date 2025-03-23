import { ScriptGroup } from "./ScriptGroup";

/**
 * Classe para consulta de dados de um Quarto do hotel.
 * @hideconstructor
 * @category Tipos
 * @author Gabriel T
 */
declare class ScriptRoomData {
  /**
   * Retorna o ID do Quarto
   */
  getId(): number

  /**
   * Retorna o nome do Quarto.
   */
  getName(): string

  /**
  * Retorna a descrição do Quarto.
  */
  getDescription(): string

  /**
   * Retorna o id do usuário dono do Quarto.
   */
  getOwnerId(): number

  /**
   * Retorna o username do usuário dono do Quarto.
   */
  getOwnerUsername(): string

  /**
   * Retorna o Grupo do Quarto.
   */
  getGroup(): ScriptGroup

  /**
   * Retorna estado atual do atravessar.
   */
  getWalkThrough(): boolean

  /**
   * Retorna se o Quarto está com mobis bloqueados.
   */
  isFurnitureBlocked(): boolean

  /**
   * Retorna o estado de trocas do Quarto.
   * 0: Desabilitado
   * 1: Apenas donos ou usuários com direitos negociam
   * 2: Todos negociam
   */
  getTradeState(): number

  /**
   * Retorna estado atual da diagonal.
   */
  getDiagonal(): boolean

  /**
   * Retorna o atual estado do mute no quarto.
   */
  getRoomMute(): number

  /**
   * Retorna se o usuário tem direitos no quarto.
   * @param {number} id - Id do usuário.
   */
  hasRights(id: number): boolean

  /**
   * Retorna a quantidade de usuários no quarto
   */
  userCount(): number

  /**
   * Retorna a quantidade de bots no quarto
   */
  botCount(): number

  /**
   * Retorna a quantidade de pets no quarto
   */
  petCount(): number

  /**
   * Retorna a quantidade total de entidades no quarto
   */
  entityCount(): number
}

export { ScriptRoomData };
