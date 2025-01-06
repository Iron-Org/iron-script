import { ScriptEntity, FakeEntity, ScriptFurni, ScriptPosition, ScriptTrade, ScriptInventoryItem } from './types';

/**
  * Gerenciador de Eventos chamados no Script
  * @category Classes
  * @author Arthur L
  * @author Gabriel T
  */
declare namespace Events {
  /**
    * Registra um evento
    * @example
    * Events.on('load', () => {
    *      //Ação é executada
    * })
    *
    * @param {string} eventName - Nome do evento a ser registrado.
    * @param {Function} callback - Callback executado ao evento ser disparado.
  */
  function on(eventName: string, callback: Function): void

  /**
    * @param {string} roomId - ID do quarto
    * @param {string} eventName - Evento a ser disparado
    * @param {string} data - Dados a serem enviados
   */
  function sendMessageToRoom(roomId: string, eventName: string, data: string): void

  /**
   * Evento chamado ao carregar o quarto.
   * @event
   * @param {ScriptEntity} user - O usuário que está carregando o quarto.
   */
  const load = (user: ScriptEntity) => { };

  /**
   * Evento chamado ao descarregar o quarto.
   * @event
   */
  const dispose = () => { };

  /**
   * Evento chamado quando um usuário entra no quarto.
   * @event
   * @param {ScriptEntity} user - O usuário que entrou no quarto.
   */
  const userJoin = (user: ScriptEntity) => { };

  /**
    * Evento chamado quando um usuário sai do quarto.
    * @event
    * @param {number} id - ID do usuário.
    * @param {string} username - Nome do usuário.
    */
  const userLeave = (id: number, username: string) => { }

  /**
    * Evento chamado quandi uma entidade pisar em uma mobilia.
    * @event
    * @param {ScriptEntity} entity - Entidade que pisou na mobilia.
    * @param {ScriptFurni} furni - Mobilia em que a entidade pisou.
  */
  const stepOn = (entity: ScriptEntity, furni: ScriptFurni) => { }

  /**
    * Evento chamado quando uma entidade sair de uma mobilia.
    * @event
    * @param {ScriptEntity} entity - Entidade que saiu de cima da mobilia.
    * @param {ScriptFurni} furni - Mobilia em que a entidade saiu.
  */
  const stepOff = (entity: ScriptEntity, furni: ScriptFurni) => { }

  /**
    * Evento chamado a entidade anda sobre o piso do quarto.
    * @event
    * @param {ScriptEntity} entity - Entidade que andou.
    */
  const walk = (entity: ScriptEntity) => { }

  /**
    * Evento chamado quando uma mensagem é enviada no quarto.
    * @event
    * @param {ScriptEntity} user - Usuário que enviou a mensagem.
    * @param {string} message - Mensagem que foi enviada.
  */
  const say = (user: ScriptEntity, message: string) => { }

  /**
    * Evento chamado quando que um usuário interage com uma mobilia.
    * @event
    * @param {ScriptEntity} user - Usuário que interagiu com a mobilia.
    * @param {ScriptFurni} furni - Mobilia que foi interagida.
    * @param {boolean} isClose - Se a interação foi feita estando ao lado da mobilia.
    */
  const interact = (user: ScriptEntity, furni: ScriptFurni, isClose: boolean) => { }

  /**
    * Evento chamado a cada tick. (500ms)
    * @event
    */
  const tick = () => { }

  /**
    * Evento chamado quando um usuário seleciona outro.
    * @event
    * @param {ScriptEntity} selector - Usuário que selecionou.
    * @param {ScriptEntity | FakeEntity} selected - Usuário que foi selecionado.
    */
  const playerSelected = (selector: ScriptEntity, selected: ScriptEntity | FakeEntity) => { }

  /**
    * Evento chamado ao receber uma mensagem de um client via websocket.
    * @event
    * @param {ScriptEntity} user - Usuário que enviou a mensagem.
    * @param {string} name - Nome do Evento.
    * @param {string} data - Dados recebidos na mensagem.
    */
  const uiMessage = (user: ScriptEntity, name: string, data: string) => { }

  /**
    * Evento chamado quando um usuário faz um gol.
    * @event
    * @param {ScriptEntity} user - Usuário que chutou ao gol.
    * @param {ScriptFurni} soccerball - Bola que foi chutada.
    */
  const goal = (user: ScriptEntity, soccerball: ScriptFurni) => { }

  /**
    * Evento chamado ao receber uma mensagem de outro quarto.
    * @event
    * @param {number} roomId - id do quarto que enviou a mensagem.
    * @param {string} name - Nome do Evento.
    * @param {string} data - Dados recebidos na mensagem.
    */
  const serverMessage = (roomId: number, name: string, data: string) => { }

  /**
    * Evento chamado quando um wired Efeito: Envia Eventos é ativado.
    * @event
    * @param {string} eventName - Nome do evento que emitido.
    * @param {ScriptEntity[]} entities - Entidade que ativou o wired.
    */
  const wired = (eventName: string, entities: ScriptEntity[]) => { }

  /**
    * Evento chamado quando um usuário pressiona uma das teclas.
    * 
    * Código das Teclas:
    * 1: CRTL
    * 2: ALT
    * 3: SHIFT
    * 4: Seta para Cima
    * 5: Seta para Baixo
    * 6: Seta para Esquerda
    * 7: Seta para Direita
    * @event
    * @param {ScriptEntity} user - Usuário que pressionou a tecla.
    * @param {number} keyCode - Código da tecla que foi pressionada.
    */
  const keyDown = (user: ScriptEntity, keyCode: number) => { }

  /**
    * Evento chamado quando um usuário solta uma das teclas anteriormente pressionada.
    *
    * Código das Teclas:
    * 1: CRTL
    * 2: ALT
    * 3: SHIFT
    * 4: Seta para Cima
    * 5: Seta para Baixo
    * 6: Seta para Esquerda
    * 7: Seta para Direita
    * @event
    * @param {ScriptEntity} user - Usuário que soltou a tecla.
    * @param {number} keyCode - Código da tecla que foi solta.
    */
  const KeyUp = (user: ScriptEntity, keyCode: number) => { }

  /**
    * Evento chamado quando um usuário captura uma foto no quarto.
    * @event
    * @param {ScriptEntity} user - Usuário que capturou a foto.
    * @param {string} photoId - ID da foto capturada.
    */
  const takePhoto = (user: ScriptEntity, photoId: string) => { }

  /**
    * Evento chamado quando um usuário clicka em um piso do quarto.
    * @event
    * @param {ScriptEntity} user - Usuário que clicou no piso.
    * @param {ScriptPosition} position - Posição que foi clicada.
    */
  const clickOnFloor = (user: ScriptEntity, position: ScriptPosition) => { }

  /**
    * Evento chamado quando um usuário clica sobre uma mobilia.
    * @event
    * @param {ScriptEntity} user - Usuário que clicou na mobilia.
    * @param {ScriptFurni} furni - Mobilia que foi clicada.
    * @param {boolean} isClose - Se o clique foi feito perto da mobilia.
    */
  const clickOnFurni = (user: ScriptEntity, furni: ScriptFurni, isClose: boolean) => { }

  /**
    * Evento chamado quando um usuário coloca um mobi no quarto.
    * @event
    * @param {ScriptEntity} user - Usuário que colocou a mobilia.
    * @param {ScriptFurni} furni - Mobilia que foi colocada no quarto.
    */
  const floorItemPlaced = (user: ScriptEntity, furni: ScriptFurni) => { }

  /**
    * Evento chamado quando um usuário remove um mobi no quarto.
    * @event
    * @param {ScriptEntity} user - Usuário que pegou a mobilia.
    * @param {ScriptFurni} furni - Mobilia que foi removido do quarto.
    */
  const floorItemPickedup = (user: ScriptEntity, furni: ScriptFurni) => { }

  /**
    * Evento chamado quando um usuário move ou rotaciona um mobi no quarto.
    * @event
    * @param {ScriptEntity} user - Usuário que moveu ou rotacionou a mobilia.
    * @param {ScriptFurni} furni - Mobilia que foi movida ou rotacionada no quarto.
    * @param {boolean} rotating - Se a mobilia foi rotacionada.
    */
  const FloorItemMoved = (user: ScriptEntity, furni: ScriptFurni, rotating: string) => { }

  /**
    * Evento chamado sempre que um usuário fica ausente.
    * @event
    * @param {ScriptEntity} user - Usuário que ficou ausente.
    */
  const userIdle = (user: ScriptEntity) => { }

  /**
    * Evento chamado sempre que um usuário acorda.
    * @event
    * @param {ScriptEntity} user - Usuário que acordou.
    */
  const userWakeUp = (user: ScriptEntity) => { }

  /**
    * Evento chamado sempre que um usuário sussura para outro.
    * @event
    * @param {ScriptEntity} user - Usuário que sussurou.
    * @param {ScriptEntity | FakeEntity} target - Usuário ou Fake player que recebeu o sussurro.
    */
  const whisper = (user: ScriptEntity, target: ScriptEntity | FakeEntity) => { }

  /**
    * Evento chamado sempre que um usuário sussura para um grupo de usuários.
    * @event
    * @param {ScriptEntity} user - Usuário que sussurou.
    * @param {ScriptEntity[]} targets - Usuários que receberam o sussurro.
    */
  const whisperToGroup = (user: ScriptEntity, targets: ScriptEntity[]) => { }

  /**
    * Evento chamado sempre que um usuário interage com menu de um Fake Player.
    *
    * 1: Negociar
    * 2: Respeitar
    * 3: Beijar
    * @event
    * @param {ScriptEntity} user - Usuário que sussurou.
    * @param {FakeEntity} fakeEntity - Fake Player que o usuário interagiu.
    * @param {number} code - Código do botão
    */
  const fakeMenuInteract = (user: ScriptEntity, fakeEntity: FakeEntity, code: number) => { }

  /**
    * Evento chamado sempre que uma troca pelo script é concluida.
    * @event
    * @param {ScriptTrade} trade - Troca que foi concluida.
    */
  const completeTrade = (trade: ScriptTrade) => { }

  /**
    * Evento chamado sempre que o usuário aceita uma troca pelo Script.
    * @event
    * @param {ScriptTrade} trade - Troca que foi aceita.
    */
  const acceptTrade = (trade: ScriptTrade) => { }

  /**
    * Evento chamado sempre que o usuário rejeita uma troca pelo Script.
    * @event
    * @param {ScriptTrade} trade - Troca que foi rejeitada.
    */
  const unacceptTrade = (trade: ScriptTrade) => { }

  /**
    * Evento chamado sempre que o usuário confirma uma troca pelo Script.
    * @event
    * @param {ScriptTrade} trade - Troca que foi confirmado.
    */
  const confirmTrade = (trade: ScriptTrade) => { }

  /**
    * Evento chamado sempre que o usuário cancela uma troca pelo Script.
    * @event
    * @param {ScriptTrade} trade - Troca que foi cancelada.
    */
  const cancelTrade = (trade: ScriptTrade) => { }

  /**
    * Evento chamado sempre que o usuário cancela uma troca pelo Script após já ter confirmado.
    * @event
    * @param {ScriptTrade} trade - Troca que foi cancelada.
    */
  const cancelConfirmTrade = (trade: ScriptTrade) => { }

  /**
    * Evento chamado sempre que o usuário adiciona um item a troca.
    * @event
    * @param {ScriptTrade} trade - Troca que o item foi adicionado.
    * @param {ScriptInventoryItem} inventoryItem - Item do inventário adicionado.
    */
  const addTradeItem = (trade: ScriptTrade, inventoryItem: ScriptInventoryItem) => { }

  /**
    * Evento chamado sempre que o usuário adiciona mais de um item a troca de uma vez.
    * @event
    * @param {ScriptTrade} trade - Troca em que o item foi adicionado.
    * @param {ScriptInventoryItem[]} inventoryItems - Itens do inventário adicionados.
    */
  const addTradeItems = (trade: ScriptTrade, inventoryItems: ScriptInventoryItem[]) => { }

  /**
    * Evento chamado sempre que o usuário remove uma troca pelo Script após já ter confirmado.
    * @event
    * @param {ScriptTrade} trade - Troca em que o item foi removido.
    * @param {ScriptInventoryItem[]} inventoryItem - Item da troca removido.
    */
  const removeTradeItem = (trade: ScriptTrade, inventoryItem: ScriptInventoryItem[]) => { }
}
