/// <reference path="IScriptReachable.js"/>
/// <reference path="ScriptEntity.js"/>
/// <reference path="ScriptAdsData.js"/>

/**
 * Classe que representa mobilia de quarto.
 * @class
 * @hideconstructor
 * @implements {IScriptReachable}
 * @author Arthur L
 * @author Gabriel T
 */
class ScriptFurni {
	/**
	 * Retorna o ID do Furni.
	 * @returns {number}
	 */
	getId () {}
	 /**
	 * Retorna a posição X atual do Furni.
	 * @returns {number}
	 */
	getX () {}
	/**
	 * Retorna a posição Y atual do Furni.
	 * @returns {number}
	 */
	getY () {}
	/**
	 * Retorna a posição Z (altura) atual do Furni.
	 * @returns {number}
	 */
	getZ () {}
	/**
	 * Retorna a atual rotação do Furni.
	 * @returns {number}
	 */
	getR () {}
	/**
	 * Retorna atual estado do furni.
	 * @returns {string}
	 */
	getState () {}
	/**
	 * Retorna o ID do sprite do furni.
	 * @returns {number}
	 */
	getSprite () {}
	/**
	 * Retorna atual opacidade do furni.
	 * @returns {number}
	 */
	getAlpha () {}
	/**
	 * Retorna o nome do furni.
	 * @returns {string}
	 */
	getName () {}
	/**
	 * Retorna o nome público do furni.
	 * @returns {string}
	 */
	getPublicName () {}
	/**
	 * Retorna todas as entidades que estão sobre o furni.
	 * @returns {ScriptEntity[]}
	 */
	getEntities () {}
	/**
	 * Retorna o tipo da interação do furni.
	 * @returns {string}
	 */
	getInteractionType () {}
	/**
	 * Retorna quantidade de interações que o furni possui.
	 * @returns {number}
	 */
	getInteractionModesCount () {}
	 /**
	 * Retorna altura empilhável do furni.
	 * @returns {number}
	 */
	getStackHeight () {}
	/**
	 * Retorna a largura do furni.
	 * @returns {number}
	 */
	getItemWidth () {}
	/**
	 * Retorna o comprimento do Furni.
	 * @returns {number}
	 */
	getItemLength () {}
	/**
	 * Retorna a altura do Furni.
	 * @returns {number}
	 */
	getItemHeight () {}
	/**
	 * Retorna o ID de definição da lista de Raros.
	 * @returns {number}
	 */
	getDefinitionId () {}
  /**
   * Retorna o unidade do LTD do raro. 0 caso não seja um LTD
	 * @returns {number}
   */
  getLimitedUnit () {}
  /**
   * Retorna o máximo de unidades do LTD do raro.
	 * @returns {number}
   */
  getLimitedTotal () {}
  /**
   * Retorna os dados para manipulação do ADS.
   * @returns {ScriptAdsData}
   */
  getAdsData () {}
  /**
   * Retorna a primeira cor do mobi, caso seja um mobi colorivel.
	 * @returns {number}
   */
  colorA () {}
  /**
   * Retorna a segunda cor do mobi, caso seja um mobi colorivel.
	 * @returns {number}
   */
  colorB () {}
	/**
	 * Retorna se a entidades a cima do furni.
	 * @returns {boolean}
	 */
	hasEntities () {}
	/**
	 * Retorna se o furni é sentável por uma entidade.
	 * @returns {boolean}
	 */
	canSit () {}
	/**
	 * Retorna se entidades podem andar sobre o furni.
	 * @returns {boolean}
	 */
	canWalk () {}
  /**
   * Retorna se o mobi é deletavel.
   * @returns {boolean}
   */
  canDelete () {}
  /**
   * Remove o mobi do quarto, retornando para o inventário do dono.
   */
  removeFromRoom() {}
	/**
	 * Mostra o furni
	 */
	show () {}
	/**
	 * Esconde o furni.
	 */
	hide () {}
	/**
	 * Ativa a interação do furni.
	 */
	toggleState () {}
  /**
	 * Define o estado do crônometro.
   * @param {boolean} state - Se o cronômetro deve iniciar/continuar ou parar.
	 */
	toggleTimer (state) {}
    /**
	 * Move o furni até a posição fornecida.
	 * @param {number} x - Posição X para onde o furni será movido.
	 * @param {number} y - Posição y para onde o furni será movido.
	 * @param {number} z - Posição Z para onde o furni será movido.
	 */
	move (x, y, z) {}
  /**
	 * Move o furni até a posição fornecida.
	 * @param {number} x - Posição X para onde o furni será movido.
	 * @param {number} y - Posição y para onde o furni será movido.
	 * @param {number} z - Posição Z para onde o furni será movido.
	 * @param {boolean} ignoreEntities - Se deve ignorar entidades no piso que será movido.
   * @param {boolean} ignoreFurnis - Se deve ignorar furnis no piso que será movido.
	 */
	move (x, y, z, ignoreEntities, ignoreFurnis) {}
	/**
	 * Teletransporta o furni até a posição fornecida.
	 * @param {number} x - Posição X para onde o furni será movido.
	 * @param {number} y - Posição y para onde o furni será movido.
	 * @param {number} z - Posição Z para onde o furni será movido.
	 * @param {number} rot - Rotação definida ao furni ao ser movido.
	 */
	move (x, y, z, rot) {}
  /**
	 * Move o furni até a posição fornecida.
	 * @param {number} x - Posição X para onde o furni será movido.
	 * @param {number} y - Posição y para onde o furni será movido.
	 * @param {number} z - Posição Z para onde o furni será movido.
   * @param {number} rot - Rotação definida ao furni ao ser movido.
	 * @param {boolean} ignoreEntities - Se deve ignorar entidades no piso que será movido.
   * @param {boolean} ignoreFurnis - Se deve ignorar furnis no piso que será movido.
	 */
	move (x, y, z, rot, ignoreEntities, ignoreFurnis) {}
	/**
	 * Teletransporta o furni até a posição fornecida.
	 * @param {IScriptReachable} object - Onde o furni será movido.
	 * @param {number} rot - Rotação
	 */
	move (object, rot) {}
   /**
	 * Teletransporta o furni até a posição fornecida.
	 * @param {number} x - Posição X para onde o furni será teletransportado.
	 * @param {number} y - Posição y para onde o furni será teletransportado.
	 * @param {number} z - Posição Z para onde o furni será teletransportado.
	 */
	warp (x, y, z) {}
   /**
	 * Teletransporta o furni até a posição fornecida.
	 * @param {number} x - Posição X para onde o furni será teletransportado.
	 * @param {number} y - Posição y para onde o furni será teletransportado.
	 * @param {number} z - Posição Z para onde o furni será teletransportado.
   * @param {boolean} ignoreEntities - Se deve ignorar entidades no piso que será teletransportado.
   * @param {boolean} ignoreFurnis - Se deve ignorar furnis no piso que será teletransportado.
	 */
	warp (x, y, z, ignoreEntities, ignoreFurnis) {}
  /**
   * @param {number} r - Rotação a ser definida
   * @param {boolean} ignoreEntities - Se deve ignorar entidades no piso
   * @param {boolean} ignoreFurnis - Se deve ignorar furnis no piso
   */
  setRotation(r, ignoreEntities, ignoreFurnis) {}
	/**
	 * Altera o estado do Furni.
	 * @param {*} value - Valor do estado em que o furni será definido.
	 */
	setState (value) {}
	/**
	 * Define a opacidade do Furni.
	 * @param {number} alpha - Valor da opacidade (1 a 255).
	 * @returns {boolean}
	 */
	setOpacity (alpha) {}
}
