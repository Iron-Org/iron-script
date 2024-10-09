/// <reference path='types/ScriptPlayerData.js'/>
/// <reference path='types/ScriptBadge.js'/>
/// <reference path='types/ScriptGroup.js'/>

/**
 * Gerenciador de Dados de usuários do hotel.
 * @namespace GlobalData
 * @author Luiz
 * @author Gabriel T
 */
 const GlobalData = {
	/**
	* Retorna os dados do usuário.
	* @param {number} id - ID do usuário.
	* @returns {ScriptPlayerData}
	*/
	getPlayerDataById (id) {},
	/**
	* Retorna os dados do usuário.
	* @param {string} username - Username do usuário.
	* @returns {ScriptPlayerData}
	*/
	getPlayerDataByName (username) {},
	/**
	* Retorna o valor de um raro no Hotel..
	* @param {number} id - Username do usuário.
	* @returns {number}
	*/
	getRarePriceByDefinitionId (id) {},
	/**
	 * Retorna a quantidade de pontos usuário tem no placar.
	 * @param {string} leaderboardCode - Código do placar
	 * @param {string} recordKey
	 * @returns {number}
	 */
	getLeaderboardPointsByKey (leaderboardCode, recordKey) {},
	/**
	 * De pontos ao usuário no placar.
	 * @param {string} leaderboardCode - Código do placar
	 * @param {string} recordKey - Chave
	 * @param {number} points - Quantidade de Pontos
	 * @returns {Boolean}
	 */
	giveLeaderboardPoints (leaderboardCode, recordKey, points) {},
  /**
   * Retorna os dados de um emblema.
   * @param {string} badgeCode - Código do emblema
   * @returns {ScriptBadge}
   */
  getBadgeDataByCode (badgeCode) {},
  /**
   * Retorna os dados de um grupo.
   * @param {number} groupId - ID do grupo
   * @returns {ScriptGroup}
   */
  getGroupById (groupId) {},
  /**
   * Retorna os dados de um grupo.
   * @param {number} roomId - ID do quarto
   * @returns {ScriptGroup}
   */
  getGroupByRoomId (roomId) {},
  /**
   * Retorna o ID do quarto que usuário esta
   * @returns {number}
   */
  getRoomByWhereIsPlayer (userId) {},
  /**
   * Retorna todos os IDs de contas com o mesmo endereço de IP da conta fornecida
   * @param {number} userId - ID do Usuário
   * @returns {number[]}
   */
  getPlayerAccountsById (userId) {},
  /**
   * Retorna se o usuário possui o emblema, mesmo que o mesmo esteja offline
   * @param {number} userId - ID do Usuário
   * @param {string} badge - Código do emblema
   * @returns {boolean}
   */
  playerHasBadge (userId, badge) {},
  /**
   * Retorna se o quarto está carregado
   * @param {number} roomId - ID do quarto a ser verificado
   * @return {boolean}
   */
  roomIsLoaded (roomId) {},
  /**
   * Remove pontos ao usuário no placar.
   * @param {string} leaderboardCode - Código do placar
   * @param {string} recordKey - Chave
   * @param {number} points - Quantidade de Pontos
   * @returns {Boolean}
   */
  removeLeaderboardPoints (leaderboardCode, recordKey, points) {},
  /**
   * Define os pontos do usuário no placar.
   * @param {string} leaderboardCode - Código do placar
   * @param {string} recordKey - Chave
   * @param {number} points - Quantidade de Pontos
   * @returns {Boolean}
   */
  setLeaderboardPoints (leaderboardCode, recordKey, points) {},
  /**
   * Remove todas as entradas do placar.
   * @param {string} leaderboardCode - Código do placar
   */
  resetLeaderboardPoints (leaderboardCode, recordKey, points) {}
}
