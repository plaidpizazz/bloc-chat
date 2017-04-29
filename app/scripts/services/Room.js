(function() {
    function Room($firebaseArray) {
        console.log("Room function is running");

        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        console.log(rooms);

        return {
            all: rooms
        };
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
