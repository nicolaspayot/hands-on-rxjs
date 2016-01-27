export class Users {
  constructor($http) {
    'ngInject';

    this.url = 'https://api.github.com/search/users';
    this.$http = $http;
  }

  search(languages) {
    const usersPromise = this.$http.get(`${this.url}?q=language:${languages}+followers:>100`);
    return Rx.Observable
      .fromPromise(usersPromise)
      .map(response => response.data.items);
  }
}
