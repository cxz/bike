angular.module('bike.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('StationsCtrl', function($scope, Stations) {
  $scope.stations = Stations.all();
})

.controller('StationDetailCtrl', function($scope, $stateParams, Stations) {
  $scope.station = Stations.get($stateParams.stationId);
})

.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    //enableFriends: true
  };
});
