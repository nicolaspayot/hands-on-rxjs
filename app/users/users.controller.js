export class UsersController {
  constructor(Users) {
    'ngInject';

    Object.assign(this, { Users });
  }

  search() {
    if (this.languages) {
      this.Users.search(this.languages).subscribe(data => {
        this.users = _.get(data, 'data.items');
        console.log(this.users);
      });
    }
  }
}
