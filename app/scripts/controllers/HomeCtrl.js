(function() {
    function HomeCtrl(Room) {
        this.all = Room.all;

        this.openMenu = function($mdMenu, event) {
            $mdMenu.open();
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
