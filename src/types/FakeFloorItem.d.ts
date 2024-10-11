import { IScriptReachable } from '.';

/**
 * Classe que representa mobilias Fakes.
 * @hideconstructor
 * @category Tipos
 * @author Arthur L
 * @author Gabriel T
 */
declare class FakeFloorItem implements IScriptReachable {
	/**
	 * Retorna o ID do FakeFurni
	 */
	getId (): number

	/**
	 * Retorna a posição X atual do FakeFurni.
	 */
	getX (): number

	/**
	 * Retorna a posição Y atual do FakeFurni.
	 */
	getY (): number

	/**
	 * Retorna a posição Z (altura) atual do Furni.
	 */
	getZ (): number

	/**
	 * Retorna o atual estado do FakeFurni
	 */
	getState (): string

  /**
   * Retorna o sprite atual do FakeFurni
   */
  getSprite (): number

	/**
	 * Retorna altura empilhável do FakeFurni.
	 */
	getStackHeight (): number

	/**
	 * Retorna o valor da opacidade atual do mobi.
	 */
	getAlpha (): number

	/**
	 * Altera o estado do FakeFurni.
	 * @param {string} state - Valor do estado em que o furni será definido.
	 */
	setState (state: string): void

	/**
	 * Define altura empilhável do FakeFurni.
	 * @param {number} height - Altura empilhável que será definida no FakeFurni.
	 */
	setStackHeight (height: number): void

	/**
	 * Define a opacidade do FakeFurni.
	 * @param {number} alpha - Valor da opacidade (1 a 255).
	 */
	setOpacity (alpha: number): boolean

  /**
	 * Move o FakeFurni para posição fornecida.
	 * @param {number} x - Posição X para onde o FakeFurni será movido.
	 * @param {number} y - Posição Y para onde o FakeFurni será movido.
	 * @param {number} z - Posição Z para onde o FakeFurni será movido.
	 */
	move (x: number, y: number, z: number): void

	/**
	 * Teletransporta o FakeFurni para posição fornecida.
	 * @param {number} x - Posição X para onde o FakeFurni será movido.
	 * @param {number} y - Posição Y para onde o FakeFurni será movido.
	 * @param {number} z - Posição Z para onde o FakeFurni será movido.
	 * @param {number=} r - Rotação definida ao FakeFurni ao ser movido.
	 */
	move (x: number, y: number, z: number, r?: number): void

  /**
	 * Teletransporta o FakeFurni para posição fornecida.
	 * @param {number} x - Posição X para onde o FakeFurni será movido.
	 * @param {number} y - Posição Y para onde o FakeFurni será movido.
	 * @param {number} z - Posição Z para onde o FakeFurni será movido.
	 */
	warp (x: number, y: number, z: number): void

  /**
   * Esconde o Fake Furni para todos os usuários do quarto.
   */
  hide (): void

  /**
   * Mostra o Fake Furni para todos os usuários do quarto.
   */
  show (): void
}

export { FakeFloorItem };
