import { WebhookMessage } from './types/index';

/**
 * Gerenciador de Webhooks
 * Envia mensagens por webhooks
 * @category Classes
 * @author Arthur L
 * @author Gabriel T
 */
declare namespace Webhook {
  /**
   * Cria um novo Webhook direcionado ao link.
   * @param {string} linkWebhook - Link do Webhook a receber informações.
  */
  function sendTo(linkWebhook: string): WebhookMessage
}
