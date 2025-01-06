import { ScriptPlayerData, ScriptBadge, ScriptGroup } from './types';

/**
 * Gerenciador de Dados de usuários do hotel.
 * @category Classes
 * @author Luiz
 * @author Gabriel T
 */
declare namespace GlobalData {
  /**
  * Retorna os dados do usuário
  * @param {number} id - ID do usuário
  * @returns {ScriptPlayerData}
  */
  function getPlayerDataById(id: number): ScriptPlayerData

  /**
  * Retorna os dados do usuário.
  * @param {string} username - Username do usuário
  * @returns {ScriptPlayerData}
  */
  function getPlayerDataByName(username: string): ScriptPlayerData

  /**
  * Retorna o valor de um raro no Hotel
  * @param {number} id - Username do usuário.
  * @returns {number}
  */
  function getRarePriceByDefinitionId(id: number): number

  /**
   * Retorna a quantidade de pontos usuário tem no placar
   * @param {string} leaderboardCode - Código do placar
   * @param {string} recordKey
   * @returns {number}
   */
  function getLeaderboardPointsByKey(leaderboardCode: string, recordKey: string): number

  /**
   * De pontos ao usuário no placar.
   * @param {string} leaderboardCode - Código do placar
   * @param {string} recordKey - Chave
   * @param {number} points - Quantidade de Pontos
   * @returns {boolean}
   */
  function giveLeaderboardPoints(leaderboardCode: string, recordKey: string, points: number): boolean

  /**
   * Retorna os dados de um emblema.
   * @param {string} badgeCode - Código do emblema
   * @returns {ScriptBadge}
   */
  function getBadgeDataByCode(badgeCode: string): ScriptBadge

  /**
   * Retorna os dados de um grupo.
   * @param {number} groupId - ID do grupo
   * @returns {ScriptGroup}
   */
  function getGroupById(groupId: number): ScriptGroup

  /**
   * Retorna os dados de um grupo.
   * @param {number} roomId - ID do quarto
   * @returns {ScriptGroup}
   */
  function getGroupByRoomId(roomId: number): ScriptGroup

  /**
   * Retorna o ID do quarto que usuário esta
   * @param {number} userId - ID do usuário buscado
   */
  function getRoomByWhereIsPlayer(userId: number): number

  /**
   * Retorna todos os IDs de contas com o mesmo endereço de IP da conta fornecida
   * @param {number} userId - ID do Usuário
   */
  function getPlayerAccountsById(userId: number): number[]

  /**
   * Retorna se o usuário possui o emblema, mesmo que o mesmo esteja offline
   * @param {number} userId - ID do Usuário
   * @param {string} badge - Código do emblema
   */
  function playerHasBadge(userId: number, badge: string): boolean

  /**
   * Retorna se o quarto está carregado
   * @param {number} roomId - ID do quarto a ser verificado
   */
  function roomIsLoaded(roomId: number): boolean

  /**
   * Remove pontos ao usuário no placar.
   * @param {string} leaderboardCode - Código do placar
   * @param {string} recordKey - Chave
   * @param {number} points - Quantidade de Pontos
   */
  function removeLeaderboardPoints(leaderboardCode: string, recordKey: string, points: number): boolean

  /**
   * Define os pontos do usuário no placar.
   * @param {string} leaderboardCode - Código do placar
   * @param {string} recordKey - Chave
   * @param {number} points - Quantidade de Pontos
   */
  function setLeaderboardPoints(leaderboardCode: string, recordKey: string, points: number): boolean

  /**
   * Remove todas as entradas do placar.
   * @param {string} leaderboardCode - Código do placar
   */
  function resetLeaderboardPoints(leaderboardCode: string): void
}
