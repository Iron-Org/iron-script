/// <reference path="IScriptReachable.js"/>

/**
 * Classe que representa mobilias Fakes.
 * @class
 * @hideconstructor
 * @implements {IScriptReachable}
 */
class FakeFloorItem {
    /**
     * @returns {number}
     */
    getId() {}
    /**
     * @returns {string}
     */
    getState() {}
    /**
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    move(x, y, z) {}
    /**
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} r
     */
    move(x, y, z, r) {}
    /**
     * @param {*} extradata
     */
    setState(extradata) {}
    /**
     * @param {number} height
     */
    setWalkHeight(height) {}
    /**
     * @returns {number}
     */
    getWalkHeight() {}
    /**
     * @returns {number}
     */
    getZ() {}
    /**
     * @returns {number}
     */
    getX() {}
    /**
     * @returns {number}
     */
    getY() {}

}