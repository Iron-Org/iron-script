/// <reference path="types/ScriptEntity.js"/>
/// <reference path="types/ScriptFurni.js"/>
/**
 * @static
 */
const Room = {
    /**
     * @function
     * @returns {string}
     */
    getName: () => {},
    /**
     * @returns {number}
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
     * @param {number} id
     * @returns {ScriptFurni}
     */
    getFurniById: (id) => {},
    /**
     * @param {number} x
     * @param {number} y
     * @returns {Object[]}
     */
    getFurniByTile: (x, y) => {},
    /**
     * @param {ScriptFurni[]} furnis
     * @returns {ScriptFurni[]}
     */
    getEntitiesByFurnis: (furnis) => {},
    /**
     * @param {number} sprite
     * @returns {ScriptFurni[]}
     */
    getAllFurnisBySpriteId: (sprite) => {},
    /**
     * @param {ScriptFurni} furni
     * @returns {ScriptFurni[]}
     */
    getEntitiesByFurni: (furni) => {},
    /**
     * @returns {number}
     */
    ownerId: () => {},
    /**
     * @param {boolean} allow
     */
    setWalkThrough: (allow) => {},
    /**
     * @returns {number}
     */
    userCount: () => {},
    /**
     * @param {boolean} disabled
     */
    setDiagonal: (disabled) => {},
    /**
     * @returns {string}
     */
    getOwnerUsername: () => {},
    /**
     * @param {string} name
     * @returns {ScriptEntity}
     */
    getPlayerByName: (name) => {},
    /**
     * @param {string} message
     */
    alert: (message) => {},
    /**
     */
    setDoorbell: () => {},
    /**
     * @param {string} icon
     * @param {string} message
     */
    notification: (icon, message) => {},
    /**
     * @param {boolean} mute
     */
    setRoomMute: (mute) => {},
    /**
     * @param {string} text
     */
    tts: (text) => {},
    /**
     * @param {number} id
     * @returns {ScriptEntity}
     */
    getPlayerById: (id) => {},
    /**
     * @returns {boolean}
     */
    getWalkThrough: () => {},
    /**
     * @returns {boolean}
     */
    getDiagonal: () => {},
    /**
     * @param {string} password
     */
    setPassword: (password) => {},
    /**
     * @returns {boolean}
     */
    getRoomMute: () => {},
    /**
     * @returns {ScriptEntity[]}
     */
    getAllPlayers: () => {},
    /**
     * @param {string} link
     */
    youtube: (link) => {},
    /**
     * @param {string} name
     * @returns {ScriptEntity}
     */
    getBotByName: (name) => {},
};
