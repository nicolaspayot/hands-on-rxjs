export class Users {
  constructor($http) {
    'ngInject';

    this.url = 'https://api.github.com/search/users';
    this.$http = $http;
  }

  popularObservable() {
    return Rx.Observable.fromPromise(this.$http.get(`${this.url}?q=followers:>5000`));
  }
}
