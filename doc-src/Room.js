/// <reference path="types/ScriptEntity.js"/>
/// <reference path="types/ScriptFurni.js"/>
/// <reference path="types/ScriptTile.js"/>

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
