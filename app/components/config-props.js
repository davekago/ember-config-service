import Ember from 'ember';

export default Ember.Component.extend({
  featureToggle: Ember.inject.service(),

  init() {
    this._super(...arguments);
    this.get('featureToggle').initializeConfig();
  },

  features: Ember.computed(
    'featureToggle',
    function() {
      return this.get('featureToggle').get('config');
    }
  ),

  config: Ember.computed(function() {
    return this.container.lookupFactory('config:environment');
  })
});
