import view from './user.html';

export const user = {
  bindings: {
    login: '=',
    url: '='
  },
  controller: 'UserController',
  templateUrl: 'user.html'
}
