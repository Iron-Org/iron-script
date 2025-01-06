import { ScriptTrade, FakeEntity, ScriptEntity } from './types';

/**
 * Constante responsável por gerenciar trocas.
 * @category Classes
 * @author Gabriel T
 */
declare namespace Trade {
  /**
   * Cria uma troca entre o manager e o usuário
   * @param {FakeEntity} manager - Player Fake que irá representar a troca.
   * @param {ScriptEntity} player - Usuário que irá efetuar a troca.
  */
  function createTrade(manager: FakeEntity, player: ScriptEntity): ScriptTrade

  /**
   * Retorna a troca que o usuário estiver efetuando com o script
   * @param {number | ScriptEntity} player - Id ou entidade do Usuário que esta na troca.
  */
  function get(player: number | ScriptEntity): ScriptTrade
}
