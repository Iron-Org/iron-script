import { ScriptEntity, ScriptFurni } from './types';

/**
 * Gerenciador de placares. 
 * Adiciona e Remove pontos nos placares
 * @category Classes
 * @author Arthur L
 * @author Gabriel T
 */
declare namespace Highscores {
	/**
	 * Adiciona pontos ao Placar
	 * @param {string | ScriptEntity} player - Nick ou Usuário que receberá os pontos.
	 * @param {number} points - Quantidade de pontos a serem adicionados.
	*/
	function add (player: string | ScriptEntity, points: number): void

	/**
	 * Remove pontos do Placar
	 * @param {string | ScriptEntity} player - Nick ou Usuário que perderá os pontos.
	 * @param {number} points - Quantidade de pontos a serem removidos.
	*/
	function remove (player: string | ScriptEntity, points: number): void

	/**
	 * Adiciona pontos a todo o Grupo no Placar
	 * @param {string[] | ScriptEntity[]} player - Nicks ou Usuários que receberam os pontos.
	 * @param {number} points - Quantidade de pontos a serem adicionados.
	*/
	function addGroup (player: string[] | ScriptEntity[], points: number): void

	/**
	 * Remove pontos de todo o Grupo no Placar
	 * @param {string | ScriptEntity} player - Nicks ou Usuários que perderam os pontos.
	 * @param {number} points - Quantidade de pontos a serem removidos.
	*/
	function removeGroup (player: string | ScriptEntity, points: number): void

	/**
	 * Limpa todos os usuários do Placar
	*/
	function clear (): void

	/**
	 * Limpa todos os usuários do Placar
	*/
	function reset (): void
}
