/// <reference path="IReachableObject.js"/>

/**
 * This class represents room furnis
 * @class
 * @hideconstructor
 * @implements {IReachableObject}
 */
class ScriptFurni {
    /**
     * @returns {number}
     */
    getId() {}
    /**
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} rot
     */
    move(x, y, z, rot) {}
    /**
     * @returns {boolean}
     */
    hasEntities() {}
    /**
     */
    hide() {}
    /**
     * @returns {number}
     */
    getTypeId() {}
    /**
     * @returns {number}
     */
    getY() {}
    /**
     */
    toggleState() {}
    /**
     */
    show() {}
    /**
     * @returns {number}
     */
    getZ() {}
    /**
     * @returns {number}
     */
    getX() {}
    /**
     * @param {*} value
     */
    setState(value) {}
    /**
     * @returns {Object[]}
     */
    getEntities() {}
}