/// <reference path="types/ScriptEntity.js"/>
/// <reference path="types/ScriptFurni.js"/>

/**
 * Propriedades e Métodos do quarto que o script será executado
 * @namespace Room
 * @author Arthur L
 * @author Gabriel T
 */
const Room = {
    /**
     * Retorna o nome atual do quarto.
     * @returns {String}
     */
    getName: () => {},
    /**
     * Retorna o ID do quarto
     * @returns {Number}
     */
    getId: () => {},
    /**
     * Define o nome do quarto
     * @param {*} name - Novo nome que será definido ao quarto.
     */
    setName: (name) => {},
    /**
     * Abre o quarto
     */
    open: () => {},
    /**
     * Retorna a mobilia correspondente ao ID.
     * @param {Number} id - ID da mobilia a ser buscada.
     * @returns {ScriptFurni}
     */
    getFurniById: (id) => {},
    /**
     * Retorna uma lista de mobilias que estão no piso
     * @param {Number} x - Posição X do piso.
     * @param {Number} y - Posição y do piso.
     * @returns {ScriptFurni[]}
     */
    getFurniByTile: (x, y) => {},
    /**
     * Retorna uma lista de todas as entidades presentes nas mobilias.
     * @param {ScriptFurni[]} furnis - Mobilias a serem consultadas.
     * @returns {ScriptEntity[]}
     */
    getEntitiesByFurnis: (furnis) => {},
    /**
     * Retorna uma lista com todos as mobilias do tipo definido.
     * @param {Number} sprite - Código base da mobilia buscada.
     * @returns {ScriptFurni[]}
     */
    getAllFurnisBySpriteId: (sprite) => {},
    /**
     * Retorna uma lista com todas as entidades presentes na mobilia.
     * @param {ScriptFurni} furni - Mobilia a ser consultada.
     * @returns {ScriptEntity[]}
     */
    getEntitiesByFurni: (furni) => {},
    /**
     * Retorna o ID do dono do quarto
     * @returns {Number}
     */
    ownerId: () => {},
    /**
     * Define o atravessar
     * @param {Boolean} allow - Valor que irá definir se será habilitado ou desabilitado
     */
    setWalkThrough: (allow) => {},
    /**
     * Retorna a quantidade de usuários do quarto
     * @returns {Number}
     */
    userCount: () => {},
    /**
     * Define a diagonal
     * @param {Boolean} allow - Valor que irá definir se será habilitado ou desabilitado
     */
    setDiagonal: (allow) => {},
    /**
     * Retorna o nome do dono do quarto
     * @returns {String}
     */
    getOwnerUsername: () => {},
    /**
     * 
     * @param {String} name - Nome do usuário buscado.
     * @returns {ScriptEntity}
     */
    getPlayerByName: (name) => {},
    /**
     * Envia um alerta para todos do quarto
     * @param {String} message - Mensagem que irá aparecer no alerta.
     */
    alert: (message) => {},
    /**
     * Define campanhia 
     */
    setDoorbell: () => {},
    /**
     * Envia notificação para todos do quarto
     * @param {String} icon - Código do icone que irá aparecer na notificação
     * @param {String} message - Mensagem que irá aparecer na notificação.
     */
    notification: (icon, message) => {},
    /**
     * Define mute do quarto
     * @param {Boolean} mute - Valor que irá definir se será mutado ou desmutado.
     */
    setRoomMute: (mute) => {},
    /**
     * Envia TTS para todos os usuários
     * @param {String} text - Texto a ser lido pela voz sintetizada
     */
    tts: (text) => {},
    /**
     * Retorna o usuário correspondente ao ID.
     * @param {Number} id - ID do usuário buscado.
     * @returns {ScriptEntity}
     */
    getPlayerById: (id) => {},
    /** 
     * Retorna estado atual do atravessar.
     * @returns {Boolean}
     */
    getWalkThrough: () => {},
    /**
     * Retorna estado atual da diagonal.
     * @returns {Boolean}
     */
    getDiagonal: () => {},
    /**
     * Define uma senha para trancar o quarto.
     * @param {String} password - Senha a ser definida.
     */
    setPassword: (password) => {},
    /**
     * Retorna o atual estado do mute no quarto.
     * @returns {Boolean}
     */
    getRoomMute: () => {},
    /**
     * Retorna uma lista com todos os usuários do quarto.
     * @returns {ScriptEntity[]}
     */
    getAllPlayers: () => {},
    /**
     * Reproduz video do Youtube para todos os usuários do quarto.
     * @param {String} link - Link do video do Youtube.
     */
    youtube: (link) => {},
    /**
     * Retorna o bot correspondente ao nome.
     * @param {String} name - Nome do Bot a ser buscado.
     * @returns {ScriptEntity}
     */
    getBotByName: (name) => {},
};
