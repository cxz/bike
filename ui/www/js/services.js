angular.module('bike.services', [])

.factory('Stations', function() {

  var stations = [{
    id: 0,
    name: 'S #0',
    title: '',
    description: 'Heyy',
    available: 2,
    free: 12,
    status: '...'
  }, {
    id: 1,
    name: 'S #1',
    title: '',
    description: 'First one',
    available: 2,
    free: 12,
    status: '%$'
  }, {
    id: 2,
    name: 'S #2',
    title: '',
    description: 'Second',
    available: 2,
    free: 12,
    status: '##s'
  }, {
    id: 3,
    name: 'S #3',
    title: '',
    description: 'Third',
    available: 2,
    free: 12,
    status: '!@#'
  }];


  return {
    all: function() {
      return stations;
    },
    get: function(stationId) {
      return stations[stationId];
    }
  }  
});
