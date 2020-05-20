/// <reference path="types/ScriptEntity.js"/>
/// <reference path="types/ScriptFurni.js"/>

/**
 * @namespace Room
 */
const Room = {
    /**
     * @returns {String}
     */
    getName: () => {},
    /**
     * @returns {Number}
     */
    getId: () => {},
    /**
     * @param {*} name
     */
    setName: (name) => {},
    /**
     */
    open: () => {},
    /**
     * @param {Number} id
     * @returns {ScriptFurni}
     */
    getFurniById: (id) => {},
    /**
     * @param {Number} x
     * @param {Number} y
     * @returns {ScriptFurni[]}
     */
    getFurniByTile: (x, y) => {},
    /**
     * @param {ScriptFurni[]} furnis
     * @returns {ScriptEntity[]}
     */
    getEntitiesByFurnis: (furnis) => {},
    /**
     * @param {Number} sprite
     * @returns {ScriptFurni[]}
     */
    getAllFurnisBySpriteId: (sprite) => {},
    /**
     * @param {ScriptFurni} furni
     * @returns {ScriptEntity[]}
     */
    getEntitiesByFurni: (furni) => {},
    /**
     * @returns {Number}
     */
    ownerId: () => {},
    /**
     * @param {Boolean} allow
     */
    setWalkThrough: (allow) => {},
    /**
     * @returns {Number}
     */
    userCount: () => {},
    /**
     * @param {Boolean} disabled
     */
    setDiagonal: (disabled) => {},
    /**
     * @returns {String}
     */
    getOwnerUsername: () => {},
    /**
     * @param {String} name
     * @returns {ScriptEntity}
     */
    getPlayerByName: (name) => {},
    /**
     * @param {String} message
     */
    alert: (message) => {},
    /**
     */
    setDoorbell: () => {},
    /**
     * @param {String} icon
     * @param {String} message
     */
    notification: (icon, message) => {},
    /**
     * @param {Boolean} mute
     */
    setRoomMute: (mute) => {},
    /**
     * @param {String} text
     */
    tts: (text) => {},
    /**
     * @param {Number} id
     * @returns {ScriptEntity}
     */
    getPlayerById: (id) => {},
    /**
     * @returns {Boolean}
     */
    getWalkThrough: () => {},
    /**
     * @returns {Boolean}
     */
    getDiagonal: () => {},
    /**
     * @param {String} password
     */
    setPassword: (password) => {},
    /**
     * @returns {Boolean}
     */
    getRoomMute: () => {},
    /**
     * @returns {ScriptEntity[]}
     */
    getAllPlayers: () => {},
    /**
     * @param {String} link
     */
    youtube: (link) => {},
    /**
     * @param {String} name
     * @returns {ScriptEntity}
     */
    getBotByName: (name) => {},
};
