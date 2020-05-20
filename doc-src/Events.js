/**
 * @event
 */
const onLoad = () => {}

/**
 * @event
 */
const onDispose = () => {}

/**
 * @event
 * @param {ScriptEntity} entity 
 */
const onUserJoin = (entity) => {}

/**
 * @event
 * @param {ScriptEntity} entity 
 */
const onUserLeave = (entity) => {}

/**
 * @event
 * @param {ScriptEntity} entity
 * @param {ScriptFurni} furni
*/
const onStepOn = (entity, furni) => {}

/**
 * @event
 * @param {ScriptEntity} entity
 * @param {ScriptFurni} furni
*/
const onStepOff = (entity, furni) => {}

/**
 * @event
 * @param {ScriptEntity} entity
 * @param {String} message
*/
const onSay = (entity, message) => {}

/**
 * @event
 * @param {ScriptEntity} entity
 * @param {ScriptFurni} furni
 */
const onInteract = (entity, furni) => {}

/**
 * @event
 */
const onTick = () => {}
