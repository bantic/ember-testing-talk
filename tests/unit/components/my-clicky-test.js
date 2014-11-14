import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleForComponent('my-clicky', 'MyClickyComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
});

test('clicking it does stuff', function() {
  var component = this.subject();

  ok(this.$().find('a.click-me').length, 'has click-me');
  ok(!this.$().find('.did-stuff').length, 'has no did-stuff');

  var self = this;

  Ember.run(function(){
    self.$().find('a.click-me').click();
  });

  ok(this.$().find('.did-stuff').length, 'now has did-stuff');
});
