/**
 * Todos os eventos chamados no Script
 * @namespace Events
 * @author Arthur L
 * @author Gabriel T
 */
 interface Events {
	/**
	 * Registra o evento
		* - userJoin
		* - userLeave
		* - stepOn
		* - stepOff
		* - say
		* - interact
		* - tick
		* - load
		* - dispose
		* - playerSelected
	 * @example
	 * Events.on('load', () => {
	 *      //Ação é executada
	 * })
	 * 
	 * @param {String} text - Evento a ser utilizado.
	 * @param {Commands~CommandCallback} callback - Callback executado ao comando ser utilizado.
	*/
	public on (eventName: String, callback: CommandCallback): void,
}

declare const Events : Events