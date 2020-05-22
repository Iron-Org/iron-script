/// <reference path="IScriptReachable.js"/>
/// <reference path="../Faker.js"/>

/**
 * Classe que representa mobilias Fakes.
 * Criadas pela {@link Faker}
 * @class
 * @hideconstructor
 * @implements {IScriptReachable}
 * @author Arthur L
 * @author Gabriel T
 */

class FakeFloorItem {
    /**
     * Retorna o ID do FakeFurni
     * @returns {number}
     */
    getId() {}
    /**
     * Retorna o atual estado do FakeFurni
     * @returns {string}
     */
    getState() {}
    /**
     * Move o FakeFurni para posição fornecida.
     * @param {number} x - Posição X para onde o FakeFurni será movido.
     * @param {number} y - Posição Y para onde o FakeFurni será movido.
     * @param {number} z - Posição Z para onde o FakeFurni será movido.
     * @param {number=} r - Rotação definida ao FakeFurni ao ser movido.
     */
    move(x, y, z, r) {}
    /**
     * Altera o estado do FakeFurni.
     * @param {*} state - Valor do estado em que o furni será definido.
     */
    setState(state) {}
    /**
     * Define altura empilhável do FakeFurni.
     * @param {number} height - Altura empilhável que será definida no FakeFurni.
     */
    setStackHeight(height) {}
    /**
     * Retorna altura empilhável do FakeFurni.
     * @returns {number}
     */
    getStackHeight() {}
    /**
     * Retorna a posição Z (altura) atual do Furni.
     * @returns {number}
     */
    getZ() {}
    /**
     * Retorna a posição X atual do FakeFurni.
     * @returns {number}
     */
    getX() {}
    /**
     * Retorna a posição Y atual do FakeFurni.
     * @returns {number}
     */
    getY() {}

}