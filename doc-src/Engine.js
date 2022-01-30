/**
 * Constante responsável por gerenciar os logs/debugs.
 * @namespace Engine
 * @author Arthur L
 * @author Gabriel T
 */
const Engine = {
	/**
	 * Inclui um Script externo ao Script do quarto atual.
	 * @param {String} scriptName - Nome do script externo.
	 */
	include(scriptName) {},
	/**
	 * Envia mensagem de debug para todos os usuários do quarto.
	 * @example
	 * Engine.d('Text')
	 * @param {*} object Conteúdo
	 */
	d (object) {},
	/** 
	 * Envia mensagem de debug para todos os usuários do quarto.
	 * @todo Esta função ainda não foi implementada.
	 * @param {*} object Conteúdo
	*/
	debug (object) {},
	/**
	 * Registra uma mensagem no log do quarto. (*:script log*)
	 * @todo Esta função ainda não foi implementada.
	 * @param {*} object Conteúdo
	*/
	log (object) {},
	/**
	 * Registra uma mensagem no log do quarto. (*:script log*)
	 * @example
	 * Engine.e('Text')
	 * @param {*} object Conteúdo
	 */
	e (object) {},
}
