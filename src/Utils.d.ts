import { ScriptPosition } from "./types";

/**
 * Constante com diversos métodos utilitários.
 * @category Classes
 * @author Gabriel T
 */
declare namespace Utils {
  /**
   * Torna o texto seguro para ser usado em tags HTML sem riscos de XSS.
   * @param {string} text - Texto a ser transformado.
  */
  function safeStr(text: string): string

  /**
   * Calcula a distancia de dois pontos usando o calculo de chebyshev.
   * @param {number} x1 - Posição X inicial.
   * @param {number} y1 - Posição Y inicial.
   * @param {number} x2 - Posição X final.
   * @param {number} y2 - Posição Y final.
  */
  function chebyshevDistance(x1: number, y1: number, x2: number, y2: number): number

  /**
   * Calcula a rotação partindo de um ponto ao outro.
   * @param {number} x1 - Posição X inicial.
   * @param {number} y1 - Posição Y inicial.
   * @param {number} x2 - Posição X final.
   * @param {number} y2 - Posição Y final.
   * @param {boolean} reverse - Se deve inverter a rotação
   */
  function calculateRotation(x1: number, y1: number, x2: number, y2: number, reverse: boolean): number

  /**
   * Calcula a posição final partindo de um ponto ao outro, seguindo a rotação e distancia.
   * @param {number} x - Posição X inicial.
   * @param {number} y - Posição Y inicial.
   * @param {number} rotation - Rotação inicial.
   * @param {number} reverse - Se deve interter a rotação.
   * @param {number} distance - Distancia entre os dois pontos.
   */
  function calculatePosition(x: number, y: number, rotation: number, reverse: number, distance: number): ScriptPosition

  /**
   * Calcula o volume pela distancia de proximidade
   * @param {number} distance
   * @param {number} maxDistance
   */
  function calculateVolumeByProximity(distance: number, maxDistance: number): void

  /**
   *
   * @param {number} x - Posição X inicial.
   * @param {number} y - Posição Y inicial.
   * @param {number} rotation - Rotação inicial.
   * @param {number} distance - Distancia entre os dois pontos.
   */
  function positionInFront(x: number, y: number, rotation: number, distance: number): ScriptPosition

  /**
   * Calcula a posição atrás da posição fornecida, baseado na distancia fornecida.
   * @param {number} x - Posição X inicial.
   * @param {number} y - Posição Y inicial.
   * @param {number} rotation - Rotação inicial.
   * @param {number} distance - Distancia entre os dois pontos.
   */
  function positionBehind(x: number, y: number, rotation: number, distance: number): ScriptPosition

  /**
   * Calcula as posição adjacentes em todas as rotações, baseado na distancia fornecida.
   * @param {number} x - Posição X inicial.
   * @param {number} y - Posição Y inicial.
   * @param {number} distance - Distancia entre o ponto inicial dos demais.
   */
  function allRotations(x: number, y: number, distance: number): ScriptPosition[]

  /**
   * Retorna se a rotação fornecida é em diagonal.
   * @param {number} rotation - Rotação a ser avaliada.
   */
  function isDiagonal(rotation: number): boolean
}
