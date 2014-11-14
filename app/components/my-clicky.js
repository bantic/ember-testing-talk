import Ember from 'ember';

export default Ember.Component.extend({
  didStuff: false,
  actions: {
    doStuff: function(){
      this.set('didStuff', true);
    }
  }
});
