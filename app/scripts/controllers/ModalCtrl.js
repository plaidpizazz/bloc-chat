(function() {
    function ModalCtrl($rootScope, $uibModal, $scope, Room) {
        this.create = function(room) {
            Room.addRoom(room);
            $uibModalInstance.close();
        };

        this.cancel = function(room) {
            $uibModalInstance.dismiss();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$rootScope', '$scope', '$uibModal', 'Room', ModalCtrl]);
})();
