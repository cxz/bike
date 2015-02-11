angular.module('bike.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('StationsCtrl', function($scope, Stations) {
  $scope.stations = Stations.all();
})

.controller('StationDetailCtrl', function($scope, $stateParams, Stations) {
  $scope.station = Stations.get($stateParams.stationId);
})

/*
.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})
*/

.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    //enableFriends: true
  };
});
