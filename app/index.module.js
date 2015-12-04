import angular from 'angular';
import header from './header/header.module';
import user from './user/user.module';

export default angular.module('handsOnRxJS', [
  header.name,
  user.name
]);
