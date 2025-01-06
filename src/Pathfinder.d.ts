import { IScriptReachable, ScriptEntity, ScriptFurni } from './types';

/**
 * Funções para criação de pathfinders
 * @category Classes
 * @author Arthur L
 * @author Gabriel T
 */
declare namespace Pathfinder {
  /**
   * Gera um caminho para entidade
   * @param {ScriptEntity} entity - Entidade
   * @param {number} x - Posição X do Destino
   * @param {number} y - Posição Y do Destino
   * @param {boolean} enableDiagonal - Se diagonal é permitida
   * @param {boolean} overrideLastStep - Se deve atravessar a entidade que estiver no ultimo piso do caminho
   * @param {boolean} onlyLastStep - Se deve retornar apenas o primeiro piso mais próximo
   * @returns {IScriptReachable[]}
   */
  function makeEntityPath(entity: ScriptEntity, x: number, y: number, enableDiagonal: boolean, overrideLastStep: boolean, onlyLastStep: boolean): IScriptReachable[]

  /**
   * Gera um caminho para entidade
   * @param {ScriptEntity} entity - Entidade
   * @param {number} x - Posição X do Destino
   * @param {number} y - Posição Y do Destino
   * @returns {IScriptReachable}
   */
  function makeEntityPath(entity: ScriptEntity, x: number, y: number): IScriptReachable

  /**
   * Gera um caminho para entidade
   * @param {ScriptEntity} entity - Entidade
   * @param {IScriptReachable} position - Destino
   * @returns {IScriptReachable[]}
   */
  function makeEntityPath(entity: ScriptEntity, position: IScriptReachable): IScriptReachable[]

  /**
   * Gera um caminho para o furni
   * @param {ScriptFurni} furni - Mobilia
   * @param {number} x - Posição X do Destino
   * @param {number} y - Posição Y do Destino
   * @param {boolean} enableDiagonal - Se diagonal é permitida
   * @param {boolean} overrideLastStep - Se deve atravessar a entidade que estiver no ultimo piso do caminho
   * @param {boolean} onlyLastStep - Se deve retornar apenas o primeiro piso mais próximo
   * @returns {IScriptReachable[]}
   */
  function makeFurniPath(furni: ScriptFurni, x: number, y: number, enableDiagonal: boolean, overrideLastStep: boolean, onlyLastStep: boolean): IScriptReachable[]

  /**
   * Gera um caminho para o furni
   * @param {ScriptFurni} furni - Mobilia
   * @param {IScriptReachable} position - Destino
   * @returns {IScriptReachable[]}
   */
  function makeFurniPath(furni: ScriptFurni, position: IScriptReachable): IScriptReachable[]

  /**
   * Gera um caminho para o furni
   * @param {ScriptFurni} furni - Mobilia
   * @param {IScriptReachable} x - Posição X do Destino
   * @param {IScriptReachable} y - Posição Y do Destino
   * @returns {IScriptReachable[]}
   */
  function makeFurniPath(furni: ScriptFurni, x: IScriptReachable, y: IScriptReachable): IScriptReachable[]
}
