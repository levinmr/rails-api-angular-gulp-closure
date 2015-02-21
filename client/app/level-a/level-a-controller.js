goog.provide('app.levela.LevelAController');


goog.require('app.character.CharacterListService');
goog.require('app.character.CharacterModel');
goog.require('app.levela.LevelAService');
goog.require('app.party.PartyModel');
goog.require('app.party.PartyService');


/**
 * [app.levela.LevelAController description]
 * @constructor
 * @param {!angular.Scope} $scope
 * @param {!app.character.CharacterListService} characterListService
 * @param {!app.levela.LevelAService} levelAService
 * @param {!app.party.PartyService} partyService
 * @export
 * @ngInject
 */
app.levela.LevelAController = function(
  $scope, characterListService, levelAService, partyService) {

  /**
   * [$scope_ description]
   * @type {!angular.Scope}
   * @private
   */
  this.$scope_ = $scope;

  /**
   * @type {!app.character.CharacterListService}
   * @private
   */
  this.characterListService_ = characterListService;

  /**
   * @type {!app.levela.LevelAService}
   * @private
   */
  this.levelAService_ = levelAService;

  /**
   * @type {!app.party.PartyService}
   * @private
   */
  this.partyService_ = partyService;

  /**
   * @type {Array.<app.character.CharacterModel>}
   * @expose
   */
  this.characters = [];

  /**
   * @type {app.party.PartyModel}
   * @expose
   */
  this.currentParty = null;

  this.init_();
};

/** @struct */
app.levela.LevelAController.prototype = {

  /**
   * [init_ description]
   * @private
   */
  init_: function() {
    var self = this;
    this.levelAService_.init().then(function() {
      console.log('All Level-A Data Loaded');
      self.characters = self.characterListService_.characters;
      self.currentParty = self.partyService_.party;
    });
  },

  /**
   * [addCharacterToParty description]
   * @param {!app.character.CharacterModel} character
   */
  addCharacterToParty: function(character) {
    console.log(character);
  }
};
