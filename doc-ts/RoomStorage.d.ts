/**
 * Gerenciador de armazenamento por quarto.
 * Armazena valores que podem ser consultados com uma chave de indentificação, somente no quarto em que foi definido.
 * @author Arthur L
 * @author Gabriel T
 */
interface RoomStorage {
    /**
    * @param {String} key - Chave da propriedade a ser buscada.
    * @returns {String} 
    */
    public get (key:String) : null | String
    /** 
    * @param {String} key - Chave da propriedade a definir.
    * @param {*} value - Novo valor a ser definido.
    */
    public set (key:String, value:String) : void
    /** 
    * @param {String} key - Chave da propriedade a ser deletada.
    */
    public delete (key:String) : void
}

declare const RoomStorage : RoomStorage