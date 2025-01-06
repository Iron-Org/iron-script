/**
 * Interface para qualquer objeto que seja posicionável
 * @category Tipos
 * @author Arthur L
 * @author Gabriel T
 */
declare interface IScriptReachable {
  /**
   * Retorna posição X
   * @readonly
   */
  getX(): number

  /**
   * Retorna posição Y
   * @readonly
   */
  getY(): number

  /**
   * Retorna posição Z
   * @readonly
  */
  getZ(): number
}

export { IScriptReachable };
