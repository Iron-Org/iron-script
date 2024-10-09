/**
 * Classe que representa o Webhook.
 * @class
 * @hideconstructor
 */
class WebhookMessage {
	/**
   * Define a mensagem que será enviada junto ao Webhook
   * @param {String} bodyMessage
   * @returns {WebhookMessage}
   */
  setRawMessage (bodyMessage) {}
  /**
   * Define o titulo no Embed do Webhook
   * @param {String} title
   * @returns {WebhookMessage}
   */
  setTitle (title) {}
  /**
   * Define a descrição no Embed do Webhook
   * @param {String} description
   * @returns {WebhookMessage}
   */
  setDescription (description) {}
  /**
   * Define a imagem no Embed do Webhook
   * @param {String} link
   * @returns {WebhookMessage}
   */
  setImageUrl (link) {}
  /**
   * Define a imagem da Thumbnail no Embed do Webhook
   * @param {String} link
   * @returns {WebhookMessage}
   */
  setThumbnailUrl (link) {}
  /**
   * Define a cor no Embed do Webhook
   * @param {Number} hexColor
   * @returns {WebhookMessage}
   */
  setColor (hexColor) {}
  /**
   * Adiciona um campo com titulo e descrição no Embed do Webhook
   * @param {String} titleField
   * @param {String} valueField
   * @returns {WebhookMessage}
   */
  addField (titleField, valueField) {}
  /**
   * Envia o Webhook.
   */
  queue() {}
}
