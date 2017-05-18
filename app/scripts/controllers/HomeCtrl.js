(function() {
    function HomeCtrl($rootScope, $scope, Room, $uibModal) {
        this.chatRooms = Room.all;
        this.create = function(newRoomName) {
            Room.create(newRoomName);
        };

        this.activeRoom = null;
        this.activeRoomMessages = null;

        this.selectedRoom = function(room) {
            this.activeRoom = room;
            this.activeRoomMessages = Room.getMessagesById(this.activeRoom.$id);
        };

        // this.open = function() {
        //     $rootScope.modalInstance = $uibModal.open({
        //         animation: true,
        //         arialLabelledBy: 'modal-title',
        //         arialDescribedBy: 'modal-body',
        //         templateUrl: 'templates/modal.html',
        //         controller: 'ModalCtrl',
        //         controllerAs: 'modal',
        //         size: 'modal-sm',
        //         scope: $scope
        //     });
        // };

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$rootScope', '$scope', 'Room', '$uibModal', '$cookies', HomeCtrl]);
})();
