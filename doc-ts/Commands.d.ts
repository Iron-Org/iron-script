type CommandCallback = (entity: ScriptEntity, text:String) => Any;
/**
 * Constante responsável por gerenciar os comandos.
 * @author Arthur L
 * @author Gabriel T
 */
interface Commands {
	/**
	 * Registra o comandos
	 * @example
	 * Commands.register(':comando', true, (entity, text) => {
	 *      //Comando é executado!
	 * })
	 * 
	 * @param {String} text - Comando a ser utilizado.
	 * @param {CommandCallback} callback - Callback executado ao comando ser utilizado.
	*/
	public register (text:String, needStartText:Boolean, callback:CommandCallback) : void

	/**
	 * Registra o comandos
	 * @example
	 * Commands.register(':comando', (entity, text) => {
	 *      //Comando é executado!
	 * })
	 * 
	 * @param {String} text - Comando a ser utilizado.
	 * @param {CommandCallback} callback - Callback executado ao comando ser utilizado.
	*/
	public register (text:String, callback:CommandCallback) : void
}
declare const Commands : Commands;