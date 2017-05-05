(function() {
    function HomeCtrl($rootScope, $scope, Room, $uibModal) {
        this.all = Room.all;

        this.open = function() {
            $rootScope.modalInstance = $uibModal.open({
                animation: true,
                arialLabelledBy: 'modal-title',
                arialDescribedBy: 'modal-body',
                templateUrl: 'templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal',
                size: 'modal-sm',
                scope: $scope
            });
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$rootScope', '$scope', 'Room', '$uibModal', HomeCtrl]);
})();
