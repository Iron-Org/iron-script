/// <reference path="ScriptGroupMember.js"/>

/**
 * Classe que representa grupo de quarto.
 * @class
 * @hideconstructor
 * @implements {IScriptReachable}
 * @author Gabriel T
 */
class ScriptGroup {
	/**
	 * Retorna o ID do Grupo.
	 * @returns {number}
	 */
	getId () {}
  /**
	 * Retorna o titulo do Grupo.
	 * @returns {string}
	 */
  getTitle () {}
  /**
	 * Retorna o descrição do Grupo.
	 * @returns {string}
	 */
  getDescription () {}
  /**
	 * Retorna o emblema do Grupo.
	 * @returns {number}
	 */
  getBadge () {}
  /**
	 * Retorna o id do dono do Grupo.
	 * @returns {string}
	 */
  getOwnerId () {}
  /**
	 * Retorna o ID do quarto do Grupo.
	 * @returns {number}
	 */
  getRoomId () {}
  /**
	 * Retorna o timestamp de quando Grupo foi criado.
	 * @returns {number}
	 */
  getCreatedTimestamp () {}
  /**
	 * Retorna o tipo do Grupo.
   * 0: Regular
   * 1: Exclusivo
   * 2: Privado
	 * @returns {number}
	 */
  getType () {}
  /**
	 * Retorna o color A do Grupo.
	 * @returns {number}
	 */
  getColorA () {}
  /**
	 * Retorna o color B do Grupo.
	 * @returns {number}
	 */
  getColorB () {}
  /**
	 * Retorna os membros do Grupo.
	 * @returns {ScriptGroupMember[]}
	 */
  getMembers () {}
  /**
	 * Retorna os adminstradores do Grupo.
	 * @returns {number[]}
	 */
  getAdministrators () {}
  /**
	 * Retorna os dados do membro do Grupo.
   * @param {number} playerId - ID do usuário
	 * @returns {ScriptGroupMember[]}
	 */
  getMember (playerId) {}
  /**
	 * Retorna se o membro pode decorar o quarto do Grupo.
	 * @returns {boolean}
	 */
  canMemberDecorate () {}
  /**
	 * Retorna se o Grupo possui forum.
	 * @returns {boolean}
	 */
  hasForum () {}
}
