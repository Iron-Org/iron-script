/**
 * Classe para manipulação dos dados de uma Ads.
 * @hideconstructor
 * @category Tipos
 * @author Gabriel T
 */
declare class ScriptAdsData {
  /**
   * Retorna o valor do offset na posição X
   * @returns {number}
   */
  getOffsetX(): number

  /**
   * Retorna o valor do offset na posição Y
   * @returns {number}
   */
  getOffsetY(): number

  /**
   * Retorna o valor do offset na posição Z
   * @returns {number}
   */
  getOffsetZ(): number

  /**
   * Retorna o url da imagem
   * @returns {string}
   */
  getImageUrl(): string

  /**
   * Retorna o url redicionado ao clicar
   * @returns {string}
   */
  getClickUrl(): string

  /**
   * Define o valor do offset na posição X
   * @returns {number}
   */
  setOffsetX(): number

  /**
   * Define o valor do offset na posição Y
   * @returns {number}
   */
  setOffsetY(): number

  /**
   * Define o valor do offset na posição Z
   * @returns {number}
   */
  setOffsetZ(): number

  /**
   * Define o url da imagem
   * @returns {string}
   */
  setImageUrl(): string

  /**
   * Define o url redicionado ao clicar
   * @returns {string}
   */
  setClickUrl(): string

  /**
   * Redefine os dados no mobi da ADS
   */
  refresh(): void
}

export { ScriptAdsData };
