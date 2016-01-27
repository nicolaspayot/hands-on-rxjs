export class UsersController {
  constructor(Users, $scope) {
    'ngInject';

    Object.assign(this, {
      Users,
      $scope,
      searchEvent: this.observableFromFunction('search').debounce(400)
    });

    this.searchEvent.subscribe(languages => {
      this.Users.search(this.languages).subscribe(users => {
        this.$scope.$apply(() => {
          this.users = users;
        });
      });
    });
  }

  observableFromFunction(name) {
    const observable = new Rx.Subject();
    this[name] = value => {
      observable.onNext(value);
    };
    return observable;
  }
}
