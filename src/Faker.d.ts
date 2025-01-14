import { FakeEntity, FakeFloorItem } from './types/index';;

/**
 * Faker
 * Gera Objetos representando Mobilias ou Entidades falsas 
 * Limites: 1000 Mobilias Fakes e 100 Entidades Fakes
 * @category Classes
 * @author Arthur L
 * @author Gabriel T
 */
declare namespace Faker {
  /**
   * Cria um FakeItem, uma mobilia similar a original
   * @param {number} spriteId - ID da sprite da mobilia original
   * @param {number} x - Posição X que será gerado
   * @param {number} y - Posição Y que será gerado
   * @param {number} z - Posição Z que será gerado
   * @param {number} r - Rotação que será gerado
   */
  function createFakeItem(spriteId: number, x: number, y: number, z: number, r: number): FakeFloorItem

  /**
   * Cria entidade similar a um player real
   * @param {string} name - Nome para o FakePlayer
   * @param {number} x - Posição X que ele irá ser criado
   * @param {number} y - Posição Y que ele irá ser criado
   * @param {number} z - Posição Z que ele irá ser criado
   * @param {number} r - Rotação que ele irá ser criado
   */
  function createFakePlayer(name: string, x: number, y: number, z: number, r: number): FakeEntity

  /**
   * Cria uma entidade similar a um bot real
   * @param {string} name - Nome para o FakeBot
   * @param {number} x - Posição X que ele irá ser criado
   * @param {number} y - Posição Y que ele irá ser criado
   * @param {number} z - Posição Z que ele irá ser criado
   * @param {number} r - Rotação que ele irá ser criado
   */
  function createFakeBot(name: string, x: number, y: number, z: number, r: number): FakeEntity

  /**
   * Retorna a lista com todos os items criados.
   * @returns {FakeFloorItem[]}
   */
  function getLoadedFurnis(): FakeFloorItem[]

  /**
   * Remove o item fake do quarto
   * @param {FakeFloorItem} fakeItem - item fake a ser remodio
   */
  function removeFakeFloorItem(fakeItem: FakeFloorItem): void

  /**
   * Remove uma entidade Fake
   * @param {FakeEntity} fakeEntity - Entidade Fake a ser removida do quarto
   */
  function removeEntity(fakeEntity: FakeEntity): void

  /**
   * Remove todos os items falsos
   */
  function removeAllFloorItems(): void

  /**
   *  Remove todas as entidades criadas
   */
  function removeAllEntities(): void
}
