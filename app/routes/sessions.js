import Ember from 'ember';

var SessionsRoute = Ember.Route.extend({
    model: function() {
        return [
            {name: 'first'},
            {name: 'second'},
            {name: 'third'}
        ];
    }
});

export default SessionsRoute;
