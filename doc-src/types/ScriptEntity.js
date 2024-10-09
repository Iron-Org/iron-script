/// <reference path="IScriptReachable.js"/>
/// <reference path="ScriptFurni.js"/>
/// <reference path="ScriptAchievementProgress.js"/>
/// <reference path="ScriptFurnisOpacity.js"/>

/**
 * Classe que representa uma entidade no quarto.
 * @class
 * @hideconstructor
 * @implements {IScriptReachable}
 * @author Arthur L
 * @author Gabriel T
 */
class ScriptEntity {
	/**
	 * Retorna o ID da entidade.
	 * @returns {number}
	 */
	getId () {}
	/**
	 * Retorna o nome da Entidade atual.
	 * @returns {string}
	 */
	getUsername () {}
	/**
	 * Retorna a posição X atual da entidade.
	 * @returns {number}
	 */
	getX () {}
	/**
	 * Retorna a posição Y atual da entidade.
	 * @returns {number}
	 */
	getY () {}
	/**
	 * Retorna a atual posição Z da entidade.
	 * @returns {number}
	 */
	getZ () {}
	/**
	 * Retorna a atual rotação do corpo da entidade.
	 * @returns {number}
	 */
	getR () {}
  /**
	 * Retorna a atual rotação da cabeça da entidade.
	 * @returns {number}
	 */
	getHeadR () {}
	/**
	 * Retorna o tipo da entidade.
	 * @returns {string}
	 */
	getType () {}
	/**
	 * Retorna o rank da entidade.
	 * @returns {number}
	 */
	getRank () {}
	/**
	 * Retorna a missão da entidade.
	 * @returns {string}
	 */
	getMotto () {}
  /**
	 * Retorna o genero da entidade
	 * @returns {string}
	 */
	getGender() { }
	/**
	 * Retorna o código do atual visual da entidade.
	 * *Não aplicável a Pets*
	 * @returns {string}
	 */
	getFigure () {}
	/**
	 * Retorna o código do efeito atual da entidade.
	 * @returns {number}
	 */
	getEffect () {}
	/**
	 * Retorna o código do atual item de mão que a entidade está segurando.
	 * @returns {number}
	 */
	getHandItem () {}
	/**
	 * Retorna a atual dança da entidade.
	 * @returns {number}
	 */
	getDance () {}
  /**
	 * Retorna a ação que a entidade esta fazendo.
	 * @returns {number}
	 */
	getAction () {}
  /**
	 * Retorna a placa que a entidade esta segurando.
	 * @returns {number}
	 */
	getSign () {}
	/**
	 * Retorna objeto com status atual da conquista
	 * @param {string} achievement
	 * @return {ScriptAchievementProgress}
	 */
	getAchievementProgress (string) {}
  /**
	 * Retorna o total de Ponto de Conquista da entidade.
	 * @returns {number}
	 */
	getAchievementPoints() { }
	/**
	 * Retorna quantidade de Créditos que o usuário possui
	 * @returns {number}
	 */
	getCredits() {}
	/**
	 * Retorna quantidade de Duckets que o usuário possui
	 * @returns {number}
	 */
	getDuckets() {}
	/**
	 * Retorna quantidade de Diamantes que o usuário possui
	 * @returns {number}
	 */
	getDiamonds() {}
  /**
   * Retorna quantidade de Pontos Sazonais que o usuário possui
   * @returns {number}
   */
  getSeasonalPoints () {}
	/**
	 * Returna o valor de memória definido no usuário.
	 * @returns {number}
	 */
	getMemoryValue () {}
  /**
	 * Returna a entidade do mascote do usuário.
	 * @returns {ScriptEntity}
	 */
	getMascotEntity () {}
	/**
	 * Retorna a distancia entre a entidade e outra posição fornecida no objeto.
	 * @param {IScriptReachable} e
	 * @returns {number}
	 */
	distanceTo (e) {}
	/**
	 * Retorna a distancia atual entre esta entidade e a posição fornecida.
	 * @param {number} x - Posição X a ser comparada.
	 * @param {number} y - Posição Y a ser comparada.
	 * @param {number} z - Posição Z a ser comparada.
	 * @returns {number}
	 */
	distanceTo (x, y, z) {}
  /**
	 * Retorna se a entidade é fake.
	 * @returns {boolean}
	 */
	isFakeEntity () {}
	/**
	 * Retorna se a entidade é um usuário.
	 * @returns {boolean}
	 */
	isPlayer () {}
	/**
	 * Retorna se entidade é um Bot.
	 * @returns {boolean}
	 */
	isBot () {}
	/**
	 * Retorna se a entidade é um Pet.
	 * @returns {boolean}
	 */
	isPet () {}
	/**
	 * Retorna se o usuário esta ausente.
	 * @returns {boolean}
	 */
	isIdle() {}
  /**
	 * Retorna se o usuário esta com interações desabilitadas.
	 * @returns {boolean}
	 */
  isInteractionDisabled() {}
	/**
	 * Retorna se esta entidade é igual a entidade fornecida.
	 * @param {ScriptEntity} entity - Entidade que será comparada.
	 * @returns {boolean}
	 */
	equals (entity) {}
	/**
	 * Retorna se esta entidade está sobre a mobilia fornecida.
	 * @param {IScriptReachable} object
	 * @returns {boolean}
	 */
	in (object) {}
	/**
	 * Retorna se a entidade está em alguma das mobilias fornecidas.
	 * @param {IScriptReachable[]} furnis - Lista de mobilias a serem comparadas.
	 * @returns {boolean}
	 */
	inAny (furnis) {}
	/**
	 * Retorna se a entidade pode se mover.
	 * @returns {boolean}
	 */
	canWalk () {}
	/**
	 * Retorna se a entidade está se movendo.
	 * @returns {boolean}
	 */
	isWalking () {}
  /**
	 * Retorna se a entidade é um mascote.
	 * @returns {boolean}
	 */
  isMascotEntity () {}
	/**
	 * Retorna se a entidade possui o emblema no inventário do usuário.
	 * *Emblema não precisa estar equipado como favorito.*
	 * @param {string} badge - Código do emblema a ser verificado.
	 * @returns {boolean}
	*/
	hasBadge (badge) {}
	/**
	 * Retorna se entidade possui o rank fornecido ou maior.
	 * @param {number} rank - Valor do rank a ser comparado.
	 * @returns {boolean}
	 */
	hasRank (rank) {}
  /**
	 * Retorna se entidade esta sentada.
	 * @returns {boolean}
	 */
	hasSit () {}
  /**
	 * Retorna se entidade esta deitada.
	 * @returns {boolean}
	 */
	hasLay () {}
  /**
   * Retorn se o usuário possui um mascote no quarto
   * @returns {boolean}
   */
  hasMascotEntity () {}
	/**
	 * Retorna se entidade está próxima (tocando) a posição fornecida.
	 * @param {number} x - Posição X a ser comparada.
	 * @param {number} y - Posição Y a ser comparada.
	 * @param {number} z - Posição Z a ser comparada.
	 * @returns {boolean}
	 */
	touching (x, y, z) {}
	/**
	 * Retorna se entidade está próxima (tocando) a posição fornecida pelo objeto.
	 * @param {IScriptReachable} e
	 * @returns {boolean}
	 */
	touching (e) {}
  /**
	 * Retorna se o usuário esta com soft mute.
	 * @returns {boolean}
	 */
	isSoftMuted () {}
  /**
   * Retorna se o usuário esta ouvindo Música
   * @returns {boolean}
   */
  isListeningMusic () {}
  /**
   * Retorna se o usuário esta banido da economia
   * Tipos:
   *  - moedas: coins
   *  - trocas: trade
   *  - feira livre: martketplace
   *  - raros: rares
   *  - todos: all
   * @param {string} type - Tipo do banimento
   * @returns {boolean}
   */
  isEconomicBanned (type) {}
	/**
	 * Adiciona pontos a uma conquista do usuário.
	 * @param {string} code - Código da conquista.
	 * @param {number} levels - Quantidade de pontos
	 */
	progressAchievement (code, levels) {}
  /**
	 * Define a rotação da entidade.
	 * @param {number} rotation - Valor da rotação.
	 */
	setRotation (rotation) {}
	/**
	 * Define um novo nome ao Bot.
	 * *Restrito a BOTs*
	 * @param {string} username - Nome que será definido ao Bot.
	 */
	setUsername (username) {}
	/**
	 * Define uma missão a entidade.
	 * @param {*} motto - Missão que será definida na entidade.
	 */
	setMotto (motto) {}
	/**
	 * Define o visual para entidade.
	 * *Não aplicável a Pets*
	 * @param {string} gender - Gênero do visual.
	 * @param {string} figure - Código do visual.
	 */
	setFigure (gender, figure) {}
	/**
	 * Define um item de mão para entidade segurar.
	 * {@link https://drive.google.com/file/d/1tcoc7EqhLCjjzC5z8ArYQ1n8fUsjUauN/edit}
	 * @param {number} h - Código do item de mão.
	 */
	setHandItem (h) {}
	/**
	 * Define um efeito a entidade.
	 * {@link https://drive.google.com/file/d/1sO22JtEZk_v34d5GUEfXLBriqeGc3Xsf/edit}
	 * @param {number} effect - Código do efeito.
	 */
	setEffect (effect) {}
	/**
	 * Define a entidade pode ser mover.
	 * @param {boolean} can - Se a entidade pode ser mover.
	 * @param {boolean} effect - Se a entidade deve receber um efeito de congelado.
	 */
	setCanWalk (can, effect) {}
  /**
	 * Define a usuário pode ser falar no quarto.
	 * @param {boolean} muted - Se o usuário pode ou não falar.
	 */
	setMuted (muted) {}
  /**
	 * Define se as interações do usuário devem ser desabilitadas.
	 * @param {boolean} disable - Se irá desabilitar as interações.
	 */
	setInteractionDisabled (disable) {}
	/**
	 * Define uma dança para a entidade.
	 * 0: Parado.
	 * 1: Hap-Hop
	 * 2: Pogo-Mogo
	 * 3: Duck Funk
	 * 4: Rollie
	 * @param {number} danceId - Código da dança
	 */
	setDance (danceId) {}
  /**
   * Define se a visiblidade do usuário.
   * @param {boolean} isVisible
   */
  setVisibility (isVisible) {}
	/**
	 * Define o valor de mémoria no usuário
	 * @param {number} value - Valor que será definido.
	 */
	setMemoryValue (value) {}
	/**
	 * Define a opacidade do mobi apenas para o usuário
	 * @param {number} furniId - ID do mobi a ser defindo a opacidade.
	 * @param {number} alpha - Valor da opacidade (1 a 255).
	 * @returns {boolean}
	 */
	setFurniOpacity (furniId, alpha) {}
	/**
	 * Define a opacidade do mobi apenas para o usuário
	 * @param {ScriptFurni} furni - mobi a ser defindo a opacidade.
	 * @param {number} alpha - Valor da opacidade (1 a 255).
	 * @returns {boolean}
	 */
	setFurniOpacity (furni, alpha) {}
	/**
	 * Define a opacidade dos mobis apenas para o usuário
	 * @param {ScriptFurnisOpacity} furnis - conjunto de mobis a ser defindo a opacidade.
	 * @returns {boolean}
	 */
	setFurnisOpacity (furnis) {}
	/**
	 * Envia um emblema a entidade.
	 * *Restrito a usuários.*
	 * @param {string} badge - Código do emblema a ser entregue.
	 */
	giveBadge (badge) {}
  /**
	 * De pontos ao usúarios em um placar da HK.
	 * @param {string} leaderboard - Nome do placar a ser dado os pontos.
	 * @param {ScriptEntity} user - usuário a ganhar os pontos
   * @param {number} user - usuário a ganhar os pontos
	 */
  giveLeaderboardPoints (leaderboard, user, points) {}
	/**
	 * Remove o item de mão da entidade.
	 */
	removeHandItem () {}
	/**
	 * Remove o efeito da entidade.
	 */
	removeEffect () {}
	/**
	 * Remove um emblema de um usuário.
	 * @param {string} badge - Código do emblema.
	 */
	removeBadge (badge) {}
  /**
	 * Faz uma entidade começar a seguir.
	 * @param {ScriptEntity } entity - Entidade que irá começar a seguir.
	 */
  addFollowerEntity(entity) {}
  /**
	 * Faz uma entidade começar a seguir.
	 * @param {FakeEntity} entity - Entidade que irá começar a seguir.
	 */
  addFollowerEntity(entity) {}
  /**
	 * Faz uma entidade começar a seguir.
	 * @param {ScriptEntity } entity - Entidade que irá começar a seguir.
	 */
  removeFollowerEntity(entity) {}
  /**
	 * Faz uma entidade começar a seguir.
	 * @param {FakeEntity} entity - Entidade que irá começar a seguir.
	 */
  removeFollowerEntity(entity) {}
  /**
   * Esconde outro usuário para o usuário atual.
   * @param {number} playerId - ID do usuário a ser escondido.
   */
  hidePlayer (playerId) {}
  /**
   * Mostra outro usuário para o usuário atual.
   * @param {number} playerId - ID do usuário a ser mostrado.
   */
  showPlayer (playerId) {}
  /**
   * Esconde um Bot para o usuário atual.
   * @param {number} botId - ID do Bot a ser escondido.
   */
  hideBot (botId) {}
  /**
   * Mostra um Bot para o usuário atual.
   * @param {number} botId - ID do Bot a ser mostrado.
   */
  showBot (botId) {}
  /**
   * Esconde um Pet para o usuário atual.
   * @param {number} petId - ID do Pet a ser escondido.
   */
  hidePet (petId) {}
  /**
   * Mostra um Pet para o usuário atual.
   * @param {number} petId - ID do Pet a ser mostrado.
   */
  showPet (oetId) {}
  /**
   * Toca um áudio no jogo do usuário.
   * Veja a lista de áudios com :audios
   * @param {string} soundName - Nome do áudio
   * @param {number} volume - Volume do áudio de 1 a 100
   */
  playAudio (soundName, volume) {}
  /**
   * Toca uma música no jogo do usuário.
   * Veja a lista de músicas com :musicas
   * @param {string} soundName - Nome do áudio
   * @param {number} volume - Volume do áudio de 1 a 100
   * @param {number} loop - Se a música deve permanecer na playlist e repetindo
   */
  playMusic (soundName, volume, loop) {}
  /**
   * Para todas as músicas que o usuário estiver ouvindo
   */
  stopMusics () {}
	/**
	 * Faz a entidade dizer uma mensagem.
	 * @param {*} message - Mensagem que será dita pela entidade.
	 * @param {boolean=} shout - Se o personagem deve gritar a mensagem. (Mensagem em Bold)
	 * @param {number=} bubbleId - Balão da mensagem
	 */
	say (message, shout, bubbleId) {}
	/**
	 * Envia uma mensagem que aparecerá somente para está entidade.
	 * @param {string} message - Mensagem a ser enviada.
	 * @param {number=} bubble - Balão da mensagem.
	 */
	message (message, bubble) {}
	/**
	 * Sussura uma mensagem para outra entendide.
	 * @param {ScriptEntity} to - Entidade que receberá a mensagem.
	 * @param {*} message - Mensagem que será enviada.
	 * @param {number} bubbleId - Balão da mensagem.
	 */
	whisper (to, message, bubbleId) {}
	/**
	 * Envia um alerta ao usuário.
	 * @param {string} text - Texto do alerta.
	 */
	alert (string) {}
	/**
	 * Envia um alerta longo ao usuário.
	 * @param {string} text - Texto do alerta.
	 */
	alertLong (string) {}
	/**
	 * Entidade olha para o ponto definido.
	 * @param {IScriptReachable} object
	 * @param {boolean} moveHead = Se a entidade pode mover somente sua cabeça.
	 */
	lookTo (object, moveHead) {}
	/**
	 * Esta entidade olha para outra entidade.
	 * @param {ScriptEntity} entity - Entidade que será o alvo.
	 */
	lookTo (entity) {}
	/**
	 * Entidade olha para o ponto definido.
	 * @param {number} x - Posição X que entidade irá olhar.
	 * @param {number} y - Posição Y que entidade irá olhar.
	 * @param {boolean=} moveHead - Se a entidade pode mover somente sua cabeça.
	 */
	lookTo (x, y, moveHead) {}
	/**
	 * Teletransporta a entidade para posição fornecida.
	 * @param {number} x - Posição X em que entidade seŕa levada.
	 * @param {number} y - Posição Y em que entidade seŕa levada.
	 * @param {number} z - Posição Z em que entidade seŕa levada.
	 * @param {number=} r - Rotação definida para a entidade.
	 */
	teleport (x, y, z, r) {}
  /**
	 * Teletransporta a entidade para posição fornecida.
	 * @param {number} x - Posição X em que entidade seŕa levada.
	 * @param {number} y - Posição Y em que entidade seŕa levada.
	 * @param {number} z - Posição Z em que entidade seŕa levada.
	 */
	teleport (x, y, z) {}
	/**
	 * Teletransporta a entidade para posição fornecida no objeto.
	 * @param {IScriptReachable} o
	 */
	teleport (o) {}
  /**
	 * Desliza a entidade para posição fornecida.
	 * @param {number} x - Posição X em que entidade seŕa levada.
	 * @param {number} y - Posição Y em que entidade seŕa levada.
	 * @param {number} z - Posição Z em que entidade seŕa levada.
	 */
  move (x, y, z) {}
  /**
   * Entidade anda até a posição fornecida.
   * @param {number} x
   * @param {number} y
   */
  walk (x, y) {}
	/**
	 * Entidade anda até a posição fornecida no objeto.
	 * @param {IScriptReachable} o
	 */
	walk (o) {}
  /**
	 * Entidade anda até a posição fornecida.
	 * @param {number} x
	 * @param {number} y
   * @param {boolean} overrideLastStep - Se o ultimo passo deve ignorar outras entidades que estiverem no piso (Apenas funcionará se estiver habilitado atravessar usuarios)
   * @param {boolean} enableDiagonal - Se a entidade pode andar na diagonal
   * @param {boolean} forced - Se a entidade deve andar mesmo congelada
	 */
	walk (x, y, overrideLastStep, enableDiagonal, forced) {}
	/**
	 * Faz com que a entidade pare de andar.
	*/
	cancelWalk () {}
	/**
	 * Entidade faz uma ação determinada
	 * 1: Acenar
	 * 2: Mandar Beijo
	 * 3: Rir
	 * @param {number} action - Número da ação
	*/
	action (action) {}
  /**
   * Acorda o usuário se estiver ausente.
   */
  unIdle() {}
	/**
	 * Faz a entidade se levantar.
	 */
	std () {}
	/**
	 * Faz a entidade deitar.
	 */
	lay () {}
	/**
	 * Faz a entidade sentar.
	 */
	sit () {}
	/**
	 * Expulsa a entidade do quarto.
	 */
	kick () {}
	/**
	 * Leva a entidade para outro quarto.
	 * *Entidade será levada mesmo que haja campanhia/senha*
	 * @param {number} roomId - ID do quarto alvo.
	 */
	gotoRoom (roomId) {}
	/**
	 * Envia uma notificação para o usuário.
	 * @param {string} icon - Código do icone para a notificação.
	 * @param {string} message - Mensagem pra notificação.
	*/
	notification (icon, message) {}
	/**
	 * Exibe um video para este usuário
	 * @param {string} url - Url do video no Youtube.
	 * @param {string} force - Se o comando deve forçar a exibição do video, mesmo que o usuário tenha desabilitado.
	 */
	youtube (url, force) {}
	/**
	 * Carrega uma interface na client do usuário.
	 * @param {string} name - Nome da pasta da interface
	 * @param {string} filname - Nome do arquivo da interface.
	 */
	loadUI (name, filename) {}
	/**
	 * Fecha uma interface na client do usuário.
	 * @param {string} name - Nome da pasta da interface
	 * @param {string} filname - Nome do arquivo da interface.
	 */
	unloadUI (name, filename) {}
	 /**
	 * Fecha todas as interfaces na client do usuário.
	 */
	unloadAllUI () {}
	/**
	 * Carrega uma interface na client do usuário
	 * @param {string} eventName - Nome do evento a emitir a client
	 * @param {Object} data - Dados a ser enviados.
	 */
	sendUIMessage (eventName, data) {}
	/**
	 * Executa um link no usuário
	 * @param {string} link - Link a ser executado
	 */
	executeLink (link) {}
  /**
   * Executa um link no usuário
   * @param {string} link - Link a ser executado
   */
  executeLink (link) {}
  /**
	 * Esconde o mobi para o usuário.
	 * @param {number} furniId - ID do Furni que será escondido.
	 */
	hideFurni (furniId) {}
  /**
	 * Esconde o mobi para o usuário.
	 * @param {ScriptFurni} furni - Furni que será escondido.
	 */
	hideFurni (furni) {}
  /**
	 * Esconde os mobis para o usuário.
	 * @param {number[]} furniIds - IDs dos Furnis que serão escondidos.
	 */
	hideFurnis (furniIds) {}
    /**
	 * Mostra o mobi para o usuário.
	 * @param {number} furniId - ID do Furni que será mostrado.
	 */
	showFurni (furniId) {}
  /**
	 * Mostra o mobi para o usuário.
	 * @param {ScriptFurni} furni - Furni que será mostrado.
	 */
	showFurni (furni) {}
  /**
	 * Mostra os mobis para o usuário.
	 * @param {number[]} furniIds - IDs dos Furnis que serão mostrados.
	 */
	showFurnis (furniIds) {}
  /**
	 * Esconde o mobi para o usuário.
	 * @param {number} fakeFurniId - ID do Fake Furni que será escondido.
	 */
	hideFakeFurni (fakeFurniId) {}
  /**
	 * Esconde o mobi para o usuário.
	 * @param {FakeFloorItem} fakeFurni - Fake Furni que será escondido.
	 */
	hideFakeFurni (fakeFurni) {}
  /**
	 * Esconde os mobis para o usuário.
	 * @param {number[]} fakeFurniIds - IDs dos Fake Furnis que serão escondidos.
	 */
	hideFakeFurnis (fakeFurniIds) {}
    /**
	 * Mostra o mobi para o usuário.
	 * @param {number} fakeFurniId - ID do Fake Furni que será mostrado.
	 */
	showFakeFurni (fakeFurniId) {}
  /**
	 * Mostra o mobi para o usuário.
	 * @param {FakeFloorItem} fakeFurni - Fake Furni que será mostrado.
	 */
	showFakeFurni (fakeFurni) {}
  /**
	 * Mostra os mobis para o usuário.
	 * @param {number[]} fakeFurniIds - IDs dos Fake Furnis que serão mostrados.
	 */
	showFakeFurnis (fakeFurniIds) {}
  /**
	 * Bani o usuário do Hotel.
   * (Nescessário Permissão Extra)
	 * @param {number} duration - Duração do Ban.
   * @param {string} reason - Razão do Ban.
   * @returns {boolean}
	 */
	ban (duration, reason) {}
  /**
	 * Aplica soft mute no usuário.
   * (Nescessário Permissão Extra)
	 * @param {boolean} muted - Se deve mutar ou desmutar.
   * @returns {boolean}
	 */
	softMute (muted) {}
  /**
	 * Desconecta o usuário do hotel.
   * (Nescessário Permissão Extra)
   * @returns {boolean}
	 */
	disconnect () {}
}
