import angular from 'angular';
import user from './user/user.module';

import { Users } from './users.service';
import { UsersController } from './users.controller';
import { users } from './users.component';

export default angular.module('handsOnRxJS.users', [
  user.name
])
  .service('Users', Users)
  .controller('UsersController', UsersController)
  .component('users', users);
