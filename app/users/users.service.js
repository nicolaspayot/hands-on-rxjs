export class Users {
  constructor($http) {
    'ngInject';

    this.url = 'https://api.github.com/search/users';
    this.$http = $http;
  }

  search(languages) {
    return Rx.Observable.fromPromise(this.$http.get(`${this.url}?q=language:${languages}+followers:>5000`));
  }
}
