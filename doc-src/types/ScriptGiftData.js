/**
 * Classe que representa os dados de um presente.
 * @class
 * @hideconstructor
 * @author Gabriel T
 */
class ScriptGiftData {
  /**
   * Retorna o ID do remetente
   * @returns {number}
   */
  getSenderId () {}
  /**
   * Retorna o username do destinátario
   * @returns {string}
   */
  getReceiver () {}
  /**
   * Retorna o sprite do presente
   * @returns {number}
   */
  getSpriteId () {}
  /**
   * Retorna a mensagem do presente
   * @returns {string}
   */
  getMessage() {}
  /**
   * Retorna o papel de presente
   * @returns {number}
   */
  getWrappingPaper () {}
  /**
   * Retorna a decoração do presente
   * @returns {number}
   */
  getDecorationType () {}
  /**
   * Retorna se o remetente é mostrado no presente
   * @returns {number}
   */
  isShowUsername () {}
  /**
	 * Retorna o ID do base do item dentro do presente
	 * @returns {number}
	 */
	getItemId () {}
  /**
   * Retorna o extradata ddo item dentro do presente
   * @returns {string}
   */
  getExtraData () {}
  /**
   * Define o ID do remetente
   * @param {number} senderId - ID do remetente
   */
  setSenderId (senderId) {}
  /**
   * Define o username do destinátario
   * @param {string} receiver - Username do destinátario
   */
  setReceiver (receiver) {}
  /**
   * Define a mensagem do presente
   * @param {string} message - Mensagem do presente
   */
  setMessage(message) {}
  /**
   * Define o papel de presente
   * De 0 a 9
   * @param {number} wrappingPaper - Papel de presente
   */
  setWrappingPaper (wrappingPaper) {}
  /**
   * Define a decoração do presente
   * De 0 a 11
   * @param {number} decorationType - Decoração do presente
   */
  setDecorationType (decorationType) {}
  /**
   * Define se o remetente é mostrado no presente
   * @param {boolean} showUsername - Se o remente deve ser mostrado ou não
   */
  setShowUsername (showUsername) {}
  /**
   * Define o extradata ddo item dentro do presente
   * @param {string}
   */
  setExtraData () {}
}
