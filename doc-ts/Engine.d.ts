/**
 * Constante responsável por gerenciar os logs/debugs e inclusão de scripts.
 * @namespace Engine
 * @author Arthur L
 * @author Gabriel T
 */
interface Engine {

	/**
	 * TODO:: ESCREVER DESCRIÇÃO
	 * @param scriptName - Nome do script
	 */
	public include(scriptName:String):void

	/**
	 * Envia mensagem de debug para todos os usuários do quarto.
	 * @example
	 * Engine.d('Text')
	 * @param {*} object Conteúdo
	 */
	public d (object:Any):void 

	/** 
	 * Envia mensagem de debug para todos os usuários do quarto.
	 * @todo Esta função ainda não foi implementada.
	 * @param {*} object Conteúdo
	*/
	public debug (object:Any) :void
	
	/**
	 * Registra uma mensagem no log do quarto. (*:script log*)
	 * @todo Esta função ainda não foi implementada.
	 * @param {*} object Conteúdo
	*/
	public log (object:Any) : void 

	/**
	 * Registra uma mensagem no log do quarto. (*:script log*)
	 * @example
	 * Engine.e('Text')
	 * @param {*} object Conteúdo
	 */
	public e (object:Any):void 
}

declare const Engine : Engine