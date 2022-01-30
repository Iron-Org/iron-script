
/**
 * Aguarda tempos determinados para executar funções.
 * > Cada tick corresponde 500ms.
 * @author Arthur L
 * @author Gabriel T
 */
interface Delay {
	/**
	 * @example
	 * Delay.wait(() => {
	 *  //Executado após 1 segundo de espera.
	 * }, 2)
	 * @param {Function} callback - Função executada após o tempo determinado ter passado.
	 * @param {Number} ticks - Quantidade de ticks a aguardar até a execução da função.
	 * @returns {DelayTask} 
	*/
	public wait (callback:Function, ticks:Number): DelayTask
	/**
	 * Executa uma função no intervalo de tempo.
	 * @example
	 * Delay.interval(() => {
	 *  //Executado a cada 1 segundo.
	 * }, 2)
	 * @param {Function} callback - Função executada sempre que o tempo determinado ter passado.
	 * @param {Number} ticks - Quantidade de ticks a aguardar até a execução da função.
	 * @returns {DelayTask}
	*/
	public interval (callback:Function, ticks:Number): DelayTask
	/**
	 * Cancela o delayScript que for passado.
	 * @example 
	 * const delay = Delay.wait(() => {
	 *      Engine.debug('Teste')
	 * }, 10)
	 *
	 * Delay.cancel(delay)
	 * //Função não executará, pois o delay foi interrompido antes do tempo a ser aguardado.
	 * @param {DelayTask} task - Wait/Delay a ser interrompido.
	*/
	public cancel (task:DelayTask): void
	/**
	 * Converte segundos em uma quantia de ticks correspondente.
	 * @example
	 * Delay.wait(() => {
	 *      //Executado após 10 segundos.
	 * }, Delay.seconds(10))
	 * @static 
	 * @param {Number} sec - Quantidade de segundos a serem convertidos em ticks.
	 * @returns {Number}
	*/
	public seconds (sec:Number): Number
}

declare const Delay : Delay