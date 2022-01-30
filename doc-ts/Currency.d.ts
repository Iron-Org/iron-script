/**
 * Métodos para premiar usuários com Moedas
 * @author Luiz
 * @author Gabriel T
 */
interface Currency {
	/**
	 * Adiciona a quantidade de Créditos a carteira do usuário.
	 * @param {Number} id - Id do usuário que receberá os Créditos.
	 * @param {Number} amount - Quantidade de Créditos a ser entregue.
	 */
	public giveCreditsById (id: Number, amount: Number): void
	/**
	 * Adiciona a quantidade de Créditos a carteira do usuário.
	 * @param {String} username - Nome do usuário que receberá os Créditos.
	 * @param {Number} amount - Quantidade de Créditos a ser entregue.
	 */
  public giveCreditsByUsername (username: String, amount: Number) : void
	/**
	 * Adiciona a quantidade de Duckets a carteira do usuário.
	 * @param {Number} id - Id do usuário que receberá os Duckets.
	 * @param {Number} amount - Quantidade de Duckets a ser entregue.
	 */
	public giveDucketsById (id: Number, amount: Number): void
	/**
	 * Adiciona a quantidade de Duckets a carteira do usuário.
	 * @param {String} username - Nome do usuário que receberá os Duckets.
	 * @param {Number} amount - Quantidade de Duckets a ser entregue.
	 */
   public giveDucketsByUsername (username: String, amount: Number): void
	/**
	 * Adiciona a quantidade de Diamantes a carteira do usuário.
	 * @param {Number} id - Id do usuário que receberá os Diamantes.
	 * @param {Number} amount - Quantidade de Diamantes a ser entregue.
	 */
   public giveDiamondsById (id: Number, amount: Number): void
	/**
	 * Adiciona a quantidade de Diamantes a carteira do usuário.
	 * @param {String} username - Nome do usuário que receberá os Diamantes.
	 * @param {Number} amount - Quantidade de Diamantes a ser entregue.
	 */
   public giveDiamondsByUsername (username: String, amount: Number): void
}

declare const Currency : Currency