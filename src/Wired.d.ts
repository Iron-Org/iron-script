import { ScriptEntity } from "./types";

/**
 * Classe que representa o Wired SCRIPT.
 * @category Classes
 */
declare namespace Wired {
  /**
   * Recebe eventos dos wired de efeito que possuem o eventName.
   * @param {string} eventName - Nome do evento que está no Efeito.
   * @param {Function} callback - Callback executado ao comando ser utilizado. Caso seja ativado por um usuário, callback recebe o usuário como parametro.
  */
  function on(eventName: string, callback: Function): void

  /**
   * Ativa um wired ativador.
   * @param {string} wiredName
   * @param {ScriptEntity} entity
   */
  function trigger(wiredName: string, entity: ScriptEntity): void

  /**
   * @param {string} name - Nome do bloco de memória.
   * @param {number} value - Valor que será definido no bloco de memória.
   */
  function setMemoryValue(name: string, value: number): void
}
