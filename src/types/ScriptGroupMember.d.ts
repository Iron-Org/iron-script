/**
 * Classe que representa o membro do Grupo.
 * @hideconstructor
 * @category Tipos
 * @author Gabriel T
 */
declare class ScriptGroupMember {
  /**
   * Retorna o ID do usuário.
   */
  getPlayerId(): number

  /**
   * Retorna o timestamp de quando o usuário entrou no Grupo.
   */
  getDateJoined(): string

  /**
   * Retorna o acesso do usuário no Grupo.
   * 0: membro
   * 1: admin
   * 2: dono
   */
  getAccessLevel(): string

  /**
   * Retorna o id do Grupo.
   */
  getGroupId(): string
}

export { ScriptGroupMember };
