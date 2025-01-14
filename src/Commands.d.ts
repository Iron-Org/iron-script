import { ScriptEntity } from './types/index';

/**
 * Callback de execução de comandos.
 * @category Tipos
 * @param {ScriptEntity} user - Usuário que executou o comando.
 * @param {string} message - Mensagem enviada pelo usuário.
 */
type CommandCallback = (user: ScriptEntity, message: string) => void;

/**
 * Constante responsável por gerenciar os comandos.
 * @category Classes
 * @author Arthur L
 * @author Gabriel T
 */
declare namespace Commands {
  /**
   * Registra um comando.
   * @example
   * Commands.register(':comando', true, (entity, text) => {
   *      // Comando é executado!
   * });
   *
   * @param {string} text - Comando a ser utilizado.
   * @param {boolean} needStartText - Define se a mensagem deverá ser iniciada com o comando.
   * @param {CommandCallback} callback - Callback executado ao comando ser utilizado.
   */
  function register(text: string, needStartText: boolean, callback: CommandCallback): void;

  /**
   * Registra um comando.
   * @example
   * Commands.register(':comando', (entity, text) => {
   *      // Comando é executado!
   * });
   *
   * @param {string} text - Comando a ser utilizado.
   * @param {CommandCallback} callback - Callback executado ao comando ser utilizado.
   */
  function register(text: string, callback: CommandCallback): void;
}
