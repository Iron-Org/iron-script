/// <reference path="types/ScriptEntity.js"/>
/// <reference path="types/ScriptFurni.js"/>

/**
 * Gerenciador de placares.
 * Adiciona e Remove pontos nos placares
 * @namespace Highscores
 * @author Arthur L
 * @author Gabriel T
 */
const Highscores = {
	/**
	 * Adiciona pontos ao Placar
	 * @param {String | ScriptEntity} player - Nick ou Usuário que receberá os pontos.
	 * @param {Number} points - Quantidade de pontos a serem adicionados.
	*/
	add (player, points) {},
	/**
	 * Remove pontos do Placar
	 * @param {String | ScriptEntity} player - Nick ou Usuário que perderá os pontos.
	 * @param {Number} points - Quantidade de pontos a serem removidos.
	*/
	remove (player, points) {},
	/**
	 * Adiciona pontos a todo o Grupo no Placar
	 * @param {String[] | ScriptEntity[]} player - Nicks ou Usuários que receberam os pontos.
	 * @param {Number} points - Quantidade de pontos a serem adicionados.
	*/
	addGroup (player, points) {},
	/**
	 * Remove pontos de todo o Grupo no Placar
	 * @param {String | ScriptEntity} player - Nicks ou Usuários que perderam os pontos.
	 * @param {Number} points - Quantidade de pontos a serem removidos.
	*/
	removeGroup (player, points) {},
	/**
	 * Limpa todos os usuários do Placar
	 * @param {Number | ScriptFurni} scoreboard - ID ou Furni do Placar.
	*/
	clear (scoreboard) {},
	/**
	 * Limpa todos os usuários do Placar
	 * @param {Number | ScriptFurni} scoreboard - ID ou Furni do Placar.
	*/
	reset (scoreboard) {}
}
