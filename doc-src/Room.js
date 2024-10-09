/// <reference path="types/ScriptEntity.js"/>
/// <reference path="types/ScriptFurni.js"/>
/// <reference path="types/ScriptTile.js"/>
/// <reference path="types/ScriptGroup.js"/>
/// <reference path="types/ScriptPrivateChat.js"/>
/// <reference path="types/ScriptFurnisOpacity.js"/>

/**
 * Propriedades e Métodos do quarto em que script está sendo executado
 * @namespace Room
 * @author Arthur L
 * @author Gabriel T
 */
const Room = {
	/**
	 * Retorna o ID do quarto
	 * @returns {Number}
	 */
	getId () {},
	/**
	 * Retorna o nome atual do quarto.
	 * @returns {String}
	 */
	getName () {},
	/**
	 * Retorna o nome do dono do quarto
	 * @returns {String}
	 */
	getOwnerUsername () {},
	/**
	 * Retorna o ID do dono do quarto
	 * @returns {Number}
	 */
	ownerId () {},
	/**
	 * Retorna a quantidade de usuários do quarto
	 * @returns {Number}
	 */
	userCount () {},
	/**
	 * Retorna o usuário correspondente ao ID.
	 * @param {Number} id - ID do usuário buscado.
	 * @returns {ScriptEntity}
	 */
	getPlayerById (id) {},
	/**
	 * Retorna o usuário correspondente ao Nome.
	 * @param {String} name - Nome do usuário buscado.
	 * @returns {ScriptEntity}
	 */
	getPlayerByName (name) {},
	/**
	 * Retorna o bot correspondente ao nome.
	 * @param {String} name - Nome do Bot a ser buscado.
	 * @returns {ScriptEntity}
	 */
	getBotByName (name) {},
	/**
	 * Retorna uma lista com todos os usuários do quarto.
	 * @returns {ScriptEntity[]}
	 */
	getAllPlayers () {},
	/**
	 * Retorna todas entidades que estão na posição fornecida.
	 * @param {Number} x - Posição X buscada.
	 * @param {Number} y - Posição Y buscada.
	 * @returns {ScriptEntity[]}
	 */
	getEntitiesByCoord (x, y) {},
	/**
	 * Retorna uma lista com todas as entidades presentes na mobilia.
	 * @param {ScriptFurni} furni - Mobilia a ser consultada.
	 * @returns {ScriptEntity[]}
	 */
	getEntitiesByFurni (furni) {},
	/**
	 * Retorna uma lista de todas as entidades presentes nas mobilias.
	 * @param {ScriptFurni[]} furnis - Mobilias a serem consultadas.
	 * @returns {ScriptEntity[]}
	 */
	getEntitiesByFurnis (furnis) {},
  /**
   * Retorna todas as entidades que estão na area
   * @param {number} x1 - Posição X inicial
   * @param {number} y1 - Posição Y inicial
   * @param {number} x2 - Posição X final
   * @param {number} y2 - Posição Y final
   * @returns {ScriptEntity[]}
   */
  getEntitiesByArea (x1, y1, x2, y2) {},
	/**
	 * Retorna o Piso da posição fornecida.
	 * @param {Number} x - Posição X do piso.
	 * @param {Number} y - Posição y do piso.
	 * @return {ScriptTile}
	 */
	getTile(x, y) {},
	/**
	 * Retorna a mobilia correspondente ao ID.
	 * @param {Number} id - ID da mobilia a ser buscada.
	 * @returns {ScriptFurni}
	 */
	getFurniById (id) {},
	/**
	 * Retorna uma lista de mobilias que estão no piso
	 * @param {Number} x - Posição X do piso.
	 * @param {Number} y - Posição y do piso.
	 * @returns {ScriptFurni[]}
	 */
	getFurniByTile (x, y) {},
	/**
	 * Retorna uma lista com todos as mobilias do tipo definido.
	 * @param {Number} sprite - Código base da mobilia buscada.
	 * @returns {ScriptFurni[]}
	 */
	getAllFurnisBySpriteId (sprite) {},
  /**
   * Retorna todas os mobis que estão na area
   * @param {number} x1 - Posição X inicial
   * @param {number} y1 - Posição Y inicial
   * @param {number} x2 - Posição X final
   * @param {number} y2 - Posição Y final
   * @returns {ScriptFurni[]}
   */
  getFurnisByArea (x1, y1, x2, y2) {},
  /**
	 * Retorna o Grupo do quarto.
	 * @returns {ScriptGroup}
	 */
	getGroup () {},
  /**
   * 0: Desabilitado
   * 1: Apenas donos ou usuários com direitos negociam
   * 2: Todos negociam
   */
  getTradeState() {},
  /**
	 * Retorna estado atual do atravessar.
	 * @returns {Boolean}
	 */
	getWalkThrough () {},
	/**
	 * Retorna estado atual da diagonal.
	 * @returns {Boolean}
	 */
	getDiagonal () {},
	/**
	 * Retorna o atual estado do mute no quarto.
	 * @returns {Boolean}
	 */
	getRoomMute () {},
	/**
	 * Retorna um novo conjunto de mobis
	 * @returns {ScriptFurnisOpacity}
	 */
	createFurnisOpacityData() {},
	/**
	 * @param {Number} x - Posição X do piso.
	 * @param {Number} y - Posição X do piso.
	 */
	tileExists (x, y) {},
	/**
	 * Retorna se o usuário tem direitos no quarto.
	 * @param {Number} id - Id do usuário.
	 * @returns {Boolean}
	 */
	hasRights (id) {},
  /**
	 * Retorna se o quarto está com mobis bloqueados.
	 * @returns {Boolean}
	 */
  isFurnitureBlocked () {},
  /**
	 * Dá Direitos ao usuário *ID*.
	 * @param {Number} id - Id do usuário que receberá Direitos.
	 */
	addRights(id) { },
	/**
	 * Retira os Direitos do usuário *ID*.
	 * @param {Number} id - Id do usuário que perderá Direitos.
	 */
	removeRights(id) { },
	/**
	 * Define o nome do quarto
	 * @param {*} name - Novo nome que será definido ao quarto.
	 */
	setName (name) {},
	/**
	 * Desliga/liga a luz do quarto.
	 * @param {Boolean} activated - Se a luz deve ser desligada ou ligada.
	 */
	setMoodLight (activated) {},
	/**
	 * Altera a cor e estado da luz do quarto.
	 * @param {Boolean} activated - Se a luz deve ser desligada ou ligada.
	 * @param {Number} r - Valor da cor representando Vermelha. (0 a 255)
	 * @param {Number} g - Valor da cor representando Verde. (0 a 255)
	 * @param {Number} b - Valor da cor representando Azul. (0 a 255)
	 * @param {Number} intensity - Valor da intensidade que a cor. *(0: Opaco a 255: Transparente)*
	 * @param {Boolean} wallOnly - Se a luz deve ficar só nas paredes.
	 */
	setMoodLight (activated, r, g, b, intensity, wallOnly) {},
	/**
	 * Altera a cor do plano de fundo do quarto.
	 * @param {Number} h - Valor da Matiz (0 a 255)
	 * @param {Number} s - Valor da Saturação (0 a 255)
	 * @param {Number} l - Valor do nivel de claridade da cor. (0 a 255)
	 */
	setBackgroundTonerColor (h, s, l) {},
	/**
	 * Define a velocidade dos Rollers no quarto.
	 * @param {Number} speed - Velocidade dos rollers.
	 */
	setRollerSpeed () {},
	/**
	 * Define a diagonal
	 * @param {Boolean} allow - Valor que irá definir se será habilitado ou desabilitado
	 */
	setDiagonal (allow) {},
	/**
	 * Define o atravessar
	 * @param {Boolean} allow - Valor que irá definir se será habilitado ou desabilitado
	 */
	setWalkThrough (allow) {},
	/**
	 * Define mute do quarto
	 * @param {Boolean} mute - Valor que irá definir se será mutado ou desmutado.
	 */
	setRoomMute (mute) {},
	/**
	 * Define uma senha para trancar o quarto.
	 * @param {String} password - Senha a ser definida.
	 */
	setPassword (password) {},
	/**
	 * Define campanhia
	 */
	setDoorbell () {},
  /**
	 * Define se os mobis serão bloqueados de ser movidos/retirados no quarto.
	 * @param {Boolean} blocked - Valor que irá definir se os mobis serão bloqueados ou desbloqueados.
	 */
  setFurnitureBlocked (blocked) {},
  /**
   * Define qual estado de trocas no quarto
   * @param {number} tradeStateCode - Código do estado
   */
  setTradeState (tradeStateCode) {},
	/**
   * Altera a opacidade de um conjunto de mobis
   * @param {ScriptFurnisOpacity} furnis - Conjunto de Mobis
   */
  setFurnisOpacity (furnis) {},
  /**
   * Cria um chat privado
   * @returns {ScriptPrivateChat}
   */
  createPrivateChat () {},
  /**
   * Deleta um chat privado
   * @param {ScriptPrivateChat} privateChat - Chat privado a ser deletado
   */
  deletePrivateChat (privateChat) {},
  /**
   * Deleta todos os chats privados
   */
  deleteAllPrivateChats() {},
  /**
	 * Define a orientação dos crônometros
	 * @param {Boolean} up - Se a contagem dos crônometros deve ser crescente, caso contrário será decrescente.
	 */
  toggleTimerUpDirection (up) {},
	/**
	 * Envia notificação para todos do quarto
	 * @param {String} icon - Código do icone que irá aparecer na notificação
	 * @param {String} message - Mensagem que irá aparecer na notificação.
	 */
	notification (icon, message) {},
	/**
	 * Envia um alerta para todos do quarto
	 * @param {String} message - Mensagem que irá aparecer no alerta.
	 */
	alert (message) {},
	/**
	 * Abre o quarto
	 */
	open () {},
	/**
	 * Envia TTS para todos os usuários
	 * @param {String} text - Texto a ser lido pela voz sintetizada
	 */
	tts (text) {},
	/**
	 * Reproduz video do Youtube para todos os usuários do quarto.
	 * @param {String} link - Link do video do Youtube.
	 */
	youtube (link) {}
}
