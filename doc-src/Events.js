/**
 * Evento chamado ao carregar o quarto.
 * @event
 */
const onLoad = () => {}

/**
 * Evento chamado ao descarregar o quarto.
 * @event
 */
const onDispose = () => {}

/**
 * Evento chamado sempre que um usuário entra no quarto.
 * @event
 * @param {ScriptEntity} user - Usuário que entrou no quarto.
 */
const onUserJoin = (user) => {}

/**
 * Evento chamado sempre que um usuário sai do quarto.
 * @event
 * @param {number} id - ID do usuário.
 * @param {string} username - Nome do usuário.
 */
const onUserLeave = (id, username) => {}

/**
 * Evento chamado sempre que um usuário pisar em um mobilia.
 * @event
 * @param {ScriptEntity} entity - Entidade que pisou na mobilia.
 * @param {ScriptFurni} furni - Mobilia em que a entidade pisou.
*/
const onStepOn = (entity, furni) => {}

/**
 * Evento chamado sempre que um usuário sair de uma mobilia.
 * @event
 * @param {ScriptEntity} entity - Entidade que saiu de cima da mobilia.
 * @param {ScriptFurni} furni - Mobilia em que a entidade saiu.
*/
const onStepOff = (entity, furni) => {}

/**
 * Evento chamado sempre que uma mensagem é enviada no quarto.
 * @event
 * @param {ScriptEntity} user - Usuário que enviou a mensagem.
 * @param {String} message - Mensagem que foi enviada. 
*/
const onSay = (user, message) => {}

/**
 * Evento chamado sempre que um usuário interage com uma mobilia.
 * @event
 * @param {ScriptEntity} user - Usuário que interagiu com a mobilia.
 * @param {ScriptFurni} furni - Mobilia que foi interagida.
 * @param {boolean} isClose - 
 */
const onInteract = (user, furni, isClose) => {}

/**
 * Evento chamado a cada tick. (500ms)
 * @event
 */
const onTick = () => {}
