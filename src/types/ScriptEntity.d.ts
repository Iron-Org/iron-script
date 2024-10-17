import { IScriptReachable, ScriptFurni, FakeEntity, FakeFloorItem, ScriptAchievementProgress, ScriptFurnisOpacity } from '.';

/**
 * Classe que representa uma entidade no quarto.
 * @hideconstructor
 * @category Tipos
 * @author Arthur L
 * @author Gabriel T
 */
declare class ScriptEntity implements IScriptReachable {
	/**
	 * Retorna o ID da entidade.
	 */
	getId (): number

	/**
	 * Retorna o nome da Entidade atual.
	 */
	getUsername (): string

	/**
	 * Retorna a posição X atual da entidade.
	 */
	getX (): number

	/**
	 * Retorna a posição Y atual da entidade.
	 */
	getY (): number

	/**
	 * Retorna a atual posição Z da entidade.
	 */
	getZ (): number

	/**
	 * Retorna a atual rotação do corpo da entidade.
	 */
	getR (): number

  /**
	 * Retorna a atual rotação da cabeça da entidade.
	 */
	getHeadR (): number

	/**
	 * Retorna o tipo da entidade.
	 */
	getType (): string

	/**
	 * Retorna o rank da entidade.
	 */
	getRank (): number

	/**
	 * Retorna a missão da entidade.
	 */
	getMotto (): string

  /**
	 * Retorna o genero da entidade
	 */
	getGender(): string
	/**
	 * Retorna o código do atual visual da entidade.
	 * *Não aplicável a Pets*
	 */
	getFigure (): string

	/**
	 * Retorna o código do efeito atual da entidade.
	 */
	getEffect (): number

	/**
	 * Retorna o código do atual item de mão que a entidade está segurando.
	 */
	getHandItem (): number

	/**
	 * Retorna a atual dança da entidade.
	 */
	getDance (): number

  /**
	 * Retorna a ação que a entidade esta fazendo.
	 */
	getAction (): number

  /**
	 * Retorna a placa que a entidade esta segurando.
	 */
	getSign (): number

	/**
	 * Retorna objeto com status atual da conquista
	 * @param {string} achievement - Código da conquista
	 */
	getAchievementProgress (achievement: string): ScriptAchievementProgress

  /**
	 * Retorna o total de Ponto de Conquista da entidade.
	 */
	getAchievementPoints(): number

	/**
	 * Retorna quantidade de Créditos que o usuário possui
	 */
	getCredits(): number

	/**
	 * Retorna quantidade de Duckets que o usuário possui
	 */
	getDuckets(): number

	/**
	 * Retorna quantidade de Diamantes que o usuário possui
	 */
	getDiamonds(): number

  /**
   * Retorna quantidade de Pontos Sazonais que o usuário possui
   */
  getSeasonalPoints (): number

	/**
	 * Returna o valor de memória definido no usuário.
	 */
	getMemoryValue (): number

  /**
	 * Returna a entidade do mascote do usuário.
	 * @returns {ScriptEntity}
	 */
	getMascotEntity (): ScriptEntity

	/**
	 * Retorna a distancia entre a entidade e outra posição fornecida no objeto.
	 * @param {IScriptReachable} object - Objeto posicionável
	 */
	distanceTo (object: IScriptReachable): number

	/**
	 * Retorna a distancia atual entre esta entidade e a posição fornecida.
	 * @param {number} x - Posição X a ser comparada.
	 * @param {number} y - Posição Y a ser comparada.
	 * @param {number} z - Posição Z a ser comparada.
	 */
	distanceTo (x: number, y: number, z: number): number

  /**
	 * Retorna se a entidade é fake.
	 */
	isFakeEntity (): boolean

	/**
	 * Retorna se a entidade é um usuário.
	 */
	isPlayer (): boolean

	/**
	 * Retorna se entidade é um Bot.
	 */
	isBot (): boolean

	/**
	 * Retorna se a entidade é um Pet.
	 */
	isPet (): boolean

	/**
	 * Retorna se o usuário esta ausente.
	 */
	isIdle(): boolean

  /**
	 * Retorna se o usuário esta com interações desabilitadas.
	 */
  isInteractionDisabled(): boolean

	/**
	 * Retorna se esta entidade é igual a entidade fornecida.
	 * @param {ScriptEntity} entity - Entidade que será comparada.
	 */
	equals (entity: ScriptEntity): boolean

	/**
	 * Retorna se esta entidade está sobre a posição fornecida.
	 * @param {IScriptReachable} object - Objeto posicionável
	 */
	in (object: IScriptReachable): boolean

	/**
	 * Retorna se a entidade está em alguma das posições fornecidas.
	 * @param {IScriptReachable[]} objects - Lista de Objetos posicionáveis
	 */
	inAny (objects: IScriptReachable[]): boolean

	/**
	 * Retorna se a entidade pode se mover.
	 */
	canWalk (): boolean

	/**
	 * Retorna se a entidade está se movendo.
	 */
	isWalking (): boolean

  /**
	 * Retorna se a entidade é um mascote.
	 */
  isMascotEntity (): boolean

	/**
	 * Retorna se a entidade possui o emblema no inventário do usuário.
	 * *Emblema não precisa estar equipado como favorito.*
	 * @param {string} badge - Código do emblema a ser verificado.
	*/
	hasBadge (badge: string): boolean

	/**
	 * Retorna se entidade possui o rank fornecido ou maior.
	 * @param {number} rank - Valor do rank a ser comparado.
	 */
	hasRank (rank: number): boolean

  /**
	 * Retorna se entidade esta sentada.
	 */
	hasSit (): boolean

  /**
	 * Retorna se entidade esta deitada.
	 */
	hasLay (): boolean

  /**
   * Retorn se o usuário possui um mascote no quarto
   */
  hasMascotEntity (): boolean

	/**
	 * Retorna se entidade está próxima (tocando) a posição fornecida.
	 * @param {number} x - Posição X a ser comparada.
	 * @param {number} y - Posição Y a ser comparada.
	 * @param {number} z - Posição Z a ser comparada.
	 */
	touching (x: number, y: number, z: number): boolean

	/**
	 * Retorna se entidade está próxima (tocando) a posição fornecida pelo objeto.
	 * @param {IScriptReachable} object - Objeto posicionável
	 */
	touching (object: IScriptReachable): boolean

  /**
	 * Retorna se o usuário esta com soft mute.
	 */
	isSoftMuted (): boolean

  /**
   * Retorna se o usuário esta ouvindo Música
   */
  isListeningMusic (): boolean

  /**
   * Retorna se o usuário esta banido da economia
   * Tipos:
   *  - moedas: coins
   *  - trocas: trade
   *  - feira livre: martketplace
   *  - raros: rares
   *  - todos: all
   * @param {string} type - Tipo do banimento
   */
  isEconomicBanned (type: string): boolean

	/**
	 * Adiciona pontos a uma conquista do usuário.
	 * @param {string} code - Código da conquista.
	 * @param {number} levels - Quantidade de pontos
	 */
	progressAchievement (code: string, levels: number): void

  /**
	 * Define a rotação da entidade.
	 * @param {number} rotation - Valor da rotação.
	 */
	setRotation (rotation: number): void

	/**
	 * Define um novo nome ao Bot.
	 * *Restrito a BOTs*
	 * @param {string} username - Nome que será definido ao Bot.
	 */
	setUsername (username: string): void

	/**
	 * Define uma missão a entidade.
	 * @param {*} motto - Missão que será definida na entidade.
	 */
	setMotto (motto: any): void

	/**
	 * Define o visual para entidade.
	 * *Não aplicável a Pets*
	 * @param {string} gender - Gênero do visual.
	 * @param {string} figure - Código do visual.
	 */
	setFigure (gender: string, figure: string): void

	/**
	 * Define um item de mão para entidade segurar.
	 * @param {number} h - Código do item de mão.
	 */
	setHandItem (h: number): void

	/**
	 * Define um efeito a entidade.
	 * @param {number} effect - Código do efeito.
	 */
	setEffect (effect: number): void

	/**
	 * Define a entidade pode ser mover.
	 * @param {boolean} can - Se a entidade pode ser mover.
	 * @param {boolean} effect - Se a entidade deve receber um efeito de congelado.
	 */
	setCanWalk (can: boolean, effect: boolean): void

  /**
	 * Define a usuário pode ser falar no quarto.
	 * @param {boolean} muted - Se o usuário pode ou não falar.
	 */
	setMuted (muted: boolean): void

  /**
	 * Define se as interações do usuário devem ser desabilitadas.
	 * @param {boolean} disable - Se irá desabilitar as interações.
	 */
	setInteractionDisabled (disable: boolean): void

	/**
	 * Define uma dança para a entidade.
	 * 0: Parado.
	 * 1: Hap-Hop
	 * 2: Pogo-Mogo
	 * 3: Duck Funk
	 * 4: Rollie
	 * @param {number} danceId - Código da dança
	 */
	setDance (danceId: number): void

  /**
   * Define se a visiblidade do usuário.
   * @param {boolean} isVisible - Se deve estar visivel ou não
   */
  setVisibility (isVisible: boolean): void

	/**
	 * Define o valor de mémoria no usuário
	 * @param {number} value - Valor que será definido.
	 */
	setMemoryValue (value: number): void

	/**
	 * Define a opacidade do mobi apenas para o usuário
	 * @param {number} furniId - ID do mobi a ser defindo a opacidade.
	 * @param {number} alpha - Valor da opacidade (1 a 255).
	 */
	setFurniOpacity (furniId: number, alpha: number): boolean

	/**
	 * Define a opacidade do mobi apenas para o usuário
	 * @param {ScriptFurni} furni - mobi a ser defindo a opacidade.
	 * @param {number} alpha - Valor da opacidade (1 a 255).
	 */
	setFurniOpacity (furni: ScriptFurni, alpha: number): boolean

	/**
	 * Define a opacidade dos mobis apenas para o usuário
	 * @param {ScriptFurnisOpacity} furnis - conjunto de mobis a ser defindo a opacidade.
	 */
	setFurnisOpacity (furnis: ScriptFurnisOpacity): boolean

	/**
	 * Envia um emblema a entidade.
	 * *Restrito a usuários.*
	 * @param {string} badge - Código do emblema a ser entregue.
	 */
	giveBadge (badge: string): void

  /**
	 * De pontos ao usúarios em um placar da HK.
	 * @param {string} leaderboard - Nome do placar a ser dado os pontos.
	 * @param {ScriptEntity} user - usuário a ganhar os pontos
   * @param {number} points - Quantidade de pontos
	 */
  giveLeaderboardPoints (leaderboard: string, user: ScriptEntity, points: number): void

	/**
	 * Remove o item de mão da entidade.
	 */
	removeHandItem (): void

	/**
	 * Remove o efeito da entidade.
	 */
	removeEffect (): void

	/**
	 * Remove um emblema de um usuário.
	 * @param {string} badge - Código do emblema.
	 */
	removeBadge (badge: string): void

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
   * Esconde outro usuário para o usuário atual.
   * @param {number} playerId - ID do usuário a ser escondido.
   */
  hidePlayer (playerId: number): void

  /**
   * Mostra outro usuário para o usuário atual.
   * @param {number} playerId - ID do usuário a ser mostrado.
   */
  showPlayer (playerId: number): void

  /**
   * Esconde um Bot para o usuário atual.
   * @param {number} botId - ID do Bot a ser escondido.
   */
  hideBot (botId: number): void

  /**
   * Mostra um Bot para o usuário atual.
   * @param {number} botId - ID do Bot a ser mostrado.
   */
  showBot (botId: number): void

  /**
   * Esconde um Pet para o usuário atual.
   * @param {number} petId - ID do Pet a ser escondido.
   */
  hidePet (petId: number): void

  /**
   * Mostra um Pet para o usuário atual.
   * @param {number} petId - ID do Pet a ser mostrado.
   */
  showPet (petId: number): void

  /**
   * Toca um áudio no jogo do usuário.
   * Veja a lista de áudios com :audios
   * @param {string} soundName - Nome do áudio
   * @param {number} volume - Volume do áudio de 1 a 100
   */
  playAudio (soundName: string, volume: number): void

  /**
   * Toca uma música no jogo do usuário.
   * Veja a lista de músicas com :musicas
   * @param {string} soundName - Nome do áudio
   * @param {number} volume - Volume do áudio de 1 a 100
   * @param {number} loop - Se a música deve permanecer na playlist e repetindo
   */
  playMusic (soundName: string, volume: number, loop: number): void

  /**
   * Para todas as músicas que o usuário estiver ouvindo
   */
  stopMusics (): void

	/**
	 * Faz a entidade dizer uma mensagem.
	 * @param {*} message - Mensagem que será dita pela entidade.
	 * @param {boolean=} shout - Se o personagem deve gritar a mensagem. (Mensagem em Bold)
	 * @param {number=} bubbleId - Balão da mensagem
	 */
	say (message: any, shout?: boolean, bubbleId?: number): void

	/**
	 * Envia uma mensagem que aparecerá somente para está entidade.
	 * @param {string} message - Mensagem a ser enviada.
	 * @param {number=} bubble - Balão da mensagem.
	 */
	message (message: string, bubble?: number): void

	/**
	 * Sussura uma mensagem para outra entendide.
	 * @param {ScriptEntity} to - Entidade que receberá a mensagem.
	 * @param {*} message - Mensagem que será enviada.
	 * @param {number} bubbleId - Balão da mensagem.
	 */
	whisper (to: ScriptEntity, message: any, bubbleId: number): void

	/**
	 * Envia um alerta ao usuário.
	 * @param {string} text - Texto do alerta.
	 */
	alert (text: string): void

	/**
	 * Envia um alerta longo ao usuário.
	 * @param {string} text - Texto do alerta.
	 */
	alertLong (text: string): void

	/**
	 * Entidade olha para o ponto definido.
	 * @param {IScriptReachable} object - Objeto posicionável
	 * @param {boolean} moveHead = Se a entidade deve mover somente sua cabeça.
	 */
	lookTo (object: IScriptReachable, moveHead: boolean): void

	/**
	 * Esta entidade olha para outra entidade.
	 * @param {ScriptEntity} entity - Entidade que será o alvo.
	 */
	lookTo (entity: ScriptEntity): void

	/**
	 * Entidade olha para o ponto definido.
	 * @param {number} x - Posição X que entidade irá olhar.
	 * @param {number} y - Posição Y que entidade irá olhar.
	 * @param {boolean=} moveHead - Se a entidade pode mover somente sua cabeça.
	 */
	lookTo (x: number, y: number, moveHead?: boolean): void

	/**
	 * Teletransporta a entidade para posição fornecida.
	 * @param {number} x - Posição X em que entidade seŕa levada.
	 * @param {number} y - Posição Y em que entidade seŕa levada.
	 * @param {number} z - Posição Z em que entidade seŕa levada.
	 * @param {number=} r - Rotação definida para a entidade.
	 */
	teleport (x: number, y: number, z: number, r?: number): void

  /**
	 * Teletransporta a entidade para posição fornecida.
	 * @param {number} x - Posição X em que entidade seŕa levada.
	 * @param {number} y - Posição Y em que entidade seŕa levada.
	 * @param {number} z - Posição Z em que entidade seŕa levada.
	 */
	teleport (x: number, y: number, z: number): void

	/**
	 * Teletransporta a entidade para posição fornecida no objeto.
	 * @param {IScriptReachable} object - Objeto posicionável
	 */
	teleport (object: IScriptReachable): void

  /**
	 * Desliza a entidade para posição fornecida.
	 * @param {number} x - Posição X em que entidade seŕa levada.
	 * @param {number} y - Posição Y em que entidade seŕa levada.
	 * @param {number} z - Posição Z em que entidade seŕa levada.
	 */
  move (x: number, y: number, z: number): void

  /**
   * Entidade anda até a posição fornecida.
   * @param {number} x - Posição X
   * @param {number} y - Posição Y
   */
  walk (x: number, y: number): void

	/**
	 * Entidade anda até a posição fornecida no objeto.
	 * @param {IScriptReachable} object - Objeto posicionável
	 */
	walk (object: IScriptReachable): void

  /**
	 * Entidade anda até a posição fornecida.
	 * @param {number} x - Posição X
	 * @param {number} y - Posição Y
   * @param {boolean} overrideLastStep - Se o ultimo passo deve ignorar outras entidades que estiverem no piso (Apenas funcionará se estiver habilitado atravessar usuarios)
   * @param {boolean} enableDiagonal - Se a entidade pode andar na diagonal
   * @param {boolean} forced - Se a entidade deve andar mesmo congelada
	 */
	walk (x: number, y: number, overrideLastStep: boolean, enableDiagonal: boolean, forced: boolean): void

	/**
	 * Faz com que a entidade pare de andar.
	*/
	cancelWalk (): void

	/**
	 * Entidade faz uma ação determinada
	 * 1: Acenar
	 * 2: Mandar Beijo
	 * 3: Rir
	 * @param {number} action - Número da ação
	*/
	action (action: number): void

  /**
   * Acorda o usuário se estiver ausente.
   */
  unIdle(): void

	/**
	 * Faz a entidade se levantar.
	 */
	std (): void

	/**
	 * Faz a entidade deitar.
	 */
	lay (): void

	/**
	 * Faz a entidade sentar.
	 */
	sit (): void

	/**
	 * Expulsa a entidade do quarto.
	 */
	kick (): void

	/**
	 * Leva a entidade para outro quarto.
	 * *Entidade será levada mesmo que haja campanhia/senha*
	 * @param {number} roomId - ID do quarto alvo.
	 */
	gotoRoom (roomId: number): void

	/**
	 * Envia uma notificação para o usuário.
	 * @param {string} icon - Código do icone para a notificação.
	 * @param {string} message - Mensagem pra notificação.
	*/
	notification (icon: string, message: string): void

	/**
	 * Exibe um video para este usuário
	 * @param {string} url - Url do video no Youtube.
	 * @param {string} force - Se o comando deve forçar a exibição do video, mesmo que o usuário tenha desabilitado.
	 */
	youtube (url: string, force: string): void

	/**
	 * Carrega uma interface na client do usuário.
	 * @param {string} name - Nome da pasta da interface
	 * @param {string} filename - Nome do arquivo da interface.
	 */
	loadUI (name: string, filename: string): void

	/**
	 * Fecha uma interface na client do usuário.
	 * @param {string} name - Nome da pasta da interface
	 * @param {string} filename - Nome do arquivo da interface.
	 */
	unloadUI (name: string, filename: string): void

	 /**
	 * Fecha todas as interfaces na client do usuário.
	 */
	unloadAllUI (): void

	/**
	 * Carrega uma interface na client do usuário
	 * @param {string} eventName - Nome do evento a emitir a client
	 * @param {Object} data - Dados a ser enviados.
	 */
	sendUIMessage (eventName: string, data: object): void

	/**
	 * Executa um link no usuário
	 * @param {string} link - Link a ser executado
	 */
	executeLink (link: string): void

  /**
   * Executa um link no usuário
   * @param {string} link - Link a ser executado
   */
  executeLink (link: string): void

  /**
	 * Esconde o mobi para o usuário.
	 * @param {number} furniId - ID do Furni que será escondido.
	 */
	hideFurni (furniId: number): void

  /**
	 * Esconde o mobi para o usuário.
	 * @param {ScriptFurni} furni - Furni que será escondido.
	 */
	hideFurni (furni: ScriptFurni): void

  /**
	 * Esconde os mobis para o usuário.
	 * @param {number[]} furniIds - IDs dos Furnis que serão escondidos.
	 */
	hideFurnis (furniIds: number[]): void

    /**
	 * Mostra o mobi para o usuário.
	 * @param {number} furniId - ID do Furni que será mostrado.
	 */
	showFurni (furniId: number): void

  /**
	 * Mostra o mobi para o usuário.
	 * @param {ScriptFurni} furni - Furni que será mostrado.
	 */
	showFurni (furni: ScriptFurni): void

  /**
	 * Mostra os mobis para o usuário.
	 * @param {number[]} furniIds - IDs dos Furnis que serão mostrados.
	 */
	showFurnis (furniIds: number[]): void

  /**
	 * Esconde o mobi para o usuário.
	 * @param {number} fakeFurniId - ID do Fake Furni que será escondido.
	 */
	hideFakeFurni (fakeFurniId: number): void

  /**
	 * Esconde o mobi para o usuário.
	 * @param {FakeFloorItem} fakeFurni - Fake Furni que será escondido.
	 */
	hideFakeFurni (fakeFurni: FakeFloorItem): void

  /**
	 * Esconde os mobis para o usuário.
	 * @param {number[]} fakeFurniIds - IDs dos Fake Furnis que serão escondidos.
	 */
	hideFakeFurnis (fakeFurniIds: number[]): void

    /**
	 * Mostra o mobi para o usuário.
	 * @param {number} fakeFurniId - ID do Fake Furni que será mostrado.
	 */
	showFakeFurni (fakeFurniId: number): void

  /**
	 * Mostra o mobi para o usuário.
	 * @param {FakeFloorItem} fakeFurni - Fake Furni que será mostrado.
	 */
	showFakeFurni (fakeFurni: FakeFloorItem): void

  /**
	 * Mostra os mobis para o usuário.
	 * @param {number[]} fakeFurniIds - IDs dos Fake Furnis que serão mostrados.
	 */
	showFakeFurnis (fakeFurniIds: number[]): void

  /**
	 * Bani o usuário do Hotel.
   * (Nescessário Permissão Extra)
	 * @param {number} duration - Duração do Ban.
   * @param {string} reason - Razão do Ban.
	 */
	ban (duration: number, reason: string): boolean

  /**
	 * Aplica soft mute no usuário.
   * (Nescessário Permissão Extra)
	 * @param {boolean} muted - Se deve mutar ou desmutar.
	 */
	softMute (muted: boolean): boolean

  /**
	 * Desconecta o usuário do hotel.
   * (Nescessário Permissão Extra)
	 */
	disconnect (): boolean
}

export { ScriptEntity };
