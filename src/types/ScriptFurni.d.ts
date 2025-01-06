import { IScriptReachable, ScriptEntity, ScriptAdsData } from ".";

/**
 * Classe que representa mobilia de quarto.
 * @hideconstructor
 * @category Tipos
 * @author Arthur L
 * @author Gabriel T
 */
declare class ScriptFurni implements IScriptReachable {
  /**
   * Retorna o ID do Furni.
   */
  getId(): number

  /**
  * Retorna a posição X atual do Furni.
  */
  getX(): number

  /**
   * Retorna a posição Y atual do Furni.
   */
  getY(): number

  /**
   * Retorna a posição Z (altura) atual do Furni.
   */
  getZ(): number

  /**
   * Retorna a atual rotação do Furni.
   */
  getR(): number

  /**
   * Retorna atual estado do furni.
   */
  getState(): string

  /**
   * Retorna o ID do sprite do furni.
   */
  getSprite(): number

  /**
   * Retorna atual opacidade do furni.
   */
  getAlpha(): number

  /**
   * Retorna o nome do furni.
   */
  getName(): string

  /**
   * Retorna o nome público do furni.
   */
  getPublicName(): string

  /**
   * Retorna todas as entidades que estão sobre o furni.
   */
  getEntities(): ScriptEntity[]

  /**
   * Retorna o tipo da interação do furni.
   */
  getInteractionType(): string

  /**
   * Retorna quantidade de interações que o furni possui.
   */
  getInteractionModesCount(): number

  /**
  * Retorna altura empilhável do furni.
  */
  getStackHeight(): number

  /**
   * Retorna a largura do furni.
   */
  getItemWidth(): number

  /**
   * Retorna o comprimento do Furni.
   */
  getItemLength(): number

  /**
   * Retorna a altura do Furni.
   */
  getItemHeight(): number

  /**
   * Retorna o ID de definição da lista de Raros.
   */
  getDefinitionId(): number

  /**
   * Retorna o unidade do LTD do raro. 0 caso não seja um LTD
   */
  getLimitedUnit(): number

  /**
   * Retorna o máximo de unidades do LTD do raro.
   */
  getLimitedTotal(): number

  /**
   * Retorna os dados para manipulação do ADS.
   */
  getAdsData(): ScriptAdsData

  /**
   * Retorna a primeira cor do mobi, caso seja um mobi colorivel.
   */
  colorA(): number

  /**
   * Retorna a segunda cor do mobi, caso seja um mobi colorivel.
   */
  colorB(): number

  /**
   * Retorna se a entidades a cima do furni.
   */
  hasEntities(): boolean

  /**
   * Retorna se o furni é sentável por uma entidade.
   */
  canSit(): boolean

  /**
   * Retorna se entidades podem andar sobre o furni.
   */
  canWalk(): boolean

  /**
   * Retorna se o mobi é deletavel.
   */
  canDelete(): boolean

  /**
   * Remove o mobi do quarto, retornando para o inventário do dono.
   */
  removeFromRoom(): void

  /**
   * Mostra o furni
   */
  show(): void

  /**
   * Esconde o furni.
   */
  hide(): void

  /**
   * Ativa a interação do furni.
   */
  toggleState(): void

  /**
   * Define o estado do crônometro.
   * @param {boolean} state - Se o cronômetro deve iniciar/continuar ou parar.
   */
  toggleTimer(state: boolean): void

  /**
 * Move o furni até a posição fornecida.
 * @param {number} x - Posição X para onde o furni será movido.
 * @param {number} y - Posição y para onde o furni será movido.
 * @param {number} z - Posição Z para onde o furni será movido.
 */
  move(x: number, y: number, z: number): void

  /**
   * Move o furni até a posição fornecida.
   * @param {number} x - Posição X para onde o furni será movido.
   * @param {number} y - Posição y para onde o furni será movido.
   * @param {number} z - Posição Z para onde o furni será movido.
   * @param {boolean} ignoreEntities - Se deve ignorar entidades no piso que será movido.
   * @param {boolean} ignoreFurnis - Se deve ignorar furnis no piso que será movido.
   */
  move(x: number, y: number, z: number, ignoreEntities: boolean, ignoreFurnis: boolean): void

  /**
   * Teletransporta o furni até a posição fornecida.
   * @param {number} x - Posição X para onde o furni será movido.
   * @param {number} y - Posição y para onde o furni será movido.
   * @param {number} z - Posição Z para onde o furni será movido.
   * @param {number} rot - Rotação definida ao furni ao ser movido.
   */
  move(x: number, y: number, z: number, rot: number): void

  /**
   * Move o furni até a posição fornecida.
   * @param {number} x - Posição X para onde o furni será movido.
   * @param {number} y - Posição y para onde o furni será movido.
   * @param {number} z - Posição Z para onde o furni será movido.
   * @param {number} rot - Rotação definida ao furni ao ser movido.
   * @param {boolean} ignoreEntities - Se deve ignorar entidades no piso que será movido.
   * @param {boolean} ignoreFurnis - Se deve ignorar furnis no piso que será movido.
   */
  move(x: number, y: number, z: number, rot: number, ignoreEntities: boolean, ignoreFurnis: boolean): void

  /**
   * Teletransporta o furni até a posição fornecida.
   * @param {IScriptReachable} object - Onde o furni será movido.
   * @param {number} rot - Rotação
   */
  move(object: IScriptReachable, rot: number): void

  /**
  * Teletransporta o furni até a posição fornecida.
  * @param {number} x - Posição X para onde o furni será teletransportado.
  * @param {number} y - Posição y para onde o furni será teletransportado.
  * @param {number} z - Posição Z para onde o furni será teletransportado.
  */
  warp(x: number, y: number, z: number): void

  /**
  * Teletransporta o furni até a posição fornecida.
  * @param {number} x - Posição X para onde o furni será teletransportado.
  * @param {number} y - Posição y para onde o furni será teletransportado.
  * @param {number} z - Posição Z para onde o furni será teletransportado.
  * @param {boolean} ignoreEntities - Se deve ignorar entidades no piso que será teletransportado.
  * @param {boolean} ignoreFurnis - Se deve ignorar furnis no piso que será teletransportado.
  */
  warp(x: number, y: number, z: number, ignoreEntities: boolean, ignoreFurnis: boolean): void

  /**
   * @param {number} r - Rotação a ser definida
   * @param {boolean} ignoreEntities - Se deve ignorar entidades no piso
   * @param {boolean} ignoreFurnis - Se deve ignorar furnis no piso
   */
  setRotation(r: number, ignoreEntities: boolean, ignoreFurnis: boolean): void

  /**
   * Altera o estado do Furni.
   * @param {*} value - Valor do estado em que o furni será definido.
   */
  setState(value: any): void

  /**
   * Define a opacidade do Furni.
   * @param {number} alpha - Valor da opacidade (1 a 255).
   */
  setOpacity(alpha: number): boolean
}

export { ScriptFurni };
