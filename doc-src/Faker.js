/// <reference path='types/FakeEntity.js'/>
/// <reference path='types/FakeFloorItem.js'/>

/**
 * Faker
 * Gera Objetos representando Mobilias ou Entidades falsas
 * Limites: 1000 Mobilias Fakes e 50 Entidades Fakes
 * @namespace Faker
 * @author Arthur L
 * @author Gabriel T
 */
const Faker = {
	/**
	 *  Cria um FakeItem, uma mobilia similar a original
	 *  @param {Number} spriteId - ID da sprite da mobilia original
	 *  @param {Number} x - Posição X que será gerado
	 *  @param {Number} y - Posição Y que será gerado
	 *  @param {Number} z - Posição Z que será gerado
	 *  @param {Number} r - Rotação que será gerado
	 */
	createFakeItem (spriteId, x, y, z, r) {},
	/**
	 * Cria entidade similar a um player real
	 * @param {String} name - Nome para o FakePlayer
	 * @param {Number} x - Posição X que ele irá ser criado
	 * @param {Number} y - Posição Y que ele irá ser criado
	 * @param {Number} z - Posição Z que ele irá ser criado
	 * @param {Number} r - Rotação que ele irá ser criado
	 * @returns {FakeEntity}
	 */
	createFakePlayer (name, x, y, z, r) {},
	/**
	 * Cria uma entidade similar a um bot real
	 * @param {String} name - Nome para o FakeBot
	 * @param {Number} x - Posição X que ele irá ser criado
	 * @param {Number} y - Posição Y que ele irá ser criado
	 * @param {Number} z - Posição Z que ele irá ser criado
	 * @param {Number} r - Rotação que ele irá ser criado
	 * @returns {FakeEntity}
	 */
	createFakeBot (name, x, y, z, r) {},
	/**
	 * Retorna a lista com todos os items criados.
	 * @returns {FakeFloorItem[]}
	 */
	getLoadedFurnis () {},
	/**
	 * Remove item determinado
	 * @param {FakeFloorItem} fakeItem - 
	 */
	removeFakeFloorItem (fakeItem) {},
	/**
	 * Remove uma entidade Fake
	 * @param {FakeEntity} fakeEntity - Entidade Fake a ser removida do quarto
	 */
	removeEntity (fakeEntity) {},
	/**
	 * Remove todos os items falsos
	 */
	removeAllFloorItems () {},
	/**
	 *  Remove todas as entidades criadas
	 */
	removeAllEntities () {}
}
