/**
 * Classe que representa os dados de uma Badge.
 * @hideconstructor
 * @category Tipos
 * @author Gabriel T
 */
declare class ScriptBadge {
  /**
	 * Retorna o código do emblema
	 */
	getCode (): string

  /**
	 * Retorna o titulo do emblema
	 */
	getTitle (): string

  /**
	 * Retorna a descrição do emblema
	 */
	getDescription (): string

  /**
	 * Retorna a timestamp do emblema
	 */
	getTimestamp (): string

  /**
	 * Retorna a quantidade de usuários que possui o emblema
	 */
	getPlayerCount (): number

  /**
	 * Retorna os ids dos usuários que possui o emblema
	 */
	getPlayers (): number[]
}

export { ScriptBadge };
