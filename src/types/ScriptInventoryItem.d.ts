import { ScriptGiftData } from ".";

/**
 * Classe que representa um item dentro inventário de um usuário.
 * @hideconstructor
 * @category Tipos
 * @author Gabriel T
 */
declare class ScriptInventoryItem {
  /**
   * Retorna o ID do item
   */
  getId(): number

  /**
   * Retorna o ID base do item
   */
  getBaseId(): number

  /**
   * Retorna o Sprite do item
   */
  getSprite(): number

  /**
   * Retorna o nome do item
   */
  getName(): string

  /**
   * Retorna o nome público do item
   */
  getPublicName(): number

  /**
   * Retorna se o mobi é sentável
   */
  canSit(): boolean

  /**
   * Retorna se o mobi é andável
   */
  canWalk(): boolean

  /**
   * Retorna a interação do item
   */
  getInteractionType(): string

  /**
   * Retorna a quantidade de interações do item
   */
  getInteractionModesCount(): number

  /**
   * Retorna a altura estacavel do mobi
   */
  getStackHeight(): number

  /**
   * Retorna o estado do mobi
   */
  getState(): string

  /**
   * Retorna a largura do mobi
   */
  getItemWidth(): number

  /**
   * Retorna o comprimento do mobi
   */
  getItemLength(): number

  /**
   * Retorna o LTD do mobi
   */
  getLimitedUnit(): number

  /**
   * Retorna o LTD máx do mobi
   */
  getLimitedTotal(): number

  /**
   * Retorna os dados do presente
   */
  getGiftData(): ScriptGiftData
}

export { ScriptInventoryItem };
