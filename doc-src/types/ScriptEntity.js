/// <reference path="IScriptReachable.js"/>

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
	 * @returns {Number}
	 */
	getId() {}
	/**
	 * Retorna o nome da Entidade atual.
	 * @returns {String}
	 */
	getUsername () {}
	/**
	 * Retorna a posição X atual da entidade.
	 * @returns {Number}
	 */
	getX () {}
	/**
	 * Retorna a posição Y atual da entidade.
	 * @returns {Number}
	 */
	getY () {}
	/**
	 * Retorna a atual posição Z da entidade.
	 * @returns {Number}
	 */
	getZ () {}
	/**
	 * Retorna a atual rotação da entidade.
	 * @returns {Number}
	 */
	getR () {}
	/**
	 * Retorna a missão da entidade.
	 * @returns {String}
	 */
	getMotto () {}
	/**
	 * Retorna o código do atual visual da entidade.
	 * *Não aplicável a Pets*
	 * @returns {String}
	 */
	getFigure () {}
	/**
	 * Retorna o código do efeito atual da entidade.
	 * @returns {Number}
	 */
	getEffect () {}
	/**
	 * Retorna o código do atual item de mão que a entidade está segurando.
	 * @returns {Number}
	 */
	getHandItem () {}
	/**
	 * Retorna a atual dança da entidade.
	 * @returns {Number}
	 */
	getDance () {}
	/**
	 * Retorna a distancia entre a entidade e outra posição fornecida no objeto.
	 * @param {IScriptReachable} e
	 * @returns {Number}
	 */
	distanceTo (e) {}
	/**
	 * Retorna a distancia atual entre esta entidade e a posição fornecida.
	 * @param {Number} x - Posição X a ser comparada.
	 * @param {Number} y - Posição Y a ser comparada.
	 * @param {Number} z - Posição Z a ser comparada.
	 * @returns {Number}
	 */
	distanceTo (x, y, z) {}
	/**
	 * Retorna se a entidade é um usuário.
	 * @returns {Boolean}
	 */
	isPlayer () {}
	/**
	 * Retorna se entidade é um Bot.
	 * @returns {Boolean}
	 */
	isBot () {}
	/**
	 * Retorna se a entidade é um Pet.
	 * @returns {Boolean}
	 */
	isPet () {}
	/**
	 * Retorna se esta entidade é igual a entidade fornecida.
	 * @param {ScriptEntity} entity - Entidade que será comparada.
	 * @returns {Boolean}
	 */
	equals (entity) {}
	/**
	 * Retorna se esta entidade está sobre a mobilia fornecida.
	 * @param {IScriptReachable} object
	 * @returns {Boolean}
	 */
	in (object) {}
	/**
	 * Retorna se a entidade está em alguma das mobilias fornecidas.
	 * @param {IScriptReachable[]} furnis - Lista de mobilias a serem comparadas.
	 * @returns {Boolean}
	 */
	inAny (furnis) {}
	/**
	 * Retorna se a entidade pode se mover.
	 * @returns {Boolean}
	 */
	canWalk () {}
	/**
	 * Retorna se a entidade está se movendo.
	 * @returns {Boolean}
	 */
	isWalking () {}
	/**
	 * Retorna se a entidade possui o emblema no inventário do usuário.
	 * *Emblema não precisa estar equipado como favorito.*
	 * @param {String} badge - Código do emblema a ser verificado.
	 * @returns {Boolean}
	*/
	hasBadge (badge) {}
	/**
	 * Retorna se entidade possui o rank fornecido ou um maior.
	 * @param {Number} rank - Valor do rank a ser comparado.
	 * @returns {Boolean}
	 */
	hasRank (rank) {}
	/**
	 * Retorna se entidade está próxima (tocando) a posição fornecida.
	 * @param {Number} x - Posição X a ser comparada.
	 * @param {Number} y - Posição Y a ser comparada.
	 * @param {Number} z - Posição Z a ser comparada.
	 * @returns {Boolean}
	 */
	touching (x, y, z) {}
	/**
	 * Retorna se entidade está próxima (tocando) a posição fornecida pelo objeto.
	 * @param {IScriptReachable} e
	 * @returns {Boolean}
	 */
	touching (e) {}
	/**
	 * Define um novo nome ao Bot.
	 * *Restrito a BOTs*
	 * @param {String} username - Nome que será definido ao Bot.
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
	 * @param {String} gender - Gênero do visual.
	 * @param {String} figure - Código do visual.
	 */
	setFigure (gender, figure) {}
	/**
	 * Define um item de mão para entidade segurar.
	 * {@link https://drive.google.com/file/d/1tcoc7EqhLCjjzC5z8ArYQ1n8fUsjUauN/edit}
	 * @param {Number} h - Código do item de mão.
	 */
	setHandItem (h) {}
	/**
	 * Define um efeito a entidade.
	 * {@link https://drive.google.com/file/d/1sO22JtEZk_v34d5GUEfXLBriqeGc3Xsf/edit}
	 * @param {Number} effect - Código do efeito.
	 */
	setEffect (effect) {}
	/**
	 * Define a entidade pode ser mover.
	 * @param {Boolean} can - Se a entidade pode ser mover.
	 * @param {Boolean} effect - Se a entidade deve receber um efeito de congelado.
	 */
	setCanWalk (can, effect) {}
	/**
	 * Define uma dança para a entidade.
	 * 0: Parado.
	 * 1: Hap-Hop
	 * 2: Pogo-Mogo
	 * 3: Duck Funk
	 * 4: Rollie
	 * @param {Number} danceId - Código da dança
	 */
	setDance (danceId) {}
	/**
	 * Envia um emblema a entidade.
	 * *Restrito a usuários.*
	 * @param {String} badge - Código do emblema a ser entregue.
	 */
	giveBadge (badge) {}
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
	 * @param {String} badge - Código do emblema.
	 */
	removeBadge (badge) {}
	/**
	 * Faz a entidade dizer uma mensagem.
	 * @param {*} message - Mensagem que será dita pela entidade.
	 * @param {Boolean=} shout - Se o personagem deve gritar a mensagem. (Mensagem em Bold)
	 * @param {Number=} bubbleId - Balão da mensagem
	 */
	say (message, shout, bubbleId) {}
	/**
	 * Envia uma mensagem que aparecerá somente para está entidade.
	 * @param {String} message - Mensagem a ser enviada.
	 * @param {Number=} bubble - Balão da mensagem.
	 */
	message (message, bubble) {}
	/**
	 * Sussura uma mensagem para outra entendide.
	 * @param {ScriptEntity} to - Entidade que receberá a mensagem.
	 * @param {*} message - Mensagem que será enviada.
	 * @param {Number} bubbleId - Balão da mensagem.
	 */
	whisper (to, message, bubbleId) {}
	/**
	 * Entidade olha para o ponto definido.
	 * @param {IScriptReachable} object
	 * @param {Boolean} moveHead = Se a entidade pode mover somente sua cabeça.
	 */
	lookTo (object, moveHead) {}
	/**
	 * Esta entidade olha para outra entidade.
	 * @param {ScriptEntity} entity - Entidade que será o alvo.
	 */
	lookTo (entity) {}
	/**
	 * Entidade olha para o ponto definido.
	 * @param {Number} x - Posição X que entidade irá olhar.
	 * @param {Number} y - Posição Y que entidade irá olhar.
	 * @param {Boolean=} moveHead - Se a entidade pode mover somente sua cabeça.
	 */
	lookTo (x, y, moveHead) {}
	/**
	 * Teletransporta a entidade para posição fornecida.
	 * @param {Number} x - Posição X em que entidade seŕa levada.
	 * @param {Number} y - Posição Y em que entidade seŕa levada.
	 * @param {Number} z - Posição Z em que entidade seŕa levada.
	 * @param {Number=} r - Rotação definida para a entidade.
	 */
	teleport (x, y, z, r) {}
	/**
	 * Teletransporta a entidade para posição fornecida no objeto.
	 * @param {IScriptReachable} o
	 */
	teleport (o) {}
	/**
	 * Move a entidade até a posição fornecida no objeto.
	 * @param {IScriptReachable} o
	 */
	walk (o) {}
	/**
	 * Move a entidade até a posição fornecida.
	 * *Entidade só irá se mover caso o caminho esteja livre até o ponto fornecido*
	 * @param {Number} x
	 * @param {Number} y
	 */
	walk (x, y) {}
	/**
	 * Faz com que a entidade pare de andar.
	*/
	cancelWalk()
	/**
	 * Entidade faz uma ação determinada
	 * 1: Acenar
	 * 2: Mandar Beijo
	 * 3: Rir
	 * @param {Number} action - Número da ação
	*/
	action()
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
	 * @param {Number} roomId - ID do quarto alvo.
	 */
	gotoRoom (roomId) {}
	/**
	 * Envia uma notificação para o usuário.
	 * @param {String} icon - Código do icone para a notificação.
	 * @param {String} message - Mensagem pra notificação.
	*/
	notification (icon, message) {}
	/**
	 * Exibe um video para este usuário
	 * @param {String} url - Url do video no Youtube.
	 * @param {Boolean=} force - Se o comando deve forçar a exibição do video, mesmo que o usuário tenha desabilitado.
	 */
	youtube (url, force) {}
}
