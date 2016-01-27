export class UsersController {
  constructor(Users, $scope) {
    'ngInject';

    Object.assign(this, { Users });

    this.searchEvent = this.observableWithFunction('search')
      .debounce(400)
      .distinctUntilChanged();

    const searchSubscription = this.searchEvent.subscribe(languages => {
      this.Users.search(this.languages).subscribe(users => {
        $scope.$apply(() => {
          this.users = users;
        });
      });
    });

    $scope.$on('$destroy', () => {
      searchSubscription.dispose();
    });
  }

  observableWithFunction(name) {
    const observable = new Rx.Subject();
    this[name] = value => {
      observable.onNext(value);
    };
    return observable;
  }
}
