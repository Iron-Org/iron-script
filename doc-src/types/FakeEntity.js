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
     * @returns {boolean}
     */
    in(obj) {}
    /**
     * Retorna ID da FakeEntity
     * @returns {number}
     */
    getId() {}
    /**
     * Move a entidade até a posição fornecida.
     * Entidade só irá se mover caso o caminho esteja livre até o ponto fornecido*
     * @param {number} x
     * @param {number} y
     */
    walk(x, y) {}
    /**
     * Teletransporta a entidade para posição fornecida.
     * @param {number} x - Posição X em que entidade seŕa levada.
     * @param {number} y - Posição Y em que entidade seŕa levada.
     * @param {number} z - Posição Z em que entidade seŕa levada.
     * @param {number=} r - Rotação definida para a entidade.
     */
    teleport(x, y, z, r) {}
    /**
     * Teletransporta a entidade para posição fornecida no objeto.
     * @param {IScriptReachable} object
     */
    teleport(object) {}
    /**
     * Retorna o código do atual item de mão que a entidade está segurando.
     * @returns {number}
     */
    getHandItem() {}
    /**
     * Define uma dança para a entidade.
     * 0: Parado.
     * 1: Hap-Hop
     * 2: Pogo-Mogo
     * 3: Duck Funk
     * 4: Rollie
     * @param {number} danceId
     */
    setDance(danceId) {}
    /**
     * Remove o item de mão da entidade.
     */
    removeHandItem() {}
    /**
     * @deprecated
     * @param {ScriptFurni} furni
     */
    walkToFurni(furni) {}
    /**
     * @todo Esta função ainda não foi implementada.
     * @param {IScriptReachable} object
     */
    walk(object) {}
    /**
     * Define um efeito a entidade.
     * @param {number} e - Código do efeito.
     */
    setEffect(e) {}
    /**
     * Define um item de mão para entidade segurar.
     * {@link https://habbo.fandom.com/wiki/Hand_Items}
     * @param {number} h - Código do item de mão.
     */
    setHandItem(h) {}
    /**
     * Faz a entidade dizer uma mensagem.
     * @param {*} message - Mensagem que será dita pela entidade.
     * @param {boolean=} shout - Se o personagem deve gritar a mensagem. (Mensagem em Bold)
     * @param {number=} bubbleId - Balão da mensagem
     */
    say(message, shout, bubbleId) {}
    /**
     * Retorna se a entidade está se movendo.
     * @returns {boolean}
     */
    isWalking() {}
    /**
     * Remove efeito (:enable 0)
     */
    removeEffect() {}
    /**
     * Retorna a atual dança da entidade.
     * @returns {number}
     */
    getDance() {}
    /**
    * Retorna o código do efeito atual da entidade.
     * @returns {number}
     */
    getEffect() {}
    /**
     * Faz a entidade sentar
     */
    sit() {}
    /**
     * Retorna a posição x atual da FakeEntity.
     * @returns {number}
     */
    getX() {}
    /**
     * Retorna a posição Z atual da FakeEntity.
     * @returns {number}
     */
    getZ() {}
    /**
     * Retorna a posição Y atual da FakeEntity.
     * @returns {number}
     */
    getY() {}
    /**
     * Retorna se entidade está próxima (tocando) a posição fornecida.
     * @param {IScriptReachable} e
     * @returns {boolean}
     */
    touching(e) {}
    /**
     * Entidade olha para o ponto definido.
     * @param {number} x - Posição X que entidade irá olhar.
     * @param {number} y - Posição Y que entidade irá olhar.
     * @param {boolean=} moveHead - Se a entidade pode mover somente sua cabeça.
     */
    lookTo(x, y, moveHead) {}
    /**
     * Entidade olha para o ponto definido.
     * @param {IScriptReachable} r
     */
    lookTo(r) {}
    /**
     * Retorna a distancia atual entre esta entidade e a posição fornecida.
     * @param {IScriptReachable} e
     * @returns {number}
     */
    distanceTo(e) {}
    /**
     * Faz a entidade levantar
     */
    std() {}
    /**
     * Faz a entidade deitar
     */
    lay() {}
    /**
     * Retorna a rotação atual do FakeEntity.
     * @returns {number}
     */
    getR() {}
    /**
     * Retorna o código do atual visual da entidade.
     * @returns {string}
     */
    getFigure() {}
    /**
     * Define nova missão na entidade
     * @param {*} motto - Missão que será definida.
     */
    setMotto(motto) {}
    /**
     * Retorna se entidade é um FakeBot.
     * @returns {boolean}
     */
    isBot() {}
    /**
     * Define o visual da entidade
     * @param {string} gender - Gênero do visual.
     * @param {string} figure - Código do visual.
     */
    setFigure(gender, figure) {}
    /**
     * Sussura uma mensagem para outra entendide.
     * @param {ScriptEntity} to - Entidade que receberá a mensagem.
     * @param {*} message - Mensagem que será enviada.
     * @param {number} bubbleId - Balão da mensagem.
     */
    whisper(to, message, bubbleId) {}
    /**
     * Retorna username atual da entidade
     * @returns {string}
     */
    getUsername() {}
    /**
     * Define nome para a entidade
     * @param {*} username - Nome que será definido.
     */
    setUsername(username) {}
    /**
     * Retorna missão atual da entidade
     * @returns {string}
     */
    getMotto() {}
}

