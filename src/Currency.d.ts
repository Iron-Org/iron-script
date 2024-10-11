/**
 * Métodos para premiar usuários com Moedas. 
 * Valores Negativos irão remover os créditos do Usuário. 
 * _Necessário permissão extra._
 * @category Classes
 * @author Luiz
 * @author Gabriel T
 */
declare namespace Currency {
	/**
	 * Adiciona a quantidade de Créditos a carteira do usuário.
	 * @param {number} id - Id do usuário que receberá os Créditos.
	 * @param {number} amount - Quantidade de Créditos a ser entregue.
	 */
	function giveCreditsById (id: number, amount: number): void

	/**
	 * Adiciona a quantidade de Créditos a carteira do usuário.
	 * @param {string} username - Nome do usuário que receberá os Créditos.
	 * @param {number} amount - Quantidade de Créditos a ser entregue.
	 */
  function giveCreditsByUsername (username: string, amount: number): void

	/**
	 * Adiciona a quantidade de Duckets a carteira do usuário.
	 * @param {number} id - Id do usuário que receberá os Duckets.
	 * @param {number} amount - Quantidade de Duckets a ser entregue.
	 */
	function giveDucketsById (id: number, amount: number): void

	/**
	 * Adiciona a quantidade de Duckets a carteira do usuário.
	 * @param {string} username - Nome do usuário que receberá os Duckets.
	 * @param {number} amount - Quantidade de Duckets a ser entregue.
	 */
	function giveDucketsByUsername (username: string, amount: number): void

	/**
	 * Adiciona a quantidade de Diamantes a carteira do usuário.
	 * @param {number} id - Id do usuário que receberá os Diamantes.
	 * @param {number} amount - Quantidade de Diamantes a ser entregue.
	 */
	function giveDiamondsById (id: number, amount: number): void

	/**
	 * Adiciona a quantidade de Diamantes a carteira do usuário.
	 * @param {string} username - Nome do usuário que receberá os Diamantes.
	 * @param {number} amount - Quantidade de Diamantes a ser entregue.
	 */
	function giveDiamondsByUsername (username: string, amount: number): void

  /**
   * Adiciona a quantidade de Pontos Sazonais a carteira do usuário.
   * @param {number} id - Id do usuário que receberá os Pontos Sazonais.
   * @param {number} amount - Quantidade de Pontos Sazonais a ser entregue.
   */
	function giveSeasonalPointsById(id: number, amount: number): void

  /**
   * Adiciona a quantidade de Pontos Sazonais a carteira do usuário.
   * @param {string} username - Nome do usuário que receberá os Pontos Sazonais.
   * @param {number} amount - Quantidade de Pontos Sazonais a ser entregue.
   */
	function giveSeasonalPointsByUsername(username: string, amount: number): void
}
