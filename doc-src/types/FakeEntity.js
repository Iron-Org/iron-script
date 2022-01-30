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
	 * Retorna ID da FakeEntity
	 * @returns {Number}
	 */
	getId () {}
	/**
	 * Retorna username atual da entidade
	 * @returns {String}
	 */
	getUsername () {}
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
	 * Retorna missão atual da entidade
	 * @returns {String}
	 */
	getMotto () {}
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
	 * @param {IScriptReachable} e - 
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
	 * Retorna se entidade é um FakeBot.
	 * @returns {Boolean}
	 */
	isBot () {}
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
	 * Retorna se esta entidade está sobre a mobilia fornecida.
	 * @param {IScriptReachable} obj
	 * @returns {Boolean}
	 */
	in (obj) {}
	/**
	 * Retorna se a entidade está se movendo.
	 * @returns {Boolean}
	 */
	isWalking () {}
	/**
	 * Define nome para a entidade
	 * @param {*} username - Nome que será definido.
	 */
	setUsername (username) {}
	/**
	 * Define o visual da entidade
	 * @param {String} gender - Gênero do visual.
	 * @param {String} figure - Código do visual.
	 */
	setFigure (gender, figure) {}
	/**
	 * Define nova missão na entidade
	 * @param {*} motto - Missão que será definida.
	 */
	setMotto (motto) {}
	/**
	 * Define um efeito a entidade.
	 * {@link https://drive.google.com/file/d/1sO22JtEZk_v34d5GUEfXLBriqeGc3Xsf/edit}
	 * @param {Number} e - Código do efeito.
	 */
	setEffect (e) {}
	/**
	 * Define um item de mão para entidade segurar.
	 * {@link https://drive.google.com/file/d/1tcoc7EqhLCjjzC5z8ArYQ1n8fUsjUauN/edit}
	 * @param {Number} h - Código do item de mão.
	 */
	setHandItem (h) {}
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
	 * Remove efeito (:enable 0)
	 */
	removeEffect () {}
	/**
	 * Remove o item de mão da entidade.
	 */
	removeHandItem () {}
	/**
	 * Faz com que a entidade pare de andar.
	 */
	cancelWalk() {}
	/**
	 * Faz a entidade levantar
	 */
	std () {}
	/**
	 * Faz a entidade sentar
	 */
	sit () {}
	/**
	 * Faz a entidade deitar
	 */
	lay () {}
	/**
	 * Entidade faz uma ação determinada
	 * 1: Acenar
	 * 2: Mandar Beijo
	 * 3: Rir
	 * @param {Number} action - Número da ação
	*/
	action() {}
	/**
	 * Move a entidade até a posição fornecida.
	 * Entidade só irá se mover caso o caminho esteja livre até o ponto fornecido*
	 * @param {Number} x
	 * @param {Number} y
	 */
	walk (x, y) {}
	/**
	 * @todo Esta função ainda não foi implementada.
	 * @param {IScriptReachable} object
	 */
	walk (object) {}
	/**
	 * @deprecated
	 * @param {ScriptFurni} furni
	 */
	walkToFurni (furni) {}
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
	 * Faz a entidade dizer uma mensagem.
	 * @param {*} message - Mensagem que será dita pela entidade.
	 * @param {Boolean=} shout - Se o personagem deve gritar a mensagem. (Mensagem em Bold)
	 * @param {Number=} bubbleId - Balão da mensagem
	 */
	say (message, shout, bubbleId) {}
  /**
	 * Sussura uma mensagem para outra entendide.
	 * @param {ScriptEntity} to - Entidade que receberá a mensagem.
	 * @param {*} message - Mensagem que será enviada.
	 * @param {Number} bubbleId - Balão da mensagem.
	 */
	whisper (to, message, bubbleId) {}
}
