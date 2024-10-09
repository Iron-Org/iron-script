/// <reference path="types/ScriptEntity.js"/>
/// <reference path="types/ScriptFurni.js"/>
/// <reference path="types/ScriptPosition.js"/>

/**
  * Todos os eventos chamados no Script
  * @namespace Events
  * @author Arthur L
  * @author Gabriel T
  */
const Events = {
	/**
	  * Registra o evento
		* - userJoin
		* - userLeave
		* - stepOn
		* - stepOff
		* - say
		* - interact
		* - tick
		* - load
		* - dispose
		* - playerSelected
		* - uiMessage
	  * @example
	  * Events.on('load', () => {
	  *      //Ação é executada
	  * })
	  *
	  * @param {String} text - Evento a ser utilizado.
	  * @param {Commands~CommandCallback} callback - Callback executado ao comando ser utilizado.
	*/
	on (eventName, callback) {},

  /**
    * roomId
    * event -
    * data -
   */
  sendMessageToRoom (roomId, event, data) {},
}
/**
  * Evento chamado ao carregar o quarto.
  * @event
  */
const load = () => {}
/**
  * Evento chamado ao descarregar o quarto.
  * @event
  */
const dispose = () => {}
/**
  * Evento chamado sempre que um usuário entra no quarto.
  * @event
  * @param {ScriptEntity} user - Usuário que entrou no quarto.
  */
const userJoin = (user) => {}
/**
  * Evento chamado sempre que um usuário sai do quarto.
  * @event
  * @param {Number} id - ID do usuário.
  * @param {String} username - Nome do usuário.
  */
const userLeave = (id, username) => {}
/**
  * Evento chamado sempre que um usuário pisar em um mobilia.
  * @event
  * @param {ScriptEntity} entity - Entidade que pisou na mobilia.
  * @param {ScriptFurni} furni - Mobilia em que a entidade pisou.
*/
const stepOn = (entity, furni) => {}
/**
  * Evento chamado sempre que um usuário sair de uma mobilia.
  * @event
  * @param {ScriptEntity} entity - Entidade que saiu de cima da mobilia.
  * @param {ScriptFurni} furni - Mobilia em que a entidade saiu.
*/
const stepOff = (entity, furni) => {}
/**
  * Evento chamado a entidade anda sobre o piso do quarto.
  * @event
  * @param {ScriptEntity} entity - Entidade que andou.
  */
const walk = (entity) => {}
/**
  * Evento chamado sempre que uma mensagem é enviada no quarto.
  * @event
  * @param {ScriptEntity} user - Usuário que enviou a mensagem.
  * @param {String} message - Mensagem que foi enviada.
*/
const say = (user, message) => {}
/**
  * Evento chamado sempre que um usuário interage com uma mobilia.
  * @event
  * @param {ScriptEntity} user - Usuário que interagiu com a mobilia.
  * @param {ScriptFurni} furni - Mobilia que foi interagida.
  * @param {boolean} isClose - Se o clique foi feito perto da mobilia.
  */
const interact = (user, furni, isClose) => {}
/**
  * Evento chamado a cada tick. (500ms)
  * @event
  */
const tick = () => {}
/**
  * Evento chamado quando um usuário clica em outro.
  * @event
  */
const playerSelected = (entity, targetEntityOrFakeEntity) => {}
/**
  * Evento chamado ao receber uma mensagem de um client via websocket.
  * @event
  * @param {ScriptEntity} user - Usuário que enviou a mensagem.
  * @param {String} name - Nome do Evento.
  * @param {String} data - Dados recebidos na mensagem.
  */
const uiMessage = (user, name, data) => {}
/**
  * Evento chamado ao receber uma mensagem de outro quarto.
  * @event
  * @param {Number} roomId - id do quarto que enviou a mensagem.
  * @param {String} name - Nome do Evento.
  * @param {String} data - Dados recebidos na mensagem.
  */
const serverMessage = (roomId, name, data) => {}
/**
  * Evento chamado a quando um usuário coloca um mobi no quarto.
  * @event
  * @param {ScriptEntity} user - Usuário que colocou a mobilia.
  * @param {ScriptFurni} furni - Mobilia que foi colocada no quarto.
  */
const floorItemPlaced = (user, furni) => {}
/**
  * Evento chamado a quando um usuário remove um mobi no quarto.
  * @event
  * @param {ScriptEntity} user - Usuário que pegou a mobilia.
  * @param {ScriptFurni} furni - Mobilia que foi removido do quarto.
  */
const floorItemPickedup = (user, furni) => {}
/**
  * Evento chamado a quando um usuário move ou rotaciona um mobi no quarto.
  * @event
  * @param {ScriptEntity} user - Usuário que moveu ou rotacionou a mobilia.
  * @param {ScriptFurni} furni - Mobilia que foi movida ou rotacionada no quarto.
  * @param {Boolean} rotation - Se a mobilia foi rotacionada.
  */
const FloorItemMoved = (user, furni, rotating) => {}
/**
  * Evento chamado quando um usuário pressiona uma das teclas.
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
  * @param {Number} keyCode - Código da tecla que foi pressionada.
  */
const keyDown = (user, keyCode) => {}
/**
  * Evento chamado quando um usuário solta uma das teclas anteriormente pressionada.
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
  * @param {Number} keyCode - Código da tecla que foi solta.
  */
const KeyUp = (user, keyCode) => {}
/**
  * Evento chamado a quando um usário pressiona uma das teclas./**
  * @event
  * @param {ScriptEntity} user - Usuário que clicou no piso.
  * @param {ScriptPosition} position - Posição que foi clicada.
  */
const clickOnFloor = (user, position) => {}
/**
  * Evento chamado a quando um usário captura uma foto no quarto.
  * @event
  * @param {ScriptEntity} user - Usuário que capturou a foto.
  * @param {String} photoId - ID da foto capturada.
  */
const takePhoto = (user, photoId) => {}
/**
  * Evento chamado sempre que um usuário clica sobre uma mobilia.
  * @event
  * @param {ScriptEntity} user - Usuário que clicou na mobilia.
  * @param {ScriptFurni} furni - Mobilia que foi clicada.
  * @param {boolean} isClose - Se o clique foi feito perto da mobilia.
  */
const clickOnFurni = (user, furni, isClose) => {}
/**
  * Evento chamado sempre que um usuário fica ausente.
  * @event
  * @param {ScriptEntity} user - Usuário que ficou ausente.
  */
const userIdle = (user) => {}
/**
  * Evento chamado sempre que um usuário acorda.
  * @event
  * @param {ScriptEntity} user - Usuário que acordou.
  */
const userWakeUp = (user) => {}
/**
  * Evento chamado sempre que um usuário sussura para outro.
  * @event
  * @param {ScriptEntity} user - Usuário que sussurou.
  * @param {ScriptEntity} target - Usuário ou Fake player que recebeu o sussurro.
  */
const whisper = (user, target) => {}
/**
  * Evento chamado sempre que um usuário sussura para um grupo de usuários.
  * @event
  * @param {ScriptEntity} user - Usuário que sussurou.
  * @param {ScriptEntity[]} target - Usuários que receberam o sussurro.
  */
const whisperToGroup = (user, targets) => {}
/**
  * Evento chamado sempre que um usuário interage com menu de um Fake Player.
  * 1: Negociar
  * 2: Respeitar
  * 3: Beijar
  * @event
  * @param {ScriptEntity} user - Usuário que sussurou.
  * @param {FakeEntity} target - Fake Player que o usuário interagiu.
  * @param {number} code - Código do botão
  */
const fakeMenuInteract = (user, fakePlayer, code) => {}
/**
  * Evento chamado sempre que o usuário aceita uma troca pelo Script.
  * @event
  * @param {scriptTrade} trade - Troca que foi aceita.
  */
const acceptTrade = (scriptTrade) => {}
/**
  * Evento chamado sempre que o usuário rejeita uma troca pelo Script.
  * @event
  * @param {scriptTrade} trade - Troca que foi rejeitada.
  */
const unacceptTrade = (scriptTrade) => {}
/**
  * Evento chamado sempre que o usuário confirma uma troca pelo Script.
  * @event
  * @param {scriptTrade} trade - Troca que foi confirmado.
  */
const confirmTrade = (scriptTrade) => {}
/**
  * Evento chamado sempre que o usuário cancela uma troca pelo Script.
  * @event
  * @param {scriptTrade} trade - Troca que foi cancelada.
  */
const cancelTrade = (scriptTrade) => {}
/**
  * Evento chamado sempre que o usuário cancela uma troca pelo Script após já ter confirmado.
  * @event
  * @param {scriptTrade} trade - Troca que foi cancelada.
  */
const cancelConfirmTrade = (scriptTrade) => {}
/**
  * Evento chamado sempre que o usuário adiciona um item a troca.
  * @event
  * @param {scriptTrade} trade - Troca que o item foi adicionado.
  * @param {scriptInventoryItem} inventoryItem - Item do inventário adicionado.
  */
const addTradeItem = (scriptTrade, inventoryItem) => {}
/**
  * Evento chamado sempre que o usuário adiciona mais de um item a troca de uma vez.
  * @event
  * @param {scriptTrade} trade - Troca em que o item foi adicionado.
  * @param {scriptInventoryItem[]} inventoryItems - Itens do inventário adicionados.
  */
const addTradeItems = (scriptTrade, inventoryItems) => {}
/**
  * Evento chamado sempre que o usuário remove uma troca pelo Script após já ter confirmado.
  * @event
  * @param {scriptTrade} trade - Troca em que o item foi removido.
  * @param {scriptInventoryItem[]} inventoryItem - Item da troca removido.
  */
const removeTradeItem = (scriptTrade, inventoryItem) => {}
/**
  * Evento chamado sempre que uma troca pelo script é concluida.
  * @event
  * @param {scriptTrade} trade - Troca que foi concluida.
  */
const completeTrade = (scriptTrade) => {}
