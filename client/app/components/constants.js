goog.provide('app.constants');



/**
 * [constants description]
 * @type {!Object}
 * @const
 */
app.constants = {

  /**
   * Names of events to be broadcast
   *
   * @type {!Object}
   * @const
   */
  eventNames: {

    /**
     * Event string for errors
     * @type {string}
     */
    error: 'error occurred',

    /**
     * Names for the update event
     *
     * @type {!Object.<string, Object>}
     */
    update: {

      /**
       * @type {!Object}
       */
      characterList: {

        /**
         * @type {string}
         */
        start: 'update character list',

        /**
         * @type {string}
         */
        finish: 'character list updated'
      },

      /**
       * @type {Object}
       */
      party: {

        /**
         * @type {string}
         */
        start: 'update party',

        /**
         * @type {string}
         */
        finish: 'party updated'
      }
    }
  }
};
