import angular from 'angular';
import header from './header/header.module';
import users from './users/users.module';

export default angular.module('handsOnRxJS', [
  header.name,
  users.name
]);
