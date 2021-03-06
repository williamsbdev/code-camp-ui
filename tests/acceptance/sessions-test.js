import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'code-camp/tests/helpers/start-app';
import {stubHttp}

var application;

module('Acceptance | sessions', {
    beforeEach: function() {
        application = startApp();
    },
    afterEach: function() {
        Ember.run(application, 'destroy');
    }
});

test('shows all sessions for code camp', function(assert) {
    visit('/sessions');
    andThen(function() {
        assert.equal(currentURL(), '/sessions');
        assert.equal(find('.session').length, 3);
        assert.equal(find('.session:eq(0)').text(), "JavaScript 101");
    });
});
