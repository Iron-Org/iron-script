import { IScriptReachable, ScriptFurni, ScriptEntity } from '.';

/**
 * Classe que representa um piso no quarto.
 * @category Tipos
 * @hideconstructor
 */
declare class ScriptTile implements IScriptReachable {
  /**
   * Retorna posição X do piso.
   */
  getX(): number;

  /**
   * Retorna posição Y do piso.
   */
  getY(): number;

  /**
   * Retorna posição Z do piso.
   */
  getZ(): number;

  /**
   * Retorna todos os furnis que estão no piso.
   */
  getFurnis(): ScriptFurni[];

  /**
   * Retorna todas entidades que estão no piso.
   */
  getEntities(): ScriptEntity[];

  /**
   * Retorna o Furni que está mais alto no piso.
   */
  getTopFurni(): ScriptFurni;

  /**
   * Retorna a altura andável no piso.
   */
  getWalkHeight(): number;

  /**
   * Retorna se há um furni com interação de porta no piso.
   */
  hasGate(): boolean;

  /**
   * Retorna se há algum furni no piso.
   */
  hasFurni(): boolean;

  /**
   * Retorna se há entidades no piso.
   */
  hasEntities(): boolean;

  /**
   * Retorna se o piso pode ser empilhável.
   */
  canStack(): boolean;

  /**
   * Retorna se pode criar/posicionar furnis no piso.
   */
  canPlaceItem(): boolean;
}

export { ScriptTile };
