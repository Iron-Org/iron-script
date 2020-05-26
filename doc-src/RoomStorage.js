/**
 * Gerenciador de armazenamento por quarto.
 * Armazena valores que podem ser consultados com uma chave de indentificação, somente no quarto em que foi definido.
 * @namespace RoomStorage
 * @author Arthur L
 * @author Gabriel T
 */
const RoomStorage = {
    /**
    * @param {String} key - Chave da propriedade a ser buscada.
    * @returns {String} 
    */
    get (key) {},
    /** 
    * @param {String} key - Chave da propriedade a definir.
    * @param {*} value - Novo valor a ser definido.
    */
    set (key, value) {},
    /** 
    * @param {String} key - Chave da propriedade a ser deletada.
    */
    delete (key) {},
}
