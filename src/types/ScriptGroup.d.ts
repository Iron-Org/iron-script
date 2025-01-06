import { ScriptGroupMember } from '.';

/**
 * Classe que representa grupo de quarto.
 * @hideconstructor
 * @category Tipos
 * @author Gabriel T
 */
declare class ScriptGroup {
  /**
   * Retorna o ID do Grupo.
   * @returns {number}
   */
  getId(): number

  /**
   * Retorna o titulo do Grupo.
   * @returns {string}
   */
  getTitle(): string

  /**
   * Retorna o descrição do Grupo.
   * @returns {string}
   */
  getDescription(): string

  /**
   * Retorna o emblema do Grupo.
   * @returns {number}
   */
  getBadge(): number

  /**
   * Retorna o id do dono do Grupo.
   * @returns {string}
   */
  getOwnerId(): string

  /**
   * Retorna o ID do quarto do Grupo.
   * @returns {number}
   */
  getRoomId(): number

  /**
   * Retorna o timestamp de quando Grupo foi criado.
   * @returns {number}
   */
  getCreatedTimestamp(): number

  /**
   * Retorna o tipo do Grupo.
   * 0: Regular
   * 1: Exclusivo
   * 2: Privado
   * @returns {number}
   */
  getType(): number

  /**
   * Retorna o color A do Grupo.
   * @returns {number}
   */
  getColorA(): number

  /**
   * Retorna o color B do Grupo.
   * @returns {number}
   */
  getColorB(): number

  /**
   * Retorna os membros do Grupo.
   * @returns {ScriptGroupMember[]}
   */
  getMembers(): ScriptGroupMember[]

  /**
   * Retorna os adminstradores do Grupo.
   * @returns {number[]}
   */
  getAdministrators(): number[]

  /**
   * Retorna os dados do membro do Grupo.
   * @param {number} playerId - ID do usuário
   * @returns {ScriptGroupMember[]}
   */
  getMember(playerId: number): ScriptGroupMember[]

  /**
   * Retorna se o membro pode decorar o quarto do Grupo.
   * @returns {boolean}
   */
  canMemberDecorate(): boolean

  /**
   * Retorna se o Grupo possui forum.
   * @returns {boolean}
   */
  hasForum(): boolean

}

export { ScriptGroup };
