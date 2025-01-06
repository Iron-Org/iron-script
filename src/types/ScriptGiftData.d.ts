/**
 * Classe que representa os dados de um presente.
 * @hideconstructor
 * @category Tipos
 * @author Gabriel T
 */
declare class ScriptGiftData {
  /**
   * Retorna o ID do remetente
   */
  getSenderId(): number

  /**
   * Retorna o username do destinátario
   */
  getReceiver(): string

  /**
   * Retorna o sprite do presente
   */
  getSpriteId(): number

  /**
   * Retorna a mensagem do presente
   */
  getMessage(): string

  /**
   * Retorna o papel de presente
   */
  getWrappingPaper(): number

  /**
   * Retorna a decoração do presente
   */
  getDecorationType(): number

  /**
   * Retorna se o remetente é mostrado no presente
   */
  isShowUsername(): number

  /**
   * Retorna o ID do base do item dentro do presente
   */
  getItemId(): number

  /**
   * Retorna o extradata ddo item dentro do presente
   */
  getExtraData(): string

  /**
   * Define o ID do remetente
   * @param {number} senderId - ID do remetente
   */
  setSenderId(senderId: number): void

  /**
   * Define o username do destinátario
   * @param {string} receiver - Username do destinátario
   */
  setReceiver(receiver: string): void

  /**
   * Define a mensagem do presente
   * @param {string} message - Mensagem do presente
   */
  setMessage(message: string): void

  /**
   * Define o papel de presente
   * De 0 a 9
   * @param {number} wrappingPaper - Papel de presente
   */
  setWrappingPaper(wrappingPaper: number): void

  /**
   * Define a decoração do presente
   * De 0 a 11
   * @param {number} decorationType - Decoração do presente
   */
  setDecorationType(decorationType: number): void

  /**
   * Define se o remetente é mostrado no presente
   * @param {boolean} showUsername - Se o remente deve ser mostrado ou não
   */
  setShowUsername(showUsername: boolean): void

  /**
   * Define o extradata ddo item dentro do presente
   * @param {string} extradata - Extradata a ser inserida no presente
   */
  setExtraData(extradata: string): void
}

export { ScriptGiftData };
