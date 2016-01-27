import view from './user.html';

export const user = {
  bindings: {
    login: '=',
    url: '=',
    avatarUrl: '='
  },
  controller: 'UserController',
  templateUrl: 'user.html'
}
