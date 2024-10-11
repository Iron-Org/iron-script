/**
 * Constante responsável por gerenciar os logs/debugs.
 * @category Classes
 * @author Arthur L
 * @author Gabriel T
 */
declare namespace Engine {
	/**
	 * Envia mensagem de debug para todos os usuários do quarto.
	 * @example
	 * Engine.d('Text')
	 * @param {*} object Conteúdo
	 */
	function d (object: any): void

	/** 
	 * Envia mensagem de debug para todos os usuários do quarto.
	 * @param {*} object Conteúdo
	*/
	function debug (object: any): void

	/**
	 * Registra uma mensagem no log do quarto. (*:script log*)
	 * @param {*} object Conteúdo
	*/
	function log (object: any): void

	/**
	 * Registra uma mensagem no log do quarto. (*:script log*)
	 * @example
	 * Engine.e('Text')
	 * @param {*} object Conteúdo
	 */
	function e (object: any): void

	/**
	 * Limpa o registro de mensagens no log do quarto. (*:script log*)
	 */
	function clearLog (): void
}
