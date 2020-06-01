/// <reference path="IScriptReachable.js"/>

/**
 * Classe que representa as entidades Fakes.
 * @class
 * @hideconstructor
 * @implements {IScriptReachable}
 * @author Arthur L
 * @author Gabriel T
 */
class FakeEntity {
	/**
	 * Retorna se esta entidade está sobre a mobilia fornecida.
	 * @param {IScriptReachable} obj
	 * @returns {Boolean}
	 */
	in (obj) {}
	/**
	 * Retorna ID da FakeEntity
	 * @returns {Number}
	 */
	getId () {}
	/**
	 * Move a entidade até a posição fornecida.
	 * Entidade só irá se mover caso o caminho esteja livre até o ponto fornecido*
	 * @param {Number} x
	 * @param {Number} y
	 */
	walk (x, y) {}
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
	 * @param {IScriptReachable} object
	 */
	teleport (object) {}
	/**
	 * Retorna o código do atual item de mão que a entidade está segurando.
	 * @returns {Number}
	 */
	getHandItem () {}
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
	 * Remove o item de mão da entidade.
	 */
	removeHandItem () {}
	/**
	 * @deprecated
	 * @param {ScriptFurni} furni
	 */
	walkToFurni (furni) {}
	/**
	 * @todo Esta função ainda não foi implementada.
	 * @param {IScriptReachable} object
	 */
	walk (object) {}
	/**
	 * Define um efeito a entidade.
	 * @param {Number} e - Código do efeito.
	 */
	setEffect (e) {}
	/**
	 * Define um item de mão para entidade segurar.
	 * {@link https://habbo.fandom.com/wiki/Hand_Items}
	 * @param {Number} h - Código do item de mão.
	 */
	setHandItem (h) {}
	/**
	 * Faz a entidade dizer uma mensagem.
	 * @param {*} message - Mensagem que será dita pela entidade.
	 * @param {Boolean=} shout - Se o personagem deve gritar a mensagem. (Mensagem em Bold)
	 * @param {Number=} bubbleId - Balão da mensagem
	 */
	say (message, shout, bubbleId) {}
	/**
	 * Retorna se a entidade está se movendo.
	 * @returns {Boolean}
	 */
	isWalking () {}
	/**
	 * Remove efeito (:enable 0)
	 */
	removeEffect () {}
	/**
	 * Retorna a atual dança da entidade.
	 * @returns {Number}
	 */
	getDance () {}
	/**
	* Retorna o código do efeito atual da entidade.
		* @returns {Number}
		*/
	getEffect () {}
	/**
	 * Faz a entidade sentar
	 */
	sit () {}
	/**
	 * Retorna a posição x atual da FakeEntity.
	 * @returns {Number}
	 */
	getX () {}
	/**
	 * Retorna a posição Z atual da FakeEntity.
	 * @returns {Number}
	 */
	getZ () {}
	/**
	 * Retorna a posição Y atual da FakeEntity.
	 * @returns {Number}
	 */
	getY () {}
	/**
	 * Retorna se entidade está próxima (tocando) a posição fornecida.
	 * @param {IScriptReachable} e
	 * @returns {Boolean}
	 */
	touching (e) {}
	/**
	 * Entidade olha para o ponto definido.
	 * @param {Number} x - Posição X que entidade irá olhar.
	 * @param {Number} y - Posição Y que entidade irá olhar.
	 * @param {Boolean=} moveHead - Se a entidade pode mover somente sua cabeça.
	 */
	lookTo (x, y, moveHead) {}
	/**
	 * Entidade olha para o ponto definido.
	 * @param {IScriptReachable} r
	 */
	lookTo (r) {}
	/**
	 * Retorna a distancia atual entre esta entidade e a posição fornecida.
	 * @param {IScriptReachable} e
	 * @returns {Number}
	 */
	distanceTo (e) {}
	/**
	 * Faz a entidade levantar
	 */
	std () {}
	/**
	 * Faz a entidade deitar
	 */
	lay () {}
	/**
	 * Retorna a rotação atual do FakeEntity.
	 * @returns {Number}
	 */
	getR () {}
	/**
	 * Retorna o código do atual visual da entidade.
	 * @returns {String}
	 */
	getFigure () {}
	/**
	 * Define nova missão na entidade
	 * @param {*} motto - Missão que será definida.
	 */
	setMotto (motto) {}
	/**
	 * Retorna se entidade é um FakeBot.
	 * @returns {Boolean}
	 */
	isBot () {}
	/**
	 * Define o visual da entidade
	 * @param {String} gender - Gênero do visual.
	 * @param {String} figure - Código do visual.
	 */
	setFigure (gender, figure) {}
	/**
	 * Sussura uma mensagem para outra entendide.
	 * @param {ScriptEntity} to - Entidade que receberá a mensagem.
	 * @param {*} message - Mensagem que será enviada.
	 * @param {Number} bubbleId - Balão da mensagem.
	 */
	whisper (to, message, bubbleId) {}
	/**
	 * Retorna username atual da entidade
	 * @returns {String}
	 */
	getUsername () {}
	/**
	 * Define nome para a entidade
	 * @param {*} username - Nome que será definido.
	 */
	setUsername (username) {}
	/**
	 * Retorna missão atual da entidade
	 * @returns {String}
	 */
	getMotto () {}
	/**
	 * Faz com que a entidade pare de andar.
	*/
	cancelWalk()
}
