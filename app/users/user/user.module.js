import angular from 'angular';
import userStyle from './user.scss';
import { UserController } from './user.controller';
import { user } from './user.component';

export default angular.module('handsOnRxJS.users.user', [])
  .controller('UserController', UserController)
  .component('user', user);
