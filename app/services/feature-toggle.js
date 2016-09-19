import Ember from 'ember';

export default Ember.Service.extend({

  config: null,

  initializeConfig() {
    var me = this;

    return Ember.$.ajax({
      method: 'GET',
      async: false,
      contentType: 'application/json',
      url: '/57e0357a100000ea01f3a4c7.json'
    }).then(function(result) {
      me.set('config', result);
    });
  }
});
