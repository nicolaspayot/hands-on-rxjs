export class UsersController {
  constructor(Users) {
    'ngInject';

    Users.popularObservable().subscribe(data => {
      const users = _.get(data, 'data.items');
      console.log(users);
    });
  }
}
