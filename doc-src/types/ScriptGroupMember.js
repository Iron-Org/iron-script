/// <reference path="ScriptGroup.js"/>

/**
 * Classe que representa o membro do Grupo.
 * @class
 * @hideconstructor
 * @implements {IScriptReachable}
 * @author Gabriel T
 */
class ScriptGroupMember {
	/**
	 * Retorna o ID do usuário.
	 * @returns {number}
	 */
	getPlayerId () {}
  /**
	 * Retorna o timestamp de quando o usuário entrou no Grupo.
	 * @returns {string}
	 */
  getDateJoined () {}
  /**
	 * Retorna o acesso do usuário no Grupo.
   * 0: membro
   * 1: admin
   * 2: dono
	 * @returns {string}
	 */
  getAccessLevel () {}
  /**
	 * Retorna o id do Grupo.
	 * @returns {string}
	 */
  getGroupId () {}
}
