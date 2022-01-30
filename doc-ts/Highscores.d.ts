/**
 * Gerenciador de placares.
 * Adiciona e Remove pontos nos placares
 * @namespace Highscores
 * @author Arthur L
 * @author Gabriel T
 */
interface Highscores {
	/**
	 * Adiciona pontos ao Placar
	 * @param {String | ScriptEntity} player - Nick ou Usuário que receberá os pontos.
	 * @param {Number} points - Quantidade de pontos a serem adicionados.
	*/
	public add (player: String | ScriptEntity, points: Number): void
	/**
	 * Remove pontos do Placar
	 * @param {String | ScriptEntity} player - Nick ou Usuário que perderá os pontos.
	 * @param {Number} points - Quantidade de pontos a serem removidos.
	*/
	public remove (player: String | ScriptEntity, points: Number): void
	/**
	 * Adiciona pontos a todo o Grupo no Placar
	 * @param {String[] | ScriptEntity[]} player - Nicks ou Usuários que receberam os pontos.
	 * @param {Number} points - Quantidade de pontos a serem adicionados.
	*/
	public addGroup (player: String[] | ScriptEntity[], points: Number): void
	/**
	 * Remove pontos de todo o Grupo no Placar
	 * @param {String | ScriptEntity} player - Nicks ou Usuários que perderam os pontos.
	 * @param {Number} points - Quantidade de pontos a serem removidos.
	*/
	public removeGroup (player: String | ScriptEntity, points: Number): void
	/**
	 * Limpa todos os usuários do Placar
	 * @param {Number | ScriptFurni} scoreboard - ID ou Furni do Placar.
	*/
	public clear (scoreboard: Number | ScriptFurni): void
	/**
	 * Limpa todos os usuários do Placar
	 * @param {Number | ScriptFurni} scoreboard - ID ou Furni do Placar.
	*/
	public reset (scoreboard: Number | ScriptFurni): void
}

declare const Highscores : Highscores