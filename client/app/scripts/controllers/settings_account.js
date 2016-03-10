/**
 * @ngdoc function
 * @name iReceptionistApp.controller:SettingsCtrl
 * @description
 * # SettingsAccountCtrl
 * Controller for the settings page
 */
angular.module('iReceptionistApp')
    .controller('SettingsAccountCtrl', function($rootScope, $scope, $cookies, DropZone, BusinessService, UserService) {
        $rootScope.currentState = 'settings-account';
        $('#page-content-ui-view').resize(function() {
            $('#page-content-ui-view').width($rootScope.pageContentWidth());
            $('#page-content').height($rootScope.pageContentHeight());
        });

        $scope.user = $cookies.getObject('user');
        $scope.business = $cookies.getObject('business');

        /* This is how you'll want to call update -- the second argument will need to be an object with ONLY the info
        *  want to change.  So you'll want to check for changes and only include those that are different.
        *  The object MUST include businessId, so don't remove that part
        */
        //BusinessService.updateBusiness(
        //    {
        //      "businessId": $scope.user.business
        //    },
        //    $cookies.get('token') ,
        //    function (busObj){
        //        console.log("update success");
        //    },
        //    function (err) {
        //        console.log("update fail");
        //    }
        //);

        //UserService.updateUser(
        //    {
        //        'phone': '0192837465'
        //    },
        //    $cookies.get('token'),
        //    function (userObj) {
        //        console.log("user update success");
        //        console.log(userObj);
        //    },
        //    function (err) {
        //        console.log("user update fail");
        //    }
        //);

        //UserService.changePassword(
        //    {
        //        'oldPassword': 'oldValue',
        //        'newPassword': 'newValue'
        //    },
        //    $cookies.get('token'),
        //    function (userObj) {
        //        console.log("change password success: " + userObj);
        //    },
        //    function (err) {
        //        console.log("change password fail");
        //    }
        //);

        $scope.avatarUpload = DropZone.createNew('#avatarUpload');
        $scope.logoUpload = DropZone.createNew('#logoUpload');
        $scope.bgUpload = DropZone.createNew('#bgUpload');
    });
