/* jshint expr:true */
import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

describe('Acceptance: Index', function() {
  beforeEach(function() {
    App = startApp();
  });

  afterEach(function() {
    Ember.run(App, 'destroy');
  });

  it('can visit /index', function() {
    visit('/');

    andThen(function() {
      var title = find('h1');

      expect(currentPath()).to.equal('index');
    });
  });

  it('shows title on index page', function() {
    visit('/');

    andThen(function() {
      var title = find('h1');

      expect(title.text()).to.equal('Ember Testing With Mocha');
    });
  });

  it('can navigate to another page', function() {
    visit('/');
    click('a.another-page');

    andThen(function() {
      expect(currentPath()).to.equal('another');
    });
  });
});
