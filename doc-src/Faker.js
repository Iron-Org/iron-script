/// <reference path='types/FakeEntity.js'/>
/// <reference path='types/FakeFloorItem.js'/>

/**
 * Faker
 * Cria objetos
 * Limitaçoes: 1000 mobis e 50 bots
 * @namespace Faker
 * @author Arthur L
 * @author Gabriel T
 */
const Faker = {
    /**
     *  Cria item falso
     *  OBS1: O item criado só pode ser vizualizado, não possui nenhum tipo de interação/colisão. 
     *  OB2: O item não ativa nenhum evento.
     *  @param {number} spriteId
     *  @param {number} x
     *  @param {number} y
     *  @param {number} z
     *  @param {number} r
     */
    createFakeItem: (spriteId, x,y,z,r) =>{},
    /**
     * Remove item determinado
     * @param {FakeFloorItem} fakeItem - 
     */
    removeFakeFloorItem: (fakeItem) =>{},
    /**
     * Remove todos os items falsos
     */
    removeAllFloorItems: ()=>{},
    /**
     * Retorna a lista com todos os items criados.
     * @returns {FakeFloorItem[]}
     */
    getLoadedFurnis: () =>{},
    /**
     * Cria entidade similar a um player real
     * @param {string} name
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} r
     * @returns {FakeEntity}
     */
    createFakePlayer: (name, x,y,z,r)=>{},
    /**
     * Cria uma entidade simiular a um bot real
     * @param {string} name
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} r
     * @returns {FakeEntity}
     */
    createFakeBot: (name, x,y,z,r)=> {},
    /**
     * Remove entidade fake
     * @param {FakeEntity} fakeEntity
     */
    removeEntity: (fakeEntity) =>{},
    /**
     *  Remove todas as entidades criadas
     */
    removeAllEntities: () =>{}
}
