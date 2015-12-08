import angular from 'angular';
import Rx from 'rx';
import _ from 'lodash';

import header from './header/header.module';
import users from './users/users.module';

export default angular.module('handsOnRxJS', [
  header.name,
  users.name
]);
