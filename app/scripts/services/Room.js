(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        return {
            all: rooms,
            addRoom: function(room) {
                var newRoom = {};
                var number = rooms.length + 1;
                newRoom[number] = room;
                rooms.$add(newRoom[number]);
            }
            <!--Remove Room from the firebase array-->
            // removeRoom: function(room) {
            //     var oldRoom = {};
            //     var number = rooms.length - 1;
            //     oldRoom[number] = room;
            //     rooms.$remove(oldRoom[number]);
            // }
        };
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
