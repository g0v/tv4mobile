angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Cats', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
    { id: 1, title: 'Dogs', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
    { id: 2, title: 'Turtles', description: 'Everyone likes turtles.' },
    { id: 3, title: 'Sharks', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
  ];

  return {
    all: function() {
      return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  }
})

.factory('IrcTextService', function($http) {
  var promise;
  var IrcText = {
    async: function() {
      if ( !promise ) {
        promise = $http.get('http://congress-text-live.herokuapp.com/json/').then(function (response) {
          return response.data.latest.sort(function(x, y){
            var x_time = x.time.split(':');
            var y_time = y.time.split(':');
            return (parseInt(y_time[0], 10) * 60 + parseInt(y_time[1], 10)) - (parseInt(x_time[0], 10) * 60 + parseInt(x_time[1], 10));
          });
        });
      }
      return promise;
    }
  };
  return IrcText;
});
