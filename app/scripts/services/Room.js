(function() {
    function Room($firebaseArray, $cookies) {
        var roomRef = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(roomRef);

        var messageRef = firebase.database().ref().child("messages");
        var messages = $firebaseArray(messageRef);

        var currentDayTime = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();

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
            },
            send: function(messageContent, activeRoomId){
                messages.$add({
                    content: messageContent,
                    roomId: activeRoomId,
                    sentAt: currentDayTime,
                    username: $cookies.get('blocChatCurrentUser')
                });
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
        .factory('Room', ['$firebaseArray', '$cookies', Room]);
})();
