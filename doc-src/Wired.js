/**
 * Classe que representa o Wired SCRIPT.
 * @namespace Wired
 */
const Wired = {
  /**
   * Recebe eventos dos wired de efeito que possuem o eventName.
   * @param {String} eventName - Nome do evento que está no Efeito.
   * @param {Function} callback - Callback executado ao comando ser utilizado. Caso seja ativado por um usuário, callback recebe o usuário como parametro.
  */
  on (eventName, callback) {},
  /**
   * Ativa um wired ativador.
   * @param {String} wiredName
   * @param {ScriptEntity} entity
   */
  trigger (wiredName, entity) {},
  /**
   * @param {String} name - Nome do bloco de memória.
   * @param {Number} value - Valor que será definido no bloco de memória.
   */
  setMemoryValue (name, value) {},
}
