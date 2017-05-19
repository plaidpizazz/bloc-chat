(function() {
    function Room($firebaseArray) {
        var roomRef = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(roomRef);

        var messageRef = firebase.database().ref().child("messages");

        return {
            all: rooms,
            create: function(room) {
                var newRoom = {};
                var number = rooms.length + 1;
                newRoom[number] = room;
                rooms.$add(newRoom[number]);
            },
            getMessagesById: function(activeRoomId) {
                return $firebaseArray(messageRef.orderByChild("roomId").equalTo(activeRoomId));
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
