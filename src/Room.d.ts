import { ScriptEntity, ScriptFurni, ScriptTile, ScriptGroup, ScriptPrivateChat, ScriptFurnisOpacity } from './types/index';;

/**
 * Propriedades e Métodos do quarto em que script está sendo executado
 * @category Classes
 * @author Arthur L
 * @author Gabriel T
 */
declare namespace Room {
  /**
   * Retorna o ID do quarto
   * @returns {number}
   */
  function getId(): number

  /**
   * Retorna o nome atual do quarto.
   * @returns {string}
   */
  function getName(): string

  /**
   * Retorna o nome do dono do quarto
   * @returns {string}
   */
  function getOwnerUsername(): string

  /**
   * Retorna o ID do dono do quarto
   * @returns {number}
   */
  function ownerId(): number

  /**
   * Retorna a quantidade de usuários no quarto
   * @returns {number}
   */
  function userCount(): number

  /**
   * Retorna a quantidade de bots no quarto
   * @returns {number}
   */
  function botCount(): number

  /**
   * Retorna a quantidade de pets no quarto
   * @returns {number}
   */
  function petCount(): number

  /**
   * Retorna a quantidade total de entidades no quarto
   * @returns {number}
   */
  function entityCount(): number

  /**
   * Retorna o usuário correspondente ao ID.
   * @param {number} id - ID do usuário buscado.
   * @returns {ScriptEntity}
   */
  function getPlayerById(id: number): ScriptEntity

  /**
   * Retorna o usuário correspondente ao Nome.
   * @param {string} name - Nome do usuário buscado.
   * @returns {ScriptEntity}
   */
  function getPlayerByName(name: string): ScriptEntity

  /**
   * Retorna o bot correspondente ao nome.
   * @param {string} name - Nome do Bot a ser buscado.
   * @returns {ScriptEntity}
   */
  function getBotByName(name: string): ScriptEntity

  /**
   * Retorna uma lista com todos os usuários do quarto.
   * @returns {ScriptEntity[]}
   */
  function getAllPlayers(): ScriptEntity[]

  /**
   * Retorna todas entidades que estão na posição fornecida.
   * @param {number} x - Posição X buscada.
   * @param {number} y - Posição Y buscada.
   * @returns {ScriptEntity[]}
   */
  function getEntitiesByCoord(x: number, y: number): ScriptEntity[]

  /**
   * Retorna uma lista com todas as entidades presentes na mobilia.
   * @param {ScriptFurni} furni - Mobilia a ser consultada.
   * @returns {ScriptEntity[]}
   */
  function getEntitiesByFurni(furni: ScriptFurni): ScriptEntity[]

  /**
   * Retorna uma lista de todas as entidades presentes nas mobilias.
   * @param {ScriptFurni[]} furnis - Mobilias a serem consultadas.
   * @returns {ScriptEntity[]}
   */
  function getEntitiesByFurnis(furnis: ScriptFurni[]): ScriptEntity[]
  /**
   * Retorna todas as entidades que estão na area
   * @param {number} x1 - Posição X inicial
   * @param {number} y1 - Posição Y inicial
   * @param {number} x2 - Posição X final
   * @param {number} y2 - Posição Y final
   */
  function getEntitiesByArea(x1: number, y1: number, x2: number, y2: number): ScriptEntity[]

  /**
   * Retorna o Piso da posição fornecida.
   * @param {number} x - Posição X do piso.
   * @param {number} y - Posição y do piso.
   */
  function getTile(x: number, y: number): ScriptTile

  /**
   * Retorna a mobilia correspondente ao ID.
   * @param {number} id - ID da mobilia a ser buscada.
   */
  function getFurniById(id: number): ScriptFurni

  /**
   * Retorna uma lista de mobilias que estão no piso
   * @param {number} x - Posição X do piso.
   * @param {number} y - Posição y do piso.
   */
  function getFurniByTile(x: number, y: number): ScriptFurni[]

  /**
   * Retorna uma lista com todos as mobilias do tipo definido.
   * @param {number} sprite - Código base da mobilia buscada.
   */
  function getAllFurnisBySpriteId(sprite: number): ScriptFurni[]

  /**
   * Retorna todas os mobis que estão na area
   * @param {number} x1 - Posição X inicial
   * @param {number} y1 - Posição Y inicial
   * @param {number} x2 - Posição X final
   * @param {number} y2 - Posição Y final
   */
  function getFurnisByArea(x1: number, y1: number, x2: number, y2: number): ScriptFurni[]

  /**
   * Retorna o Grupo do quarto.
   */
  function getGroup(): ScriptGroup

  /**
   * Retorna o estado de trocas do Quarto.
   * 0: Desabilitado
   * 1: Apenas donos ou usuários com direitos negociam
   * 2: Todos negociam
   */
  function getTradeState(): number

  /**
   * Retorna estado atual do atravessar.
   * @returns {boolean}
   */
  function getWalkThrough(): boolean

  /**
   * Retorna estado atual da diagonal.
   * @returns {boolean}
   */
  function getDiagonal(): boolean


  /**
   * Retorna o atual estado do mute no quarto.
   */
  function getRoomMute(): boolean

  /**
   * Retorna um novo conjunto de mobis
   * @returns {ScriptFurnisOpacity}
   */
  function createFurnisOpacityData(): ScriptFurnisOpacity

  /**
   * @param {number} x - Posição X do piso.
   * @param {number} y - Posição X do piso.
   */
  function tileExists(x: number, y: number): boolean

  /**
   * Retorna se o usuário tem direitos no quarto.
   * @param {number} id - Id do usuário.
   */
  function hasRights(id: number): boolean
  /**
   * Retorna se o quarto está com mobis bloqueados.
   */
  function isFurnitureBlocked(): boolean
  /**
   * Dá Direitos ao usuário *ID*.
   * @param {number} id - Id do usuário que receberá Direitos.
   */
  function addRights(id: number): void

  /**
   * Retira os Direitos do usuário *ID*.
   * @param {number} id - Id do usuário que perderá Direitos.
   */
  function removeRights(id: number): void

  /**
   * Define o nome do quarto
   * @param {string} name - Novo nome que será definido ao quarto.
   */
  function setName(name: string): void

  /**
   * Desliga/liga a luz do quarto.
   * @param {boolean} activated - Se a luz deve ser desligada ou ligada.
   */
  function setMoodLight(activated: boolean): void

  /**
   * Altera a cor e estado da luz do quarto.
   * @param {boolean} activated - Se a luz deve ser desligada ou ligada.
   * @param {number} r - Valor da cor representando Vermelha. (0 a 255)
   * @param {number} g - Valor da cor representando Verde. (0 a 255)
   * @param {number} b - Valor da cor representando Azul. (0 a 255)
   * @param {number} intensity - Valor da intensidade que a cor. *(0: Opaco a 255: Transparente)*
   * @param {boolean} wallOnly - Se a luz deve ficar só nas paredes.
   */
  function setMoodLight(activated: boolean, r: number, g: number, b: number, intensity: number, wallOnly: boolean): void

  /**
   * Altera a cor do plano de fundo do quarto.
   * @param {number} h - Valor da Matiz (0 a 255)
   * @param {number} s - Valor da Saturação (0 a 255)
   * @param {number} l - Valor do nivel de claridade da cor. (0 a 255)
   */
  function setBackgroundTonerColor(h: number, s: number, l: number): void

  /**
   * Define a velocidade dos Rollers no quarto.
   * @param {number} speed - Velocidade dos rollers.
   */
  function setRollerSpeed(speed: number): void

  /**
   * Define a diagonal
   * @param {boolean} allow - Valor que irá definir se será habilitado ou desabilitado
   */
  function setDiagonal(allow: boolean): void

  /**
   * Define o atravessar
   * @param {boolean} allow - Valor que irá definir se será habilitado ou desabilitado
   */
  function setWalkThrough(allow: boolean): void

  /**
   * Define mute do quarto
   * @param {boolean} mute - Valor que irá definir se será mutado ou desmutado.
   */
  function setRoomMute(mute: boolean): void

  /**
   * Define uma senha para trancar o quarto.
   * @param {string} password - Senha a ser definida.
   */
  function setPassword(password: string): void

  /**
   * Define campanhia
   */
  function setDoorbell(): void

  /**
   * Define se os mobis serão bloqueados de ser movidos/retirados no quarto.
   * @param {boolean} blocked - Valor que irá definir se os mobis serão bloqueados ou desbloqueados.
   */
  function setFurnitureBlocked(blocked: boolean): void

  /**
   * Define qual estado de trocas no quarto
   * @param {number} tradeStateCode - Código do estado
   */
  function setTradeState(tradeStateCode: number): void

  /**
   * Altera a opacidade de um conjunto de mobis
   * @param {ScriptFurnisOpacity} furnis - Conjunto de Mobis
   */
  function setFurnisOpacity(furnis: ScriptFurnisOpacity): void

  /**
   * Altera o filtro do quarto
   * @param {string} filterName - Nome do Filtro
   * @param {number} intensity - Intensidade do Filtro
   * @param {number} opacity - Opacidade do Filtro
   * @param {string} color - Cor do filtro em Hexadecimal (Apenas funcional no filtro de Tinta)
   * @returns {boolean}
   */
  function setRoomFilter(filterName: string, intensity: number, opacity: number, color: string): boolean

  /**
   * Altera o filtro do quarto
   * @param {string} filterName - Nome do Filtro
   * @param {number} intensity - Intensidade do Filtro
   * @param {number} opacity - Opacidade do Filtro
   * @returns {boolean}
   */
  function setRoomFilter(filterName: string, intensity: number, opacity: number): boolean

  /**
   * Cria um chat privado
   * @returns {ScriptPrivateChat}
   */
  function createPrivateChat(): ScriptPrivateChat

  /**
   * Deleta um chat privado
   * @param {ScriptPrivateChat} privateChat - Chat privado a ser deletado
   */
  function deletePrivateChat(privateChat: ScriptPrivateChat): void
  /**
   * Deleta todos os chats privados
   */
  function deleteAllPrivateChats(): void
  /**
   * Define a orientação dos crônometros
   * @param {boolean} up - Se a contagem dos crônometros deve ser crescente, caso contrário será decrescente.
   */
  function toggleTimerUpDirection(up: boolean): void

  /**
   * Envia notificação para todos do quarto
   * @param {string} icon - Código do icone que irá aparecer na notificação
   * @param {string} message - Mensagem que irá aparecer na notificação.
   */
  function notification(icon: string, message: string): void

  /**
   * Envia um alerta para todos do quarto
   * @param {string} message - Mensagem que irá aparecer no alerta.
   */
  function alert(message: string): void

  /**
   * Abre o quarto
   */
  function open(): void

  /**
   * Envia TTS para todos os usuários
   * @param {string} text - Texto a ser lido pela voz sintetizada
   */
  function tts(text: string): void

  /**
   * Reproduz video do Youtube para todos os usuários do quarto.
   * @param {string} link - Link do video do Youtube.
   */
  function youtube(link: string): void
}
