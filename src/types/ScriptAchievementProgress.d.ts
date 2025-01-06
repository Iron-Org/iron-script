/**
 * Classe que representa uma conquista.
 * @hideconstructor
 * @category Tipos
 * @author Luiz
 * @author Gabriel T
 */

declare class ScriptAchievementProgress {
  /**
   * Retorna o progresso da conquista
   */
  getProgress(): number

  /**
   * Retorna o level da conquista
   */
  getLevel(): number
}

export { ScriptAchievementProgress };
