/**
 * Propriedades e Métodos do quarto que o script será executado
 * @author Arthur L
 * @author Gabriel T
 */
interface Room {
	/**
	 * Retorna o nome atual do quarto.
	 * @returns {String}
	 */
	public getName() :String
	/**
	 * Retorna o ID do quarto
	 * @returns {Number}
	 */
	public getId () :Number
	/**
	 * Define o nome do quarto
	 * @param {*} name - Novo nome que será definido ao quarto.
	 */
	public setName (name:String) :void
	/**
	 * Abre o quarto
	 */
	public open () :void
	/**
	 * Retorna o Piso da posição fornecida.
	 * @param {Number} x - Posição X do piso.
	 * @param {Number} y - Posição y do piso.
	 * @return {ScriptTile}
	 */
	public getTile(x:Number, y:Number) : ScriptTile | null
	/**
	 * Retorna a mobilia correspondente ao ID.
	 * @param {Number} id - ID da mobilia a ser buscada.
	 * @returns {ScriptFurni}
	 */
	public getFurniById (id:Number) : ScriptFurni | null  
	/**
	 * Retorna uma lista de mobilias que estão no piso
	 * @param {Number} x - Posição X do piso.
	 * @param {Number} y - Posição y do piso.
	 * @returns {ScriptFurni[]}
	 */
	public getFurniByTile (x:Number, y:Number) : ScriptFurni[]
	/**
	 * Retorna uma lista de todas as entidades presentes nas mobilias.
	 * @param {ScriptFurni[]} furnis - Mobilias a serem consultadas.
	 * @returns {ScriptEntity[]}
	 */
	public getEntitiesByFurnis (furnis:ScriptFurni[]) : ScriptEntity[]
	/**
	 * Retorna uma lista com todos as mobilias do tipo definido.
	 * @param {Number} sprite - Código base da mobilia buscada.
	 * @returns {ScriptFurni[]}
	 */
	public getAllFurnisBySpriteId (sprite:Number) : ScriptFurni[]
	/**
	 * Retorna uma lista com todas as entidades presentes na mobilia.
	 * @param {ScriptFurni} furni - Mobilia a ser consultada.
	 * @returns {ScriptEntity[]}
	 */
	public getEntitiesByFurni (furni:ScriptFurni) : ScriptEntity[]
	/**
	 * Retorna o ID do dono do quarto
	 * @returns {Number}
	 */
	public ownerId () : Number
	/**
	 * Define o atravessar
	 * @param {Boolean} allow - Valor que irá definir se será habilitado ou desabilitado
	 */
	public setWalkThrough (allow:Boolean) :void 
	/**
	 * Retorna a quantidade de usuários do quarto
	 * @returns {Number}
	 */
	public userCount () :Number
	/**
	 * Define a diagonal
	 * @param {Boolean} allow - Valor que irá definir se será habilitado ou desabilitado
	 */
	public setDiagonal (allow:Boolean):void 
	/**
	 * Retorna o nome do dono do quarto
	 * @returns {String}
	 */
	public getOwnerUsername () :String
	/**
	 * 
	 * @param {String} name - Nome do usuário buscado.
	 * @returns {ScriptEntity}
	 */
	public getPlayerByName (name:String) :ScriptEntity
	/**
	 * Envia um alerta para todos do quarto
	 * @param {String} message - Mensagem que irá aparecer no alerta.
	 */
	public alert (message:String) :void 
	/**
	 * Define campanhia 
	 */
	public setDoorbell () :void
	/**
	 * Envia notificação para todos do quarto
	 * @param {String} icon - Código do icone que irá aparecer na notificação
	 * @param {String} message - Mensagem que irá aparecer na notificação.
	 */
	public notification (icon:String, message:String) : void 
	/**
	 * Define mute do quarto
	 * @param {Boolean} mute - Valor que irá definir se será mutado ou desmutado.
	 */
	public setRoomMute (mute:Boolean) :void 
	/**
	 * Envia TTS para todos os usuários
	 * @param {String} text - Texto a ser lido pela voz sintetizada
	 */
	public tts (text:String):void 
	/**
	 * Retorna o usuário correspondente ao ID.
	 * @param {Number} id - ID do usuário buscado.
	 * @returns {ScriptEntity}
	 */
	public getPlayerById (id:Number) : ScriptEntity
	/** 
	 * Retorna estado atual do atravessar.
	 * @returns {Boolean}
	 */
	public getWalkThrough () :Boolean
	/**
	 * Retorna estado atual da diagonal.
	 * @returns {Boolean}
	 */
	public getDiagonal () : Boolean
	/**
	 * Define uma senha para trancar o quarto.
	 * @param {String} password - Senha a ser definida.
	 */
	public setPassword (password:String) :void 
	/**
	 * Retorna o atual estado do mute no quarto.
	 * @returns {Boolean}
	 */
	public getRoomMute () :Boolean
	/**
	 * Retorna uma lista com todos os usuários do quarto.
	 * @returns {ScriptEntity[]}
	 */
	public getAllPlayers () : ScriptEntity[]
	/**
	 * Reproduz video do Youtube para todos os usuários do quarto.
	 * @param {String} link - Link do video do Youtube.
	 */
	public youtube (link:String) :void
	/**
	 * Retorna o bot correspondente ao nome.
	 * @param {String} name - Nome do Bot a ser buscado.
	 * @returns {ScriptEntity}
	 */
	public getBotByName (name:String) :void 
	/**
	 * Retorna todas entidades que estão na posição fornecida.
	 * @param {Number} x - Posição X buscada.
	 * @param {Number} y - Posição Y buscada.
	 * @returns {ScriptEntity[]}
	 */
	public getEntitiesByCoord (x:Number, y:Number) :ScriptEntity[] 
	/**
	 * Desliga/liga a luz do quarto.
	 * @param {Boolean} activated - Se a luz deve ser desligada ou ligada.
	*/
	public setMoodLight (activated:Boolean): void 
	/**
	 * Altera a cor e estado da luz do quarto.
	 * @param {Boolean} activated - Se a luz deve ser desligada ou ligada.
	 * @param {Number} r - Valor da cor representando Vermelha. (0 a 255)
	 * @param {Number} g - Valor da cor representando Verde. (0 a 255)
	 * @param {Number} b - Valor da cor representando Azul. (0 a 255)
	 * @param {Number} intensity - Valor da intensidade que a cor. *(0: Opaco a 255: Transparente)*
	 * @param {Boolean} wallOnly - Se a luz deve ficar só nas paredes.
	*/
	public setMoodLight (activated:Boolean, r:Number, g:Number, b:Number, intensity:Number, wallOnly:Boolean) :void
	/**
	 * Altera a cor do plano de fundo do quarto.
	 * @param {Number} h - Valor da Matiz (0 a 255)
	 * @param {Number} s - Valor da Saturação (0 a 255)
	 * @param {Number} l - Valor do nivel de claridade da cor. (0 a 255)
	*/
	public setBackgroundTonerColor (h:Number, s:Number, l:Number): void
}

declare const Room : Room
