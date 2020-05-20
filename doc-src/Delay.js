
/**
 * Aguarda tempos determinados para executar funções.
 * > Cada tick corresponde 500ms.
 * @namespace Delay
 * @author Arthur L
 * @author Gabriel T
 * 
 */
const Delay = {
    /**
     * @example
     * Delay.wait(() => {
     *  //Executado após 1 segundo de espera.
     * }, 2)
     * @param {Function} callback - Função executada após o tempo determinado ter passado.
     * @param {Number} ticks - Quantidade de ticks a aguardar até a execução da função.
     * @returns {DelayTask} 
    */
    wait: (callback, ticks) => {}, 

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
    interval: (callback, ticks) => {},

    /**
     * @example 
     * const delay = Delay.wait(() => {
     *      Engine.debug('Teste')
     * }, 10)
     *
     * Delay.cancel(delay)
     * //Função não executará, pois o delay foi interrompido antes do tempo a ser aguardado.
     * @param {DelayTask} task - Wait/Delay a ser interrompido.
    */
    cancel: (task) => {},

    /**
     * @example
     * Delay.wait(() => {
     *      //Executado após 10 segundos.
     * }, Delay.seconds(10))
     * @static 
     * @param {Number} sec - Quantidade de segundos a serem convertidos em ticks.
     * @returns {Number}
    */
    seconds: (sec) => {},

}