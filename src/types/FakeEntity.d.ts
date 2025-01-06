import { IScriptReachable, ScriptEntity } from '.';

/**
 * Classe que representa as entidades Fakes.
 * @hideconstructor
 * @category Tipos
 * @author Arthur L
 * @author Gabriel T
 */
declare class FakeEntity {
  /**
   * Retorna ID da FakeEntity
   */
  getId(): number

  /**
   * Retorna username atual da entidade
   * @returns {string}
   */
  getUsername(): string

  /**
   * Retorna a posição x atual da FakeEntity.
   */
  getX(): number

  /**
   * Retorna a posição Z atual da FakeEntity.
   */
  getZ(): number

  /**
   * Retorna a posição Y atual da FakeEntity.
   */
  getY(): number

  /**
   * Retorna a rotação atual do FakeEntity.
   */
  getR(): number

  /**
   * Retorna o código do atual visual da entidade.
   * @returns {string}
   */
  getFigure(): string

  /**
   * Retorna missão atual da entidade
   * @returns {string}
   */
  getMotto(): string

  /**
   * Retorna o código do efeito atual da entidade.
   */
  getEffect(): number

  /**
   * Retorna o código do atual item de mão que a entidade está segurando.
   */
  getHandItem(): number

  /**
   * Retorna a atual dança da entidade.
   */
  getDance(): number

  /**
   * Retorna a ação que a entidade esta fazendo.
   */
  getAction(): number

  /**
   * Retorna a placa que a entidade esta segurando.
   */
  getSign(): number

  /**
   * Retorna a distancia entre a entidade e outra posição fornecida no objeto.
   * @param {IScriptReachable} object - Objeto posicionável
   */
  distanceTo(object: IScriptReachable): number

  /**
   * Retorna a distancia atual entre esta entidade e a posição fornecida.
   * @param {number} x - Posição X a ser comparada.
   * @param {number} y - Posição Y a ser comparada.
   * @param {number} z - Posição Z a ser comparada.
   */
  distanceTo(x: number, y: number, z: number): number

  /**
  * Retorna se a entidade é fake.
  * @returns {boolean}
  */
  isFakeEntity(): boolean

  /**
   * Retorna se entidade é um FakeBot.
   * @returns {boolean}
   */
  isBot(): boolean

  /**
   * Retorna se entidade está próxima (tocando) a posição fornecida.
   * @param {number} x - Posição X a ser comparada.
   * @param {number} y - Posição Y a ser comparada.
   * @param {number} z - Posição Z a ser comparada.
   * @returns {boolean}
   */
  touching(x: number, y: number, z: number): boolean

  /**
   * Retorna se entidade está próxima (tocando) a posição fornecida pelo objeto.
   * @param {IScriptReachable} object - Objeto posicionável
   * @returns {boolean}
   */
  touching(object: IScriptReachable): boolean

  /**
   * Retorna se esta entidade está sobre a mobilia fornecida.
   * @param {IScriptReachable} object - Objeto posicionável
   * @returns {boolean}
   */
  in(object: IScriptReachable): boolean

  /**
   * Retorna se a entidade está se movendo.
   * @returns {boolean}
   */
  isWalking(): boolean

  /**
   * Retorna se entidade esta sentada.
   * @returns {boolean}
   */
  hasSit(): boolean

  /**
   * Retorna se entidade esta deitada.
   * @returns {boolean}
   */
  hasLay(): boolean

  /**
   * Define a rotação da entidade.
   * @param {number} rotation - Valor da rotação.
   */
  setRotation(rotation: number): void

  /**
   * Define nome para a entidade
   * @param {*} username - Nome que será definido.
   */
  setUsername(username: any): void

  /**
   * Define o visual da entidade
   * @param {string} gender - Gênero do visual.
   * @param {string} figure - Código do visual.
   */
  setFigure(gender: string, figure: string): void

  /**
   * Define nova missão na entidade
   * @param {*} motto - Missão que será definida.
   */
  setMotto(motto: any): void

  /**
   * Define um efeito a entidade.
   * @param {number} effectId - Código do efeito.
   */
  setEffect(effectId: number): void

  /**
   * Define um item de mão para entidade segurar.
   * @param {number} handitemId - Código do item de mão.
   */
  setHandItem(handitemId: number): void

  /**
   * Define uma dança para a entidade.
   * 0: Parado.
   * 1: Hap-Hop
   * 2: Pogo-Mogo
   * 3: Duck Funk
   * 4: Rollie
   * @param {number} danceId - Código da dança
   */
  setDance(danceId: number): void

  /**
   * Remove efeito (:enable 0)
   */
  removeEffect(): void

  /**
   * Remove o item de mão da entidade.
   */
  removeHandItem(): void

  /**
   * Faz uma entidade começar a seguir.
   * @param {ScriptEntity } entity - Entidade que irá começar a seguir.
   */
  addFollowerEntity(entity: ScriptEntity): void

  /**
   * Faz uma entidade começar a seguir.
   * @param {FakeEntity} entity - Entidade que irá começar a seguir.
   */
  addFollowerEntity(entity: FakeEntity): void

  /**
   * Faz uma entidade começar a seguir.
   * @param {ScriptEntity } entity - Entidade que irá começar a seguir.
   */
  removeFollowerEntity(entity: ScriptEntity): void

  /**
   * Faz uma entidade começar a seguir.
   * @param {FakeEntity} entity - Entidade que irá começar a seguir.
   */
  removeFollowerEntity(entity: FakeEntity): void

  /**
   * Faz com que a entidade pare de andar.
   */
  cancelWalk(): void

  /**
   * Adiciona um emblema no perfil do Bot
   * @param {string} badge - Código do emblema a ser adicionado.
  */
  addBadge(badge: string): void

  /**
   * Entidade faz uma ação determinada
   * 1: Acenar
   * 2: Mandar Beijo
   * 3: Rir
   * @param {number} actionCode - Número da ação
  */
  action(actionCode: number): void

  /**
   * Move a entidade até a posição fornecida.
   * Entidade só irá se mover caso o caminho esteja livre até o ponto fornecido*
   * @param {number} x
   * @param {number} y
   */
  walk(x: number, y: number): void

  /**
   * @param {IScriptReachable} object - Objeto posicionável
   */
  walk(object: IScriptReachable): void

  /**
   * Entidade anda até a posição fornecida.
   * @param {number} x
   * @param {number} y
   * @param {boolean} overrideLastStep - Se o ultimo passo deve ignorar outras entidades que estiverem no piso (Apenas funcionará se estiver habilitado atravessar usuarios)
   * @param {boolean} enableDiagonal - Se a entidade pode andar na diagonal
   */
  walk(x: number, y: number, overrideLastStep: boolean, enableDiagonal: boolean): void

  /**
   * Teletransporta a entidade para posição fornecida.
   * @param {number} x - Posição X em que entidade seŕa levada.
   * @param {number} y - Posição Y em que entidade seŕa levada.
   * @param {number} z - Posição Z em que entidade seŕa levada.
   * @param {number=} r - Rotação definida para a entidade.
   */
  teleport(x: number, y: number, z: number, r?: number): void

  /**
   * Teletransporta a entidade para posição fornecida no objeto.
   * @param {IScriptReachable} object
   */
  teleport(object: IScriptReachable): void

  /**
   * Entidade olha para o ponto definido.
   * @param {number} x - Posição X que entidade irá olhar.
   * @param {number} y - Posição Y que entidade irá olhar.
   * @param {boolean=} moveHead - Se a entidade pode mover somente sua cabeça.
   */
  lookTo(x: number, y: number, moveHead?: boolean): void

  /**
   * Entidade olha para o ponto definido.
   * @param {IScriptReachable} object - Posição que será direcionada
   */
  lookTo(object: IScriptReachable): void

  /**
   * Faz a entidade dizer uma mensagem.
   * @param {*} message - Mensagem que será dita pela entidade.
   * @param {boolean=} shout - Se o personagem deve gritar a mensagem. (Mensagem em Bold)
   * @param {number=} bubbleId - Balão da mensagem
   */
  say(message: any, shout?: boolean, bubbleId?: number): void

  /**
   * Faz a entidade dizer uma mensagem. Mensagem não é enviada para usuários que tiverem bots mutados.
   * @param {*} message - Mensagem que será dita pela entidade.
   * @param {boolean=} shout - Se o personagem deve gritar a mensagem. (Mensagem em Bold)
   * @param {number=} bubbleId - Balão da mensagem
   */
  botSay(message: any, shout?: boolean, bubbleId?: number): void

  /**
   * Sussura uma mensagem para outra entendide.
   * @param {ScriptEntity} to - Entidade que receberá a mensagem.
   * @param {*} message - Mensagem que será enviada.
   * @param {number} bubbleId - Balão da mensagem.
   */
  whisper(to: ScriptEntity, message: any, bubbleId: number): void

  /**
   * Faz a entidade levantar
   */
  std(): void

  /**
   * Faz a entidade sentar
   */
  sit(): void

  /**
   * Faz a entidade deitar
   */
  lay(): void
}

export { FakeEntity };
