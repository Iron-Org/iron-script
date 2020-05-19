/// <reference path="IReachableObject.js"/>

/**
 * This class represents fake entities
 * @class
 * @hideconstructor
 * @implements {IReachableObject}
 */
class FakeEntity {
    /**
     * @param {IReachableObject} obj
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
     * @param {IReachableObject} object
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
     * @param {ScriptFurni} furni
     */
    walkToFurni(furni) {}
    /**
     * @param {number} e
     */
    setEffect(e) {}
    /**
     * @param {number} h
     */
    setHandItem(h) {}
    /**
     * @param {string} message
     * @param {boolean} shout
     * @param {number} bubbleId
     */
    say(message, shout, bubbleId) {}
    /**
     * @param {string} message
     * @param {boolean} shout
     */
    say(message, shout) {}
    /**
     * @param {string} message
     */
    say(message) {}
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
     * @param {IReachableObject} e
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
     * @param {IReachableObject} r
     */
    lookTo(r) {}
    /**
     * @param {IReachableObject} e
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