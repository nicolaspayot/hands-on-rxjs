import angular from 'angular';
import indexStyle from './index.scss';
import app from './index.module';

angular.element(document).ready(() => {
  angular.bootstrap(document.body, [ app.name ], {
    strictDi: true
  });
});
