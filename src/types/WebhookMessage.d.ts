/**
 * Classe que representa o Webhook.
 * @hideconstructor
 * @category Tipos
 */
declare class WebhookMessage {
	/**
   * Define a mensagem que será enviada junto ao Webhook
   * @param {string} bodyMessage - Mensagem enviada junto ao embed
   * @returns {WebhookMessage}
   */
  setRawMessage (bodyMessage: string): WebhookMessage

  /**
   * Define o titulo no Embed do Webhook
   * @param {string} title
   * @returns {WebhookMessage}
   */
  setTitle (title: string): WebhookMessage

  /**
   * Define a descrição no Embed do Webhook
   * @param {string} description
   * @returns {WebhookMessage}
   */
  setDescription (description: string): WebhookMessage

  /**
   * Define a imagem no Embed do Webhook
   * @param {string} link
   * @returns {WebhookMessage}
   */
  setImageUrl (link: string): WebhookMessage

  /**
   * Define a imagem da Thumbnail no Embed do Webhook
   * @param {string} link
   * @returns {WebhookMessage}
   */
  setThumbnailUrl (link: string): WebhookMessage

  /**
   * Define a cor no Embed do Webhook
   * @param {number} hexColor
   * @returns {WebhookMessage}
   */
  setColor (hexColor: number): WebhookMessage

  /**
   * Adiciona um campo com titulo e descrição no Embed do Webhook
   * @param {string} titleField
   * @param {string} valueField
   * @returns {WebhookMessage}
   */
  addField (titleField: string, valueField: string): WebhookMessage

  /**
   * Envia o Webhook.
   */
  queue(): void
}

export { WebhookMessage };
