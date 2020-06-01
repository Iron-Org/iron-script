/**
 * Faker
 * Gera Objetos representando Mobilias ou Entidades falsas
 * Limites: 1000 Mobilias Fakes e 50 Entidades Fakes
 * @author Arthur L
 * @author Gabriel T
 */
interface Faker{
	/**
	 *  Cria um FakeItem, uma mobilia similar a original
	 *  *O item criado só pode ser vizualizado, não possui nenhum tipo de interação/colisão.*
	 *  *O item não ativa nenhum evento.*
	 *  @param {Number} spriteId - ID da sprite da mobilia original
	 *  @param {Number} x - Posição X que será gerado
	 *  @param {Number} y - Posição Y que será gerado
	 *  @param {Number} z - Posição Z que será gerado
	 *  @param {Number} r - Rotação que será gerado
	 *  @returns {FakeFloorItem}
	 */
	public createFakeItem (spriteId:Number, x:Number,y:Number,z:Number,r:Number) : FakeFloorItem
	/**
	 * Remove item determinado
	 * @param {FakeFloorItem} fakeItem - 
	 */
	public removeFakeFloorItem (fakeItem:FakeFloorItem): void 
	/**
	 * Remove todos os items falsos
	 */
	public removeAllFloorItems () :void
	/**
	 * Retorna a lista com todos os items criados.
	 * @returns {FakeFloorItem[]}
	 */
	public getLoadedFurnis () : FakeFloorItem[]
	/**
	 * Cria entidade similar a um player real
	 * @param {String} name - Nome para o FakePlayer
	 * @param {Number} x - Posição X que ele irá ser criado
	 * @param {Number} y - Posição Y que ele irá ser criado
	 * @param {Number} z - Posição Z que ele irá ser criado
	 * @param {Number} r - Rotação que ele irá ser criado
	 * @returns {FakeEntity}
	 */
	public createFakePlayer (name:String, x:Number,y:Number,z:Number,r:Number): FakeEntity 
	/**
	 * Cria uma entidade similar a um bot real
	 * @param {String} name - Nome para o FakeBot
	 * @param {Number} x - Posição X que ele irá ser criado
	 * @param {Number} y - Posição Y que ele irá ser criado
	 * @param {Number} z - Posição Z que ele irá ser criado
	 * @param {Number} r - Rotação que ele irá ser criado
	 * @returns {FakeEntity}
	 */
	public createFakeBot (name:String, x:Number,y:Number,z:Number,r:Number) : FakeEntity
	/**
	 * Remove uma entidade Fake
	 * @param {FakeEntity} fakeEntity - Entidade Fake a ser removida do quarto
	 */
	public removeEntity (fakeEntity: FakeEntity) :void
	/**
	 *  Remove todas as entidades criadas
	 */
	public removeAllEntities () :void
}

declare const Faker : Faker
