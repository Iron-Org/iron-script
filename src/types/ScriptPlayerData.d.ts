/**
 * Classe para consulta de dados de usuário do hotel.
 * @hideconstructor
 * @category Tipos
 * @author Batman
 * @author Gabriel T
 */
declare class ScriptPlayerData {
  /**
   * Retorna o ID do usuário
   */
  getId(): number

  /**
   * Retorna o nickname do usuário.
   */
  getUsername(): string

  /**
  * Retorna o genêro do visual do usuário
  */
  getGender(): string

  /**
   * Retorna o visual do usuário.
   */
  getFigure(): string

  /**
   * Retorna a missão do usuário.
   */
  getMotto(): string

  /**
   * Retorna o rank atual do usuário
   */
  getRank(): number

  /**
   * Retorna o valor em segundos da ultima vez em que o usuário esteve online
   */
  getLastOnlineTimestamp(): number

  /**
   * Retorna o valor em segundos de quando o usuário se registrou no hotel
   */
  getRegistrationTimestamp(): number

  /**
   * Retorna a quantidade de Moedas o usuário possui
   */
  getCredits(): number

  /**
   * Retorna a quantidade de diamantes do usuário
   */
  getDiamonds(): number

  /**
   *	Retorna o ID do grupo favoritado pelo usuário.
   */
  getFavouriteGroupId(): number

  /**
   *	Retorna quantidade de pontos de conquista do usuário
   */
  getAchievementPoints(): number

  /**
   */
  getActivityPoints(): number
}

export { ScriptPlayerData };
