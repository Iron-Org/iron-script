import { ScriptEntity } from ".";

/**
 * Classe que representa um chat privado.
 * @category Tipos
 * @hideconstructor
 */
declare class ScriptPrivateChat {
	/**
   * Returna todos os usuários presentes nesse chat privado.
   */
	getUsers (): void

  /**
   * Adiciona um usuário ao chat privado.
   * @param {ScriptEntity} user - Usuário a ser adicionado.
   */
  addUser (user: ScriptEntity): void

  /**
   * Remove um usuário do chat privado.
   * @param {ScriptEntity} user - Usuário a ser removido.
   */
  removeUser (user: ScriptEntity): void

  /**
   * Remove todos os usuários do chat privado.
   */
  removeAll (): void
}

export { ScriptPrivateChat };
