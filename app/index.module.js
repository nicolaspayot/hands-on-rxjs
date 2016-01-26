import angular from 'angular';
import Rx from 'rx';
import _ from 'lodash';

import users from './users/users.module';

export default angular.module('handsOnRxJS', [
  users.name
]);
