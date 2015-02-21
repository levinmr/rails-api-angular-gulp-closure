goog.provide('app.levela.LevelAService');


goog.require('app.character.CharacterListService');
goog.require('app.event.EventService');
goog.require('app.party.PartyService');


/**
 * [app.levela.LevelAService description]
 * @constructor
 * @param {!app.event.EventService} eventService
 * @param {!app.character.CharacterListService} characterListService
 * @param {!app.party.PartyService} partyService
 * @param {!angular.$q} $q
 * @ngInject
 * @export
 */
app.levela.LevelAService = function(
  eventService, characterListService, partyService, $q) {

  /**
   * @type {!app.event.EventService}
   * @private
   */
  this.eventService_ = eventService;

  /**
   * @type {!app.character.CharacterListService}
   * @private
   */
  this.characterListService_ = characterListService;

  /**
   * @type {!app.party.PartyService}
   * @private
   */
  this.partyService_ = partyService;

  /**
   * [$q_ description]
   * @type {!angular.$q}
   * @private
   */
  this.$q_ = $q;
};

/**
 * Broadcast the events to populate the services for data we need on level A
 * Listen for the update events to complete and then resolve the promises
 *
 * @return {!angular.$q.Promise}
 * @export
 */
app.levela.LevelAService.prototype.init = function() {
  var deferredParty, deferredCharacterList;
  deferredParty = this.$q_.defer();
  deferredCharacterList = this.$q_.defer();

  this.eventService_.subscribe('party', function(data) {
      console.log('Party: ' + data);
      deferredParty.resolve();
    });
  this.eventService_.subscribe('character', function(data) {
      console.log('Character: ' + data);
      deferredCharacterList.resolve();
    });

  this.eventService_.publish('character', 'update list');
  this.eventService_.publish('party', 'update');

  return this.$q_.all([deferredParty.promise, deferredCharacterList.promise]);
};
