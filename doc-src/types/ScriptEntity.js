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
     * Retorna se esta entidade é igual a entidade fornecida.
     * @param {ScriptEntity} entity - Entidade que será comparada.
     * @returns {boolean}
     */
    equals(entity) {}
    /**
     * Retorna se esta entidade está sobre a mobilia fornecida.
     * @param {IScriptReachable} object
     * @returns {boolean}
     */
    in(object) {}
    /**
     * Retorna o ID da entidade.
     * @returns {number}
     */
    getId() {}
    /**
     * Envia uma mensagem que aparecerá somente para está entidade.
     * @param {string} message - Mensagem a ser enviada.
     * @param {number=} bubble - Balão da mensagem.
     */
    message(message, bubble) {}
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
     * @param {IScriptReachable} o
     */
    teleport(o) {}
    /**
     * Retorna se entidade está próxima (tocando) a posição fornecida.
     * @param {number} x - Posição X a ser comparada.
     * @param {number} y - Posição Y a ser comparada.
     * @param {number} z - Posição Z a ser comparada.
     * @returns {boolean}
     */
    touching(x, y, z) {}
    /**
     * Retorna se entidade está próxima (tocando) a posição fornecida pelo objeto.
     * @param {IScriptReachable} e
     * @returns {boolean}
     */
    touching(e) {}
    /**
     * Retorna se a entidade é um Pet.
     * @returns {boolean}
     */
    isPet() {}
    /**
     * Retorna a atual dança da entidade.
     * @returns {number}
     */
    getDance() {}
    /**
     * Retorna o nome da Entidade atual.
     * @returns {string}
     */
    getUsername() {}
    /**
     * Define um novo nome ao Bot.
     * *Restrito a BOTs*
     * @param {string} username - Nome que será definido ao Bot.
     */
    setUsername(username) {}
    /**
     * Expulsa a entidade do quarto.
     */
    kick() {}
    /**
     * Move a entidade até a posição fornecida no objeto.
     * @param {IScriptReachable} o
     */
    walk(o) {}
    /**
     * Move a entidade até a posição fornecida.
     * *Entidade só irá se mover caso o caminho esteja livre até o ponto fornecido*
     * @param {number} x
     * @param {number} y
     */
    walk(x, y) {}
    /**
     * Sussura uma mensagem para outra entendide.
     * @param {ScriptEntity} to - Entidade que receberá a mensagem.
     * @param {*} message - Mensagem que será enviada.
     * @param {number} bubbleId - Balão da mensagem.
     */
    whisper(to, message, bubbleId) {}
    /**
     * Define o visual para entidade.
     * *Não aplicável a Pets*
     * @param {string} gender - Gênero do visual.
     * @param {string} figure - Código do visual.
     */
    setFigure(gender, figure) {}
    /**
     * Retorna se a entidade pode se mover.
     * @returns {boolean}
     */
    canWalk() {}
    /**
     * Retorna se a entidade está se movendo.
     * @returns {boolean}
     */
    isWalking() {}
    /**
     * Retorna a missão da entidade.
     * @returns {string}
     */
    getMotto() {}
    /**
     * Envia um emblema a entidade.
     * *Restrito a usuários.*
     * @param {string} badge
     */
    giveBadge(badge) {}
    /**
     * Retorna o código do atual item de mão que a entidade está segurando.
     * @returns {number}
     */
    getHandItem() {}
    /**
     * Define um item de mão para entidade segurar.
     * {@link https://habbo.fandom.com/wiki/Hand_Items}
     * @param {number} h - Código do item de mão.
     */
    setHandItem(h) {}
    /**
     * Retorna a distancia entre a entidade e outra posição fornecida no objeto.
     * @param {IScriptReachable} e - 
     * @returns {number}
     */
    distanceTo(e) {}
    /**
     * Retorna a distancia atual entre esta entidade e a posição fornecida.
     * @param {number} x - Posição X a ser comparada.
     * @param {number} y - Posição Y a ser comparada.
     * @param {number} z - Posição Z a ser comparada.
     * @returns {number}
     */
    distanceTo(x, y, z) {}
    /**
     * Retorna o código do atual visual da entidade.
     * *Não aplicável a Pets*
     * @returns {string}
     */
    getFigure() {}
    /**
     * Retorna a posição X atual da entidade.
     * @returns {number}
     */
    getX() {}
    /**
     * Retorna a posição Y atual da entidade.
     * @returns {number}
     */
    getY() {}
    /**
     * Retorna se entidade é um Bot.
     * @returns {boolean}
     */
    isBot() {}
    /**
     * Retorna o código do efeito atual da entidade.
     * @returns {number}
     */
    getEffect() {}
    /**
     * Define uma dança para a entidade.
     * 0: Parado.
     * 1: Hap-Hop
     * 2: Pogo-Mogo
     * 3: Duck Funk
     * 4: Rollie
     * @param {number} danceId - Código da dança
     */
    setDance(danceId) {}
    /**
     * Retorna se a entidade está em alguma das mobilias fornecidas.
     * @param {IScriptReachable[]} furnis - Lista de mobilias a serem comparadas.
     * @returns {boolean}
     */
    inAny(furnis) {}
    /**
     * Define uma missão a entidade.
     * @param {*} motto - Missão que será definida na entidade.
     */
    setMotto(motto) {}
    /**
     * Entidade olha para o ponto definido.
     * @param {IScriptReachable} object
     * @param {boolean} moveHead = Se a entidade pode mover somente sua cabeça.
     */
    lookTo(object, moveHead) {}
    /**
     * Esta entidade olha para outra entidade.
     * @param {ScriptEntity} entity - Entidade que será o alvo.
     */
    lookTo(entity) {}
    /**
     * Entidade olha para o ponto definido.
     * @param {number} x - Posição X que entidade irá olhar.
     * @param {number} y - Posição Y que entidade irá olhar.
     * @param {boolean=} moveHead - Se a entidade pode mover somente sua cabeça.
     */
    lookTo(x, y, moveHead) {}
    /**
     * Remove o efeito da entidade.
     */
    removeEffect() {}
    /**
     * Retorna a atual posição Z da entidade.
     * @returns {number}
     */
    getZ() {}
    /**
     * Define a entidade pode ser mover.
     * @param {boolean} can - Se a entidade pode ser mover.
     * @param {boolean} effect - Se a entidade deve receber um efeito de congelado.
     */
    setCanWalk(can, effect) {}
    /**
     * Faz a entidade dizer uma mensagem.
     * @param {*} message - Mensagem que será dita pela entidade.
     * @param {boolean=} shout - Se o personagem deve gritar a mensagem. (Mensagem em Bold)
     * @param {number=} bubbleId - Balão da mensagem
     */
    say(message, shout, bubbleId) {}
    /**
     * Retorna se entidade possui o rank fornecido ou um maior.
     * @param {number} rank - Valor do rank a ser comparado.
     * @returns {boolean}
     */
    hasRank(rank) {}
    /**
     * Faz a entidade deitar.
     */
    lay() {}
    /**
     * Faz a entidade sentar.
     */
    sit() {}
    /**
     * Retorna a atual rotação da entidade.
     * @returns {number}
     */
    getR() {}
    /**
     * Remove um emblema de um usuário.
     * @param {string} badge - Código do emblema.
     */
    removeBadge(badge) {}
    /**
     * Remove o item de mão da entidade.
     */
    removeHandItem() {}
    /**
     * Leva a entidade para outro quarto.
     * *Entidade será levada mesmo que haja campanhia/senha*
     * @param {number} roomId - ID do quarto alvo.
     */
    gotoRoom(roomId) {}
    /**
     * Retorna se a entidade é um usuário.
     * @returns {boolean}
     */
    isPlayer() {}
    /**
     * Define um efeito a entidade.
     * @param {number} effect - Código do efeito.
     */
    setEffect(effect) {}
    /**
     * Envia uma notificação para o usuário.
     * generic: Icone genérico.
     * EV - Icone de eventos/games.
     * ATT - Icone de atenção.
     > NEW - Icone de nova mobilia.
     * RAD - Icone da Rádio.
     * @param {string} icon - Código do icone para a notificação.
     * @param {string} message - Mensagem pra notificação.
     */
    notification(icon, message) {}
    /**
     * Faz a entidade se levantar.
     */
    std() {}
}
