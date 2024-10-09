/// <reference path="types/ScriptPosition.js"/>

/**
 * Constante com diversos métodos utilitários.
 * @namespace Utils
 * @author Gabriel T
 */
const Utils = {
  /**
   * Torna o texto seguro para ser usado em tags HTML sem riscos de XSS.
   * @param {string} text - Texto a ser transformado.
   * @returns {string}
  */
  safeStr (text) {},
  /**
   * Calcula a distancia de dois pontos usando o calculo de chebyshev.
   * @param {number} x1 - Posição X inicial.
   * @param {number} y1 - Posição Y inicial.
   * @param {number} x2 - Posição X final.
   * @param {number} y2 - Posição Y final.
   * @returns {number}
  */
  chebyshevDistance (x1, y1, x2, y2) {},
  /**
   * Calcula a rotação partindo de um ponto ao outro.
   * @param {number} x1 - Posição X inicial.
   * @param {number} y1 - Posição Y inicial.
   * @param {number} x2 - Posição X final.
   * @param {number} y2 - Posição Y final.
   * @param {boolean} reverse - Se deve inverter a rotação
   * @returns {number}
   */
  calculateRotation (x1, y1, x2, y2, reverse) {},
  /**
   * Calcula a posição final partindo de um ponto ao outro, seguindo a rotação e distancia.
   * @param {number} x1 - Posição X inicial.
   * @param {number} y1 - Posição Y inicial.
   * @param {number} rotation - Rotação inicial.
   * @param {number} reverse - Se deve interter a rotação.
   * @param {number} distance - Distancia entre os dois pontos.
   * @returns {ScriptPosition}
   */
  calculatePosition (x, y, rotation, reverse, distance) {},
  /**
   * Calcula o volume pela distancia de proximidade
   * @param {number} distance
   * @param {number} maxDistance
   */
  calculateVolumeByProximity (distance, maxDistance) {},
  /**
   *
   * @param {number} x1 - Posição X inicial.
   * @param {number} y1 - Posição Y inicial.
   * @param {number} rotation - Rotação inicial.
   * @param {number} distance - Distancia entre os dois pontos.
   * @returns {ScriptPosition}
   */
  positionInFront (x, y, rotation, distance) {},
  /**
   * Calcula a posição atrás da posição fornecida, baseado na distancia fornecida.
   * @param {number} x1 - Posição X inicial.
   * @param {number} y1 - Posição Y inicial.
   * @param {number} rotation - Rotação inicial.
   * @param {number} distance - Distancia entre os dois pontos.
   * @returns {ScriptPosition}
   */
  positionBehind (x, y, rotation, distance) {},
  /**
   * Calcula as posição adjacentes em todas as rotações, baseado na distancia fornecida.
   * @param {number} x1 - Posição X inicial.
   * @param {number} y1 - Posição Y inicial.
   * @param {number} distance - Distancia entre o ponto inicial dos demais.
   * @returns {ScriptPosition[]}
   */
  allRotations (x, y, distance) {},
  /**
   * Retorna se a rotação fornecida é em diagonal.
   * @param {number} rotation - Rotação a ser avaliada.
   * @returns {boolean}
   */
  isDiagonal (rotation) {}
}
