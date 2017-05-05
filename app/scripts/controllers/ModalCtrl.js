(function() {
    function ModalCtrl($rootScope, $uibModal, $scope, $uibModalInstance, Room) {
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
        .controller('ModalCtrl', ['$rootScope', '$scope', '$uibModal', '$uibModalInstance', 'Room', ModalCtrl]);
})();
