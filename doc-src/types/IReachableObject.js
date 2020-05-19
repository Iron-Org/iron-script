/**
 * Interface for any positionable object in room
 * @interface
 */
class IReachableObject {
    /**
     * Get object X
     * @readonly
     * @returns {number} x
     */
    getX(){}
    /**
     * Get object Y
     * @readonly
     * @returns {number} y
     */
    getY(){}
    /**
     * Get object Z
     * @readonly
     * @returns {number} z     
    */
    getZ(){}
}