/// <reference path="IReachableObject.js"/>

/**
 * This class represents room entities
 * @class
 * @hideconstructor
 * @implements {IReachableObject}
 */
class ScriptEntity {

    /**
     * @type 
     * @param {ScriptEntity} entity
     * @returns {boolean}
     */
    equals(entity) {}
    /**
     * @param {IReachableObject} object
     * @returns {boolean}
     */
    in(object) {}
    /**
     * @returns {number}
     */
    getId() {}
    /**
     * @param {string} message
     * @param {number} bubble
     */
    message(message, bubble) {}
    /**
     * @param {string} message
     */
    message(message) {}
    /**
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} r
     */
    teleport(x, y, z, r) {}
    /**
     * @param {IReachableObject} o
     */
    teleport(o) {}
    /**
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    teleport(x, y, z) {}
    /**
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @returns {boolean}
     */
    touching(x, y, z) {}
    /**
     * @param {IReachableObject} e
     * @returns {boolean}
     */
    touching(e) {}
    /**
     * @returns {boolean}
     */
    isPet() {}
    /**
     * @returns {number}
     */
    getDance() {}
    /**
     * @returns {string}
     */
    getUsername() {}
    /**
     * @param {string} username
     */
    setUsername(username) {}
    /**
     */
    kick() {}
    /**
     * @param {IReachableObject} o
     */
    walk(o) {}
    /**
     * @param {number} x
     * @param {number} y
     */
    walk(x, y) {}
    /**
     * @param {ScriptEntity} to
     * @param {*} message
     * @param {number} bubbleId
     */
    whisper(to, message, bubbleId) {}
    /**
     * @param {string} gender
     * @param {string} figure
     */
    setFigure(gender, figure) {}
    /**
     * @returns {boolean}
     */
    canWalk() {}
    /**
     * @returns {boolean}
     */
    isWalking() {}
    /**
     * @returns {string}
     */
    getMotto() {}
    /**
     * @param {string} badge
     */
    giveBadge(badge) {}
    /**
     * @returns {number}
     */
    getHandItem() {}
    /**
     * @param {number} h
     */
    setHandItem(h) {}
    /**
     * @param {IReachableObject} e
     * @returns {number}
     */
    distanceTo(e) {}
    /**
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @returns {number}
     */
    distanceTo(x, y, z) {}
    /**
     * @returns {string}
     */
    getFigure() {}
    /**
     * @returns {number}
     */
    getX() {}
    /**
     * @returns {number}
     */
    getY() {}
    /**
     * @returns {boolean}
     */
    isBot() {}
    /**
     * @returns {number}
     */
    getEffect() {}
    /**
     * @param {number} danceId
     */
    setDance(danceId) {}
    /**
     * @param {IReachableObject[]} furnis
     * @returns {boolean}
     */
    inAny(furnis) {}
    /**
     * @param {*} motto
     */
    setMotto(motto) {}
    /**
     * @param {IReachableObject} object
     * @param {boolean} moveHead
     */
    lookTo(object, moveHead) {}
    /**
     * @param {ScriptEntity} entity
     */
    lookTo(entity) {}
    /**
     * @param {number} x
     * @param {number} y
     */
    lookTo(x, y) {}
    /**
     * @param {number} x
     * @param {number} y
     * @param {boolean} moveHead
     */
    lookTo(x, y, moveHead) {}
    /**
     */
    removeEffect() {}
    /**
     * @returns {number}
     */
    getZ() {}
    /**
     * @param {boolean} can
     * @param {boolean} effect
     */
    setCanWalk(can, effect) {}
    /**
     * @param {boolean} can
     */
    setCanWalk(can) {}
    /**
     * @param {*} message
     * @param {boolean} shout
     */
    say(message, shout) {}
    /**
     * @param {*} message
     * @param {boolean} shout
     * @param {number} bubbleId
     */
    say(message, shout, bubbleId) {}
    /**
     * @param {*} message
     */
    say(message) {}
    /**
     * @param {number} id
     * @returns {boolean}
     */
    hasRank(id) {}
    /**
     */
    lay() {}
    /**
     */
    sit() {}
    /**
     * @returns {number}
     */
    getR() {}
    /**
     * @param {string} badge
     */
    removeBadge(badge) {}
    /**
     */
    removeHandItem() {}
    /**
     * @param {number} roomId
     */
    gotoRoom(roomId) {}
    /**
     * @returns {boolean}
     */
    isPlayer() {}
    /**
     * @param {number} e
     */
    setEffect(e) {}
    /**
     * @param {string} icon
     * @param {string} message
     */
    notification(icon, message) {}
    /**
     */
    std() {}

}
