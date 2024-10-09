/**
 * Métodos para premiar usuários com Moedas
 * @namespace Room
 * @author Luiz
 * @author Gabriel T
 */
const Currency = {
	// Valores Negativos irão remover os créditos do Usuário
	/**
	 * Adiciona a quantidade de Créditos a carteira do usuário.
	 * @param {Number} id - Id do usuário que receberá os Créditos.
	 * @param {Number} amount - Quantidade de Créditos a ser entregue.
	 */
	giveCreditsById (id, amount) {},
	/**
	 * Adiciona a quantidade de Créditos a carteira do usuário.
	 * @param {String} username - Nome do usuário que receberá os Créditos.
	 * @param {Number} amount - Quantidade de Créditos a ser entregue.
	 */
  giveCreditsByUsername (username, amount) {},
	/**
	 * Adiciona a quantidade de Duckets a carteira do usuário.
	 * @param {Number} id - Id do usuário que receberá os Duckets.
	 * @param {Number} amount - Quantidade de Duckets a ser entregue.
	 */
	giveDucketsById (id, amount) {},
	/**
	 * Adiciona a quantidade de Duckets a carteira do usuário.
	 * @param {String} username - Nome do usuário que receberá os Duckets.
	 * @param {Number} amount - Quantidade de Duckets a ser entregue.
	 */
	giveDucketsByUsername (username, amount) {},
	/**
	 * Adiciona a quantidade de Diamantes a carteira do usuário.
	 * @param {Number} id - Id do usuário que receberá os Diamantes.
	 * @param {Number} amount - Quantidade de Diamantes a ser entregue.
	 */
	giveDiamondsById (id, amount) {},
	/**
	 * Adiciona a quantidade de Diamantes a carteira do usuário.
	 * @param {String} username - Nome do usuário que receberá os Diamantes.
	 * @param {Number} amount - Quantidade de Diamantes a ser entregue.
	 */
	giveDiamondsByUsername (username, amount) {},
  /**
   * Adiciona a quantidade de Pontos Sazonais a carteira do usuário.
   * @param {Number} id - Id do usuário que receberá os Pontos Sazonais.
   * @param {Number} amount - Quantidade de Pontos Sazonais a ser entregue.
   */
	giveSeasonalPointsById(id, amount) {},
  /**
   * Adiciona a quantidade de Pontos Sazonais a carteira do usuário.
   * @param {String} username - Nome do usuário que receberá os Pontos Sazonais.
   * @param {Number} amount - Quantidade de Pontos Sazonais a ser entregue.
   */
	giveSeasonalPointsByUsername(username, amount) { },
}
