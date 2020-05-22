/// <reference path="IScriptReachable.js"/>

/**
 * This class represents fake entities
 * @class
 * @hideconstructor
 * @implements {IScriptReachable}
 */
class FakeEntity {
    /**
     * @param {IScriptReachable} obj
     * @returns {boolean}
     */
    in(obj) {}
    /**
     * @returns {number}
     */
    getId() {}
    /**
     * @param {number} x
     * @param {number} y
     */
    walk(x, y) {}
    /**
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} r
     */
    teleport(x, y, z, r) {}
    /**
     * @param {IScriptReachable} object
     */
    teleport(object) {}
    /**
     * @returns {number}
     */
    getHandItem() {}
    /**
     * @param {number} danceId
     */
    setDance(danceId) {}
    /**
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
     * @param {number} e
     */
    setEffect(e) {}
    /**
     * @param {number} h
     */
    setHandItem(h) {}
    /**
     * @param {String} message
     * @param {Boolean=} shout
     * @param {Number=} bubbleId
     */
    say(message, shout, bubbleId) {}
    /**
     * @returns {boolean}
     */
    isWalking() {}
    /**
     */
    removeEffect() {}
    /**
     * @returns {number}
     */
    getDance() {}
    /**
     * @returns {number}
     */
    getEffect() {}
    /**
     */
    sit() {}
    /**
     * @returns {number}
     */
    getX() {}
    /**
     * @returns {number}
     */
    getZ() {}
    /**
     * @returns {number}
     */
    getY() {}
    /**
     * @param {IScriptReachable} e
     * @returns {boolean}
     */
    touching(e) {}
    /**
     * @param {number} x
     * @param {number} y
     * @param {boolean} moveHead
     */
    lookTo(x, y, moveHead) {}
    /**
     * @param {number} x
     * @param {number} y
     */
    lookTo(x, y) {}
    /**
     * @param {IScriptReachable} r
     */
    lookTo(r) {}
    /**
     * @param {IScriptReachable} e
     * @returns {number}
     */
    distanceTo(e) {}
    /**
     */
    std() {}
    /**
     */
    lay() {}
    /**
     * @returns {number}
     */
    getR() {}
    /**
     * @returns {string}
     */
    getFigure() {}
    /**
     * @param {*} motto
     */
    setMotto(motto) {}
    /**
     * @returns {boolean}
     */
    isBot() {}
    /**
     * @param {string} gender
     * @param {string} figure
     */
    setFigure(gender, figure) {}
    /**
     * @param {ScriptEntity} to
     * @param {string} message
     * @param {number} bubbleId
     */
    whisper(to, message, bubbleId) {}
    /**
     * @returns {string}
     */
    getUsername() {}
    /**
     * @param {*} username
     */
    setUsername(username) {}
    /**
     * @returns {string}
     */
    getMotto() {}
}


new FakeEntity().lookTo(10,10)